# @trussworks/react-uswds

[![npm version](https://img.shields.io/npm/v/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)
[![CircleCI](https://img.shields.io/circleci/build/github/trussworks/react-uswds/develop)](https://circleci.com/gh/trussworks/react-uswds)
[![npm downloads](https://img.shields.io/npm/dm/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)

**ReactUSWDS Component Library**

This is a frontend component library, built in [React](https://reactjs.org/) with [Typescript](https://www.typescriptlang.org/), based on design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). Our primary goal is to document and provide common UI components following the USWDS specification. This library removes a significant amount of overhead UI development for projects based on this standard.

A deployed instance of the ReactUSWDS Storybook is located at: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

An example application, built with React-USWDS, can be found in the `/example` folder and run with the appropriate [`yarn:example` commands](./docs/contributing.md#available-commands).

## Table of Contents

- [@trussworks/react-uswds](#trussworksreact-uswds)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
    - [Non-Goals](#non-goals)
  - [Install](#install)
  - [Usage](#usage)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [License](#license)

## Background

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. In order for these components to be useful, they should follow best practices for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization. We adhere to a set of [development guidelines](./docs/contributing.md#guidelines) as much as possible and use automation to enforce tests, linting, and other standards.

### Non-Goals

This is not meant to be a one-size-fits-all front end solution, We are starting off with the opinionated decision to cater towards projects that use the U.S. Design System 2.0, and encapsulate these specific styles and markup in React components.

In the process, we expect to gain learnings around how to best abstract out UI code from implementation; how to better standardize and document front end code practices; and how to develop, maintain, and distribute a shared JS library in alignment with our [company values at Truss](https://truss.works/values).

## Install

Install this package with npm or yarn:

```
yarn add @trussworks/react-uswds
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

Note: If you aren't already using USWDS as a dependency, you will also need to import uswds styles. **[Read more info about using USWDS styles and assets here](./docs/styles_and_assets.md)**

Having issues? See [FAQs](./docs/faqs.md).

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
