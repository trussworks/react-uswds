# @trussworks/react-uswds
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://img.shields.io/npm/v/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)
[![CircleCI](https://img.shields.io/circleci/build/github/trussworks/react-uswds/develop)](https://circleci.com/gh/trussworks/react-uswds)
[![npm downloads](https://img.shields.io/npm/dm/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)

**ReactUSWDS Component Library**

This is a frontend component library, built in [React](https://reactjs.org/) with [Typescript](https://www.typescriptlang.org/), based on design patterns defined by the [United States Web Design System (USWDS) 2.0](https://designsystem.digital.gov/). Our primary goal is to document and provide common UI components following the USWDS specification. This library removes a significant amount of overhead UI development for projects based on this standard.

A deployed instance of the ReactUSWDS Storybook is located at: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

An example application, built with React-USWDS, can be found in the `/example` folder and run with the appropriate [`yarn:example` commands](./docs/contributing.md#available-commands).

**Table of Contents**

- [@trussworks/react-uswds](#trussworksreact-uswds)
  - [Background](#background)
    - [Non-Goals](#non-goals)
  - [Install](#install)
    - [Pre-Release](#pre-release)
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

or

```
npm i @trussworks/react-uswds
```

### Pre-Release

Pre-release packages are published to GitHub Packages. To use, you
will need a [GitHub access
token](https://docs.github.com/en/packages/publishing-and-managing-packages/about-github-packages#about-tokens)
with the `read:packages` scope.

1. Create an `.npmrc` with

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_GOES_HERE
@trussworks:registry=https://npm.pkg.github.com
```

or

Create a `.yarnrc` file with

```
"@trussworks:registry" "https://npm.pkg.github.com"
```

2. In your `package.json`, use `"@trussworks/react-uswds": "next"`

See [GitHub Packages with npm
docs](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
for more detailed information.

## Usage

You can import ReactUSWDS components using ES6 syntax:

```
import { Alert } from '@trussworks/react-uswds'
```

> **Warning:** Do _not_ include the full USWDS JS in your project alongside this library, as that will result in some components that use JS (such as the ComboBox) to initialize twice.

Also make sure to include the following in order to import the compiled CSS from this project:

```
@import '~@trussworks/react-uswds/lib/index.css';
```

If you aren't already using USWDS as a dependency, you also need to import USWDS styles. **[Read more info about using USWDS styles and assets here](./docs/styles_and_assets.md)**

Having issues? See [FAQs](./docs/faqs.md).

## Maintainers

- [@suzubara](https://github.com/suzubara)
- [@haworku](https://github.com/haworku)
- [@brandonlenz](https://github.com/brandonlenz)
- [@sirenaborracha](https://github.com/sirenaborracha)

## Contributing

Interested in contributing? See our [guidelines and dev setup here](./docs/contributing.md).

Are you a Trussel and new to this project? Check out our [on & offboarding guide](./docs/for_trussels.md) made just for you!

This repository is governed by the [Contributor Covenant](./CODE_OF_CONDUCT.md)

## License

[Copyright 2021, TrussWorks, Inc.](./LICENSE)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/suzubara"><img src="https://avatars.githubusercontent.com/u/2723066?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Suzanne Rozier</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=suzubara" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/haworku"><img src="https://avatars.githubusercontent.com/u/10750442?v=4?s=100" width="100px;" alt=""/><br /><sub><b>haworku</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=haworku" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ahobson"><img src="https://avatars.githubusercontent.com/u/21983?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Hobson</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=ahobson" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gidjin"><img src="https://avatars.githubusercontent.com/u/940173?v=4?s=100" width="100px;" alt=""/><br /><sub><b>John Gedeon</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=gidjin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/eamahanna"><img src="https://avatars.githubusercontent.com/u/56279459?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emily Mahanna</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=eamahanna" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/brandonlenz"><img src="https://avatars.githubusercontent.com/u/15805554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Lenz</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=brandonlenz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sojeri"><img src="https://avatars.githubusercontent.com/u/10818509?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeri Sommers</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=sojeri" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!