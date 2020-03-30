# @trussworks/react-uswds

[![CircleCI](https://circleci.com/gh/trussworks/react-uswds.svg?style=svg&circle-token=a003f78b224f32fcab60155e3c0917a8040c5b96)](https://circleci.com/gh/trussworks/react-uswds)

## Summary

This is a front end component library whose aim is to develop [React](https://reactjs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

## Table of Contents

1. [Goals](#goals)
1. [Contributing](/docs/contributing.md)
1. [Usage](#usage)
1. [Using SCSS](/docs/scss.md)

## Goals

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. In order for these components to be actually useful, they should follow best practices and baseline standards for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization in implementation (such as via React `props`). Therefore we should adhere to these development guidelines as much as possible:

- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this depedency can focus on integration and implementation.
- Provide thorough documentation (using a web interface such as Storybook) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

### Non-Goals

This is not meant to be a one-size-fits-all front end solution to every Truss web project. We are starting off with the very opinionated decision to cater towards a project that wants to use (or at least branch off of) USWDS 2.0, and is using React as a front end framework.

In addition to working towards the above outcomes, we are hoping to gain learnings around how to best abstract out UI code from implementation; help demonstrate and standardize front end code practices for other Truss projects; and develop and distribute a shared JS library to other teams.

## Usage

Install this package with npm or yarn:

```
yarn add @trussworks/react-uswds

npm install @trussworks/react-uswds
```

You can then import modules using ES6 syntax:

```
import { Alert } from '@trussworks/react-uswds'
```

Also make sure to include the following in order to import the compiled CSS from this project:

```
@import '~@trussworks/react-uswds/lib/index.css';
```

**[More info about using USWDS CSS & SCSS](./docs/scss.md)**

## Roadmap

- [x] Add lint configs and pre-commit hooks for contributing
- [x] Set up CI for running tests and linting
- [x] Add support for and convert existing component(s) to TypeScript
- [x] Decide on and document git workflow for this project
- [x] Decide on and document release workflow for the package
- [x] Load and export USWDS CSS
- [x] Load and export USWDS fonts/svgs/other assets
- [x] Decide on long-term lib publishing/hosting solution
- [x] Add CI status badge
- [ ] Document decision behind node version and upgrade plan
- [ ] ADR to decide on and set up a React component test helper:
  - https://airbnb.io/enzyme/
  - https://testing-library.com/docs/react-testing-library/
- [ ] Enable `pkg.module` entrypoint for better module and tree shaking:
  - https://github.com/rollup/rollup/wiki/pkg.module
  - https://stackoverflow.com/questions/41289200/output-an-es-module-using-webpack
- [ ] Add more documentation around how to contribute and write new components
- [ ] Add component scaffolding shortcut (for generating component, tests, stories files with template code)
- [ ] Add testing coverage collection
- [ ] Set up Storybook as public Github page
- [ ] Add example application that uses the library to the repo
- [ ] Setup https://danger.systems/js/ to check on contribution standards, possibly even checking yarn install for warnings
- [ ] Add visual testing automation tool (i.e., Loki)
- [ ] Enforce adding to CHANGELOG when merging a PR into develop
- [ ] Make sure new components are added as package exports
