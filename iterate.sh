#!/usr/bin/env bash
set -euo pipefail

# Usage: ./iterate.sh [--claude|--codex] <task-file.md> [max-rounds]
# Example: ./iterate.sh --codex fix-auth-bug.md 5
#
# State is persisted to .iterate/ in the current directory:
#   .iterate/progress.md       — cumulative log of work and feedback
#   .iterate/round-N-work.md   — raw work output for round N
#   .iterate/round-N-review.md — raw review output for round N
#
# The repo's git history is also used as ground truth.
# The script creates a branch and commits after each work phase,
# so you can inspect or roll back at any point.
#
# Press Ctrl-C to stop. The script will kill the running model process
# process and exit cleanly. All completed work is already committed.

# --- Ctrl-C handling ---
CHILD_PID=""
cleanup() {
  echo ""
  echo "⛔ Interrupted. Cleaning up..."
  if [ -n "$CHILD_PID" ] && kill -0 "$CHILD_PID" 2>/dev/null; then
    kill -TERM "$CHILD_PID" 2>/dev/null
    wait "$CHILD_PID" 2>/dev/null || true
  fi
  echo "  All completed rounds are committed on branch: $BRANCH_NAME"
  echo "  Progress log: $PROGRESS_FILE"
  exit 130
}
trap cleanup INT TERM

usage() {
  echo "Usage: $0 [--claude|--codex] <task-file.md> [max-rounds]"
}

MODEL_PROVIDER="claude"
POSITIONAL_ARGS=()

for arg in "$@"; do
  case "$arg" in
    --claude)
      MODEL_PROVIDER="claude"
      ;;
    --codex)
      MODEL_PROVIDER="codex"
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    -*)
      echo "Error: Unknown option '$arg'"
      usage
      exit 1
      ;;
    *)
      POSITIONAL_ARGS+=("$arg")
      ;;
  esac
done

set -- "${POSITIONAL_ARGS[@]}"

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

