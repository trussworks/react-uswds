# AGENTS.md

This file provides guidance for any coding agent working in this repository.
Our priority is long-term maintainability, codebase consistency, and best
practices over speed.

## Project Overview

`@trussworks/react-uswds` is a React component library implementing the U.S. Web Design System (USWDS) 3.0.
It provides accessible, semantic React components for government web applications.

This library is widely used in government applications where stability is paramount. Changes must be evaluated
for backwards compatibility to existing implementers. If a change is not backwards compatible, the final PR
commit message must specify what actions implementers need to take to navigate the breaking changes.

Test coverage is important for all new code. Existing test suites must pass (or be properly updated to pass)
with all new changes.

## Quick Start (Local Dev)

```bash
# Install dependencies
yarn install

# Run tests
yarn test                    # Run all tests once
yarn test ComponentName      # Run tests for specific component
yarn test:watch              # Run tests in watch mode
yarn test:coverage           # Run tests with coverage report

# Development
yarn storybook               # Start Storybook dev server on port 9009
yarn build                   # Build library to /lib
yarn build:watch             # Build in watch mode

# Linting & Formatting
yarn lint                    # Run TypeScript, ESLint, and Stylelint
yarn lint:fix                # Auto-fix lint errors
yarn format:check            # Check Prettier formatting
yarn format:fix              # Auto-fix formatting
```

## Environment Setup

- Use the Node version in `.node-version`. Use a version manager if needed.
- Use Yarn for package management.
- Configure git hooks:

```bash
yarn simple-git-hooks
```

## Architecture and Conventions

### Component Structure

Components live in `src/components/` with this file pattern:

- `ComponentName/ComponentName.tsx` - Component implementation
- `ComponentName/ComponentName.test.tsx` - Unit tests (Vitest + React Testing Library)
- `ComponentName/ComponentName.stories.tsx` - Storybook stories

Complex components use subcomponents in subdirectories (e.g., `banner/`, `header/`, `forms/`, `card/`).

### Exports

All components must be exported from `src/index.ts`. Export both the component and its props type:

```typescript
export { Button } from './components/Button/Button'
export type { ButtonProps } from './components/Button/Button'
```

### Props Pattern

Components extend standard HTML element attributes using spread attributes:

```typescript
interface FormProps {
  children: React.ReactNode
  big: boolean
}

export const Form = (
  props: FormProps & JSX.IntrinsicElements['form']
): React.ReactElement =>
```

### Build Output

- Built with Vite to `/lib`
- Outputs CJS, ES, IIFE, and UMD formats
- Includes `"use client"` directive for React Server Components support
- CSS compiled from SCSS with USWDS dependencies

## Testing and Quality

- Uses Vitest with jsdom environment
- React Testing Library for component testing
- Coverage thresholds: 96% statements, 87% branches, 94% functions, 96% lines
- Visual regression tests via Happo.io against Storybook
- Format and linting are enforced by CI (Prettier, TypeScript, ESLint, Stylelint).
- DangerJS enforces:
  - Tests updated for source changes.
  - New `src/components` files include Storybook stories.
  - New `src/components` files are exported in `src/index.ts`.
  - Dependency changes include `yarn.lock` updates and pass `yarn audit`.

## USWDS Usage Notes (For Consumers)

It is strongly suggested applications use the same version of USWDS that was used to build the version of
ReactUSWDS they are using (see the USWDS `devDependency` in `package.json`). A version mismatch may result in
unexpected markup and CSS combinations. ReactUSWDS will not warn if consumers use a higher minor version of
USWDS (the peer dependency is caret-ranged), but if markup issues occur, align versions first.

**Important:** Do not include USWDS JavaScript in a consuming project alongside this library (i.e., avoid
`import 'uswds'`), as that can cause components that use JS (such as ComboBox) to initialize twice.

Consumers should also import the compiled CSS:

```
@import '~@trussworks/react-uswds/lib/index.css';
```

If the consumer does not already use USWDS, they must also import USWDS styles and assets. See
`docs/styles_and_assets.md` and `docs/faqs.md`.

## Node and Compatibility

Development uses the Node version defined in `.node-version`. CI tests against currently supported LTS
versions (see `.github/workflows/build-and-test.yml`). Pre-release or development versions of Node may
produce unexpected issues.

React compatibility: 16.x through 19.x.

## TypeScript and React Type Guidance

- Treat `@types/react` (or React’s type definitions) as the source of truth for event types and APIs.
- Before implementing or refactoring types, check React version changes that might affect typing patterns.
- Do not assume a type name exists; verify it in the actual React type definitions.
- When fixing deprecations, search broadly for all related deprecated types and update them consistently.
- Prefer official React namespace types (e.g., `React.*`) over derived types when forward compatibility matters.
- If a pattern exists in the codebase, confirm it is still recommended for the current React version.
- Choose the option that improves long-term maintainability even if it diverges from existing patterns.

