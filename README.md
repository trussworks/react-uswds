# @truss/react-uswds

## Purpose

This is a front end component library whose aim is to develop [React](https://reactjs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

The initial (1.0.0) release of this library is currently in active development, but will ultimately follow [semantic versioning](https://semver.org/) conventions.

## Goals

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. For now we can publish directly from this git repo, but we may want to look into publishing on the [official npm registry](https://www.npmjs.com/) or the upcoming [Github package registry](https://github.com/features/package-registry) in the future.

In order for these components to be actually useful, they should follow best practices and baseline standards for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization in implementation (such as via React `props`). Therefore we should adhere to these development guidelines as much as possible:
- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this depedency can focus on integration and implementation.
- Provide thorough documentation (using a web interface such as Storybook) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

Once the above goals are substantively met, this project has a high potential to be open sourced, and provide value for people outside of Truss who want to use USWDS with React.

## Non-Goals
This is not meant to be a one-size-fits-all front end solution to every Truss web project. We are starting off with the very opinionated decision to cater towards a project that wants to use (or at least branch off of) USWDS 2.0, and is using React as a front end framework.

In addition to working towards the above outcomes, we are hoping to gain learnings around how to best abstract out UI code from implementation; help demonstrate and standardize front end code practices for other Truss projects; and develop and distribute a shared JS library to other teams.
