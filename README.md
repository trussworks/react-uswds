# truss-uswds-react

## Purpose

This is a front end component library aiming to develop React component implementations of the patterns defined by the [United States Web Design System (USWDS)](https://designsystem.digital.gov/).

It is currently in active development.

## Goals
- Outcome is a published npm package that can be included as a dependency in other projects that use USWDS with React.
- Provide JS exports that can be imported using ES6 import syntax:
  ```
  import { Button } from 'truss-uswds-react'
  ```
- Provide compiled, static assets that can be included directly, as well as source code that can be loaded via a bundler such as webpack:
  ```
  import '/path/to/node_modules/truss-uswds-react/styles.scss'
  ```
- Encourage a strict separation of concerns, focusing on UI only (rendered HTML and CSS).
- Expose necessary props for composability and extensibility, such as event handlers, custom classNames, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this depedency can focus on integration and implementation.
- Provide thorough documentation (using a web interface such as Storybook) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

If the above goals are substantively met, this project has a high potential to be open sourced, and provide value for other groups who want to use USWDS with React.

### Initial decisions to make
- Package manager (npm, yarn)
- Bundler (webpack, rollup)
- Versioning (semver)
- Git flow, issues, branches, etc.