## USWDS Integration Tips

- Treat USWDS docs and Storybook examples as the source of truth for markup and behavior.
- Keep markup and class names aligned with USWDS to avoid styling regressions.
- Prefer additive customization over altering core USWDS class structures.
- Validate mobile behavior, focus states, and keyboard interactions against USWDS guidance.
- Avoid adding custom JS that conflicts with USWDS behavior, especially for components with JS counterparts.

## Development Workflow

### Working on Issues

- Make sure an issue exists and is ready (some issues are labeled `status: needs requirements`).
- Assign yourself to the issue and mark it In Progress.
- Branch naming convention (for contributors): `{initials-or-username}-{summary}-{issue #}`.

### Long-Term Quality Guidelines

- Favor composable, extensible components and stable APIs.
- Keep UI components focused on presentation and interaction, not app-specific logic.
- Avoid breaking changes when possible; use staged deprecations.
- Write tests for behavior and accessibility, and keep Storybook coverage thorough.
- Ensure changes are consistent with existing patterns in the codebase.

## Breaking Changes and Deprecations

Use `withDeprecationWarning` from `src/components/hoc/withDeprecationWarning.tsx` to deprecate components
before making breaking changes. If a change is breaking, the squash-merge commit message must include
specific instructions for implementers.

## Component Design Guidelines

### Checklist (New Components)

- A GitHub issue with requirements (props, expected state, behaviors).
- Component file in a matching folder, e.g. `Component/Component.tsx`.
- Export in `src/index.ts`.
- Unit tests for props and event handlers.
- Storybook stories with parity to USWDS examples.

### Sourcing Requirements

When implementing components, reference:

- USWDS docs for HTML and written guidance.
- USWDS Storybook for live examples.
- USWDS repo for implementation details.
- MDN for HTML attributes and semantics.

Pay special attention to mobile behavior, interaction patterns (click, focus, hover), and accessibility
(keyboard support, multiple handlers when using non-interactive elements).

### Props

- Require props that are fundamental to the element (e.g., `id`, `name` for form inputs).
- Make other props optional and extend standard HTML attributes.
- Avoid conflicting boolean props; use enums when mutually exclusive.
- Use spread attributes to allow `aria-*`, class names, and event handlers.

### State

- Group state hooks at the top of the component.
- Prefer functional `setState` updates.
- Keep business logic out of state; prefer props when consumers should control behavior.

### Children

- Use `children` for unstructured or optional content.

### Subcomponents

- Use subcomponents to isolate concerns and improve composition.
- Group subcomponents in folders; only add stories when reusable.

## PR and Commit Conventions

PR titles must follow Conventional Commits:

- `feat`: New feature (minor version bump)
- `fix`: Bug fix (patch version bump)
- `BREAKING CHANGE` or `!`: Major version bump
- Other types: `build`, `ci`, `chore`, `docs`, `perf`, `refactor`, `revert`, `style`, `test`

PRs are squash-merged; the title becomes the commit message. Use the PR template in
`.github/pull_request_template.md`.

## Testing in a Real Application

If needed, test changes in a consuming app:

- `yarn link` to symlink the local package, run `yarn build:watch`, and link in the app.
- Remember to unlink when done.
- If you see invalid hook call errors, you may need to link `react` and `react-dom` too.
- For Next.js apps, you may need to externalize and alias `react` in `next.config.js`.

You can also install a specific branch in a consuming app by pointing the dependency to a GitHub branch and
running `yarn install`. Ensure you return to a released version once the branch is merged.

## Releases (Maintainers Only)

- Releases are managed via conventional commits and release-please.
- Release PRs update `CHANGELOG.md` and `package.json`.
- Merging a release PR creates a tag and triggers `package-release.yml`, which produces the publishable tarball.
- Publishing requires maintainers to download the artifact and run `npm publish` on the tarball.
- If a release is broken, fix via normal PR, release again, and deprecate the bad version in npm.

## All Contributors

Do not manually edit the All Contributors sections in `README.md` or `.all-contributorsrc`.
Use the bot or `yarn contributors:add`.

## Helpful References

- Storybook: https://trussworks.github.io/react-uswds/
- Contributing guide: `docs/contributing.md`
- Adding new components: `docs/adding_new_components.md`
- Testing in an application: `docs/contributing.md#testing-in-an-application`
- Releasing: `docs/releasing/releasing.md`
- Pre-release notes: `docs/prerelease.md`
- Maintainers: `docs/for_maintainers.md`
- Trussels onboarding: `docs/for_trussels.md`
