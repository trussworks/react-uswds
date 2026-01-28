# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is @trussworks/react-uswds, a React component library implementing the U.S. Web Design System (USWDS) 3.0.
It provides accessible, semantic React components for government web applications.

This library is widely used in government applications where stability is paramount.
Changes to the library must be evaluated for being backwards compatible to existing implementers.
If a change is not backwards compatible, squashed PR commits must specify what actions implementers of the library will need to take to navigate the breaking changes.

Test coverage is important for all new code.
Existing test suites must pass (or be properly updated to pass) with all new changes.

## Essential Commands

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

## Architecture

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

## Testing

- Uses Vitest with jsdom environment
- React Testing Library for component testing
- Coverage thresholds: 96% statements, 87% branches, 94% functions, 96% lines
- Visual regression tests via Happo.io against Storybook

## Commit Conventions

PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature (minor version bump)
- `fix`: Bug fix (patch version bump)
- `BREAKING CHANGE` or `!`: Major version bump
- Other types: `build`, `ci`, `chore`, `docs`, `perf`, `refactor`, `revert`, `style`, `test`

PRs are squash-merged; the title becomes the commit message.

## Breaking Changes

Use `withDeprecationWarning` HOC from `src/components/hoc/withDeprecationWarning.tsx` to deprecate components gracefully before making breaking changes.

## Pull Requests

Pull Requests should use the [pull request template](.github/pull_request_template.md) provided in the repository.

## Key Dependencies

- React 16.x-19.x supported
- [USWDS](https://designsystem.digital.gov/) ([Github](https://github.com/uswds/uswds)) 3.13.0 (match devDependency version to avoid markup/CSS issues)
- focus-trap-react for modal focus management

## Hosting

- Hosted in NPM at https://www.npmjs.com/package/@trussworks/react-uswds
