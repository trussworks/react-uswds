# @trussworks/react-uswds

[![npm version](https://img.shields.io/npm/v/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)
[![CircleCI](https://img.shields.io/circleci/build/github/trussworks/react-uswds/develop)](https://circleci.com/gh/trussworks/react-uswds)
[![npm downloads](https://img.shields.io/npm/dm/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)

React USWDS 2.0 component library

This is a front end component library whose aim is to develop [React](https://reactjs.org/) implementations of the design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). The primary goal of this library is to document and provide common UI components that can be included in other projects that adhere to or are based off of the USWDS, removing a significant amount of overhead UI development from such projects.

A deployed instance of the ReactUSWDS Storybook is located at: https://trussworks.github.io/react-uswds/

## Table of Contents

1. [Background](#background)
1. [Install](#install)
1. [Usage](#usage)
1. [Maintainers](#maintainers)
1. [Contributing](#contributing)
1. [License](#license)
1. [Roadmap](#roadmap)

## Background

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. In order for these components to be actually useful, they should follow best practices and baseline standards for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization in implementation (such as via React `props`). Therefore we should adhere to these development guidelines as much as possible:

- Encourage a strict separation of concerns, focusing on UI (rendered HTML and CSS) rather than any application logic.
- Expose the necessary props for composability and extensibility, such as event handlers, custom CSS classes, etc.
- Maintain a high standard of unit test coverage and cross-browser/device support, so that projects including this depedency can focus on integration and implementation.
- Provide thorough documentation (using a web interface such as Storybook) so that users can view the components as they render in the UI, the source code required to use them, and specifications such as how props are used, a11y support, and test coverage.
- Consistent and transparent versioning so that multiple projects can rely on this package, and it can be maintained as React and USWDS release new versions while also providing backwards compatibility.

#### Non-Goals

This is not meant to be a one-size-fits-all front end solution to every Truss web project. We are starting off with the very opinionated decision to cater towards a project that wants to use (or at least branch off of) USWDS 2.0, and is using React as a front end framework.

In addition to working towards the above outcomes, we are hoping to gain learnings around how to best abstract out UI code from implementation; help demonstrate and standardize front end code practices for other Truss projects; and develop and distribute a shared JS library to other teams.

## Install

Install this package with npm or yarn:

```
yarn add @trussworks/react-uswds
```

or

```
npm i @trussworks/react-uswds
```

## Usage

You can import modules using ES6 syntax:

```
import { Alert } from '@trussworks/react-uswds'
```

Also make sure to include the following in order to import the compiled CSS from this project:

```
@import '~@trussworks/react-uswds/lib/index.css';
```

**[More info about using USWDS CSS & SCSS](./docs/scss.md)**

### Icons

[USWDS recommends using Font Awesome](https://designsystem.digital.gov/components/icons/), and that project [provides a package for use with React](https://github.com/FortAwesome/react-fontawesome).

To add this to your project, install react-font-awesome and at least one style of icon:

```
yarn add @fortawesome/fontawesome-svg-core \
         @fortawesome/free-solid-svg-icons \
         @fortawesome/react-fontawesome
```

You can then add Font Awesome icons to your projects using the `FontAwesome` component:


```jsx
import ReactDOM from 'react-dom'
import { Button } from '@trussworks/react-uswds'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const button = <Button type="button">
  <FontAwesomeIcon icon={faSave} /> Save Changes
</Button>;

ReactDOM.render(button, document.body);
```

For more information on working with and configuring react-fontawesome, please see [that project's documentation](https://github.com/FortAwesome/react-fontawesome#installation). To find specific icons for your project, [search on the Font Awesome site](https://fontawesome.com/icons).

## Maintainers

- [@suzubara](https://github.com/suzubara)
- [@haworku](https://github.com/haworku)

## Contributing

Interested in contributing? See our [guidelines and dev setup here](./docs/contributing.md).

Are you a Trussel and new to this project? Check out our [on & offboarding guide](./docs/for_trussels.md) made just for you!

## License

[Copyright 2019, TrussWorks, Inc.](../LICENSE)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