if [ $# -gt 2 ]; then
  echo "Error: Too many arguments"
  usage
  exit 1
fi

TASK_FILE="$1"
MAX_ROUNDS="${2:-5}"

if [ ! -f "$TASK_FILE" ]; then
  echo "Error: File '$TASK_FILE' not found"
  exit 1
fi

if ! command -v "$MODEL_PROVIDER" >/dev/null 2>&1; then
  echo "Error: '$MODEL_PROVIDER' CLI not found in PATH"
  exit 1
fi

# Ensure we're in a git repo
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  echo "Error: Not inside a git repository. This script uses git to track changes."
  exit 1
fi

# Setup
STATE_DIR=".iterate"
PROGRESS_FILE="$STATE_DIR/progress.md"
BRANCH_NAME="iterate/$(basename "$TASK_FILE" .md)-$(date +%Y%m%d-%H%M%S)"

mkdir -p "$STATE_DIR"

# Create and switch to working branch
ORIGINAL_BRANCH=$(git branch --show-current)
git checkout -b "$BRANCH_NAME"

# Initialize progress file
cat > "$PROGRESS_FILE" <<EOF
# Iteration Progress

## Task
$(cat "$TASK_FILE")

## Rounds
EOF

git add -A
git commit --no-verify -m "iterate: initialize progress tracking" --quiet --allow-empty

run_model() {
  local phase="$1"
  local prompt="$2"
  local output_file="$3"

  if [ "$MODEL_PROVIDER" = "claude" ]; then
    local allowed_tools="Bash,Read"
    if [ "$phase" = "work" ]; then
      allowed_tools="Bash,Read,Write,Edit"
    fi
    claude -p "$prompt" --allowedTools "$allowed_tools" 2>/dev/null > "$output_file" &
  else
    if [ "$phase" = "work" ]; then
      codex exec --full-auto "$prompt" 2>/dev/null > "$output_file" &
    else
      codex exec --sandbox read-only "$prompt" 2>/dev/null > "$output_file" &
    fi
  fi

  CHILD_PID=$!
  wait "$CHILD_PID" || true
  CHILD_PID=""
}

echo "╔══════════════════════════════════════════╗"
echo "║  Adversarial Coding Loop                 ║"
echo "║  Model: $MODEL_PROVIDER"
echo "║  Task: $TASK_FILE"
echo "║  Branch: $BRANCH_NAME"
echo "║  Max rounds: $MAX_ROUNDS"
echo "║  State: $STATE_DIR/"
echo "║  Press Ctrl-C to stop                    ║"
echo "╚══════════════════════════════════════════╝"
echo ""

for round in $(seq 1 "$MAX_ROUNDS"); do
  echo "═══════════════════════════════════════════"
  echo "  Round $round/$MAX_ROUNDS — WORK PHASE"
  echo "═══════════════════════════════════════════"

  # Work prompt points to files on disk — not bash variables
  WORK_PROMPT="You are a skeptical senior engineer working on a coding task. Start by reading these files:

1. The task definition: $TASK_FILE
2. The progress log: $PROGRESS_FILE

These files are your source of truth. Read them now with the Read tool.

For every round, first evaluate the current codebase against the task and progress log with a skeptical expert eye.
Treat prior review feedback as fallible input, not unquestioned instructions.

If there is prior review feedback:
- Validate each item against the task requirements and actual code
- Fix what is correct and relevant
- If any feedback is incorrect or outdated, do not apply it blindly; explain why in your summary

If this is the first round, implement the task from scratch.
If this is a later round, continue from current code while preserving already-correct behavior.

When finished:
1. Make sure all changes are saved to disk.
2. Output a section at the very end delimited by <summary> tags containing:
   - What you changed and why
   - What you validated and how (task/progress/code checks)
   - What files were modified
   - Any remaining concerns or known issues
   - Be specific — file names, function names, line numbers."

  # Run selected model in background so we can kill it on ctrl-c
  run_model "work" "$WORK_PROMPT" "$STATE_DIR/round-${round}-work.md"

  WORK_OUTPUT=$(cat "$STATE_DIR/round-${round}-work.md")

  # Extract summary
  WORK_SUMMARY=$(echo "$WORK_OUTPUT" | sed -n '/<summary>/,/<\/summary>/p' | sed 's/<\/?summary>//g')
  if [ -z "$WORK_SUMMARY" ]; then
    echo "⚠  No <summary> tags in work output. Using last 50 lines."
    WORK_SUMMARY=$(echo "$WORK_OUTPUT" | tail -50)
  fi

  # Commit the work (--no-verify skips git hooks like linters/formatters)
  git add -A
  if git diff --cached --quiet; then
    echo "⚠  No file changes detected in round $round."
    DIFF_SUMMARY="(No file changes were made this round)"
  else
    git commit --no-verify -m "iterate: round $round work phase" --quiet
    DIFF_SUMMARY=$(git diff HEAD~1 --stat)
  fi

  # Append work summary to progress file
  cat >> "$PROGRESS_FILE" <<EOF

### Round $round — Work
$WORK_SUMMARY

**Files changed (git):**
\`\`\`
$DIFF_SUMMARY
\`\`\`

EOF

  echo ""
  echo "═══════════════════════════════════════════"
  echo "  Round $round/$MAX_ROUNDS — REVIEW PHASE"
  echo "═══════════════════════════════════════════"

  REVIEW_PROMPT="You are a skeptical senior engineer reviewing work done by another engineer.

Read these files:
1. The original task: $TASK_FILE
2. The progress log: $PROGRESS_FILE

Then inspect the actual code changes by running: git diff HEAD~1

Treat task + progress as source of truth, and verify everything against the real code with a skeptical expert eye.

Review for:
- Correctness and edge cases
- Code quality and consistency with the existing codebase
- Whether the original task is FULLY addressed (not just partially)
- Any bugs, missing error handling, or issues
- Whether the implementation matches what the work summary claims

Be skeptical. Do not take the implementer's word for it — verify against the actual code.

If everything looks good and the task is fully and correctly complete, respond with exactly APPROVED on a line by itself.
Otherwise, respond with specific, actionable feedback inside <summary> tags. Be precise: file names, line numbers, what's wrong, and what the fix should be."

  # Run selected model in background so we can kill it on ctrl-c
  run_model "review" "$REVIEW_PROMPT" "$STATE_DIR/round-${round}-review.md"

  REVIEW_OUTPUT=$(cat "$STATE_DIR/round-${round}-review.md")

  if echo "$REVIEW_OUTPUT" | grep -q "^APPROVED$"; then
    cat >> "$PROGRESS_FILE" <<EOF

### Round $round — Review
✅ **APPROVED**
EOF
    git add -A
    git commit --no-verify -m "iterate: approved after round $round" --quiet

    echo ""
    echo "✅ APPROVED after $round round(s)"
    echo ""
    echo "  Branch:       $BRANCH_NAME"
    echo "  Progress log: $PROGRESS_FILE"
    echo "  Raw outputs:  $STATE_DIR/round-*"
    echo ""
    echo "  To merge: git checkout $ORIGINAL_BRANCH && git merge $BRANCH_NAME"
    exit 0
  fi

  # Extract review feedback
  REVIEW_SUMMARY=$(echo "$REVIEW_OUTPUT" | sed -n '/<summary>/,/<\/summary>/p' | sed 's/<\/?summary>//g')
  if [ -z "$REVIEW_SUMMARY" ]; then
    echo "⚠  No <summary> tags in review output. Using last 50 lines."
    REVIEW_SUMMARY=$(echo "$REVIEW_OUTPUT" | tail -50)
  fi

  # Append feedback to progress file and commit
  cat >> "$PROGRESS_FILE" <<EOF

### Round $round — Review Feedback
$REVIEW_SUMMARY

EOF
  git add -A
  git commit --no-verify -m "iterate: round $round review feedback" --quiet

  echo "  Reviewer requested changes. Continuing..."
  echo ""
done

echo ""
echo "⚠  Reached max rounds ($MAX_ROUNDS) without approval."
echo ""
echo "  Branch:       $BRANCH_NAME"
echo "  Progress log: $PROGRESS_FILE"
echo "  Raw outputs:  $STATE_DIR/round-*"
echo ""
echo "  You can continue manually, adjust your task file, or run again."
exit 
