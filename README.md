# @trussworks/react-uswds

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-35-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://img.shields.io/npm/v/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)
[![uswds version](https://img.shields.io/github/package-json/dependency-version/trussworks/react-uswds/dev/@uswds/uswds)](https://www.npmjs.com/package/@uswds/uswds)

[![npm downloads](https://img.shields.io/npm/dm/@trussworks/react-uswds)](https://www.npmjs.com/package/@trussworks/react-uswds)

**ReactUSWDS Component Library**

This is a frontend component library, built in [React](https://reactjs.org/) with [Typescript](https://www.typescriptlang.org/), based on design patterns defined by the [United States Web Design System (USWDS) 3.0](https://designsystem.digital.gov/). Our primary goal is to document and provide common UI components following the USWDS specification. This library removes a significant amount of overhead UI development for projects based on this standard.

A deployed instance of the ReactUSWDS Storybook is located at: [https://trussworks.github.io/react-uswds/](https://trussworks.github.io/react-uswds/)

**Table of Contents**

- [@trussworks/react-uswds](#trussworksreact-uswds)
  - [Install](#install)
  - [Peer Dependencies](#peer-dependencies)
  - [Usage](#usage)
    - [USWDS](#uswds)
    - [NodeJS](#nodejs)
    - [Pre-Release](#pre-release)
    - [Implementation examples](#implementation-examples)
  - [Background](#background)
    - [Non-Goals](#non-goals)
  - [Active Maintainers](#active-maintainers)
  - [Contributing](#contributing)
    - [Quick links:](#quick-links)
  - [License](#license)
  - [Contributors ✨](#contributors-)

## Install

Install this package with npm or yarn:

```
yarn add @trussworks/react-uswds
```

or

```
npm i @trussworks/react-uswds
```

## Peer Dependencies

This library relies on some [peer dependencies](./package.json). Please verify these peer dependencies were added to your project (if they did not already exist) after adding this library.

## Usage

### USWDS

It is strongly suggested applications use the same version of USWDS that was used to build the version of ReactUSWDS they're using (see this repo's uswds `devDependency` in [package.json](./package.json)).
A version mismatch may result in unexpected markup & CSS combinations.
For flexibility, ReactUSWDS will not trigger warnings if consumers choose to use a higher minor version of `uswds` (hence the careted uswds `peerDependency` in [package.json](./package.json)).
If encountering unexpected markup issues when choosing _not_ to use the matching `devDependency` version of `uswds`, consumers should check whether aligning the versions resolves their issue(s).

You can import ReactUSWDS components using ES6 syntax:

```
import { Alert } from '@trussworks/react-uswds'
```

> **Warning:** Do _not_ include USWDS JS in your project alongside this library (i.e., using `import 'uswds'`), as that will result in some components that use JS (such as the ComboBox) to initialize twice.

Also make sure to include the following in order to import the compiled CSS from this project:

```
@import '~@trussworks/react-uswds/lib/index.css';
```

If you aren't already using USWDS as a dependency, you also need to import USWDS styles. **[Read more info about using USWDS styles and assets here](./docs/styles_and_assets.md)**

Having issues? See [FAQs](./docs/faqs.md).

### NodeJS

We develop on this library with the version of node defined in `.node-version`. We run the test suite against the major released versions of node that are still in active LTS and not development releases. Specific versions are defined in the workflow: `.github/workflows/build-and-test.yml`. Those are the versions we exxpect to support, if you are using a pre-release or development version of node you may run into unexpected issues.

Having issues? See [FAQs](./docs/faqs.md).

### Pre-Release

See [prelease.md](docs/prerelease.md)

### Implementation examples

[We decided](https://github.com/trussworks/react-uswds/issues/2001) to focus on our [storybook](https://trussworks.github.io/react-uswds/) over hosting an example/boilerplate implementation, but you can find a few such things from our friends:

* [NASA's Americana Remix stack](https://github.com/nasa-gcn/americana-stack?tab=readme-ov-file)
* [USDS's Gatsby starter template](https://github.com/usds/gatsby-uswds-ts-starter)
* [Nava's Next.js starter template](https://github.com/navapbc/template-application-nextjs)

You can also check out some open source projects using React-USWDS across federal and state governments:

* DOL
  * [Unemployment Insurance Claimant Experience Pilot](https://github.com/USDepartmentofLabor/ui-claimant-experience-pilot)
  * [New Jersey's Unemployment Insurance Claimant Intake Pilot](https://github.com/USDepartmentofLabor/UI-Claimant-Experience-NJ-Pilot)
* USA.gov
  * [Vote.gov](https://vote.gov/)
  * [Search.gov](https://search.gov/)
* CDC
  * [ReportStream](https://github.com/CDCgov/prime-reportstream)
  * [EpiSync](https://github.com/CDCgov/EpiSync)
  * [National Electronic Disease Surveillance System Base System](https://github.com/CDCgov/NEDSS-Modernization)
* Centers for Medicare & Medicaid Services (CMS):
  * [EASi Application](https://github.com/CMSgov/easi-app)
  * [Model Innovation Tool (MINT)](https://github.com/CMSgov/mint-app)
* Others
  * [DoD and TRANSCOM's MilMove](https://github.com/transcom/mymove)
  * [OMB's Environment Justice Scorecard](https://github.com/usds/ej-scorecard)
  * [U.S. Office of Head Start's Training & Technical Assistance Smart Hub](https://github.com/HHS/Head-Start-TTADP)
  * [CISA's XFD application](https://github.com/cisagov/XFD)
  * ...and more on our [dependents page](https://github.com/trussworks/react-uswds/network/dependents)

## Background

The primary deliverable is a published npm package that can be included as a dependency in other projects that use USWDS with React. In order for these components to be useful, they should follow best practices for accessible, semantic, markup; be well-tested across browsers and devices; and allow for an appropriate level of customization. We adhere to a set of [development guidelines](./docs/contributing.md#guidelines) as much as possible and use automation to enforce tests, linting, and other standards.

### Non-Goals

This is not meant to be a one-size-fits-all front end solution, We are starting off with the opinionated decision to cater towards projects that use the U.S. Design System 2.0, and encapsulate these specific styles and markup in React components.

In the process, we expect to gain learnings around how to best abstract out UI code from implementation; how to better standardize and document front end code practices; and how to develop, maintain, and distribute a shared JS library in alignment with our [company values at Truss](https://truss.works/values).

## Active Maintainers

- [Courtney Eimerman-Wallace](https://github.com/crwallace)

We are starting to rotate Trussel maintainer responsibilities. Check out the [maintainers README](./docs/for_maintainers.md).

## Contributing

Interested in contributing? See our [guidelines and dev setup here](./docs/contributing.md).

Are you a Trussel and new to this project? Check out our [on & offboarding guide](./docs/for_trussels.md) made just for you!

This repository is governed by the [Contributor Covenant](./CODE_OF_CONDUCT.md)

### Quick links:

- [Yarn scripts](./docs/contributing.md#available-commands)
- [PR commit guidelines](./docs/contributing.md#opening--merging-pull-requests)
- [Adding new components](./docs/adding_new_components.md)
- [Testing in an application](./docs/contributing.md#testing-in-an-application)
- [Releasing](./docs/releasing.md)

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
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/suzubara"><img src="https://avatars.githubusercontent.com/u/2723066?v=4?s=100" width="100px;" alt="Suzanne Rozier"/><br /><sub><b>Suzanne Rozier</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=suzubara" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/commits?author=suzubara" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/haworku"><img src="https://avatars.githubusercontent.com/u/10750442?v=4?s=100" width="100px;" alt="haworku"/><br /><sub><b>haworku</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=haworku" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/commits?author=haworku" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ahobson"><img src="https://avatars.githubusercontent.com/u/21983?v=4?s=100" width="100px;" alt="Andrew Hobson"/><br /><sub><b>Andrew Hobson</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=ahobson" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gidjin"><img src="https://avatars.githubusercontent.com/u/940173?v=4?s=100" width="100px;" alt="John Gedeon"/><br /><sub><b>John Gedeon</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=gidjin" title="Code">💻</a> <a href="#maintenance-gidjin" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/eamahanna"><img src="https://avatars.githubusercontent.com/u/56279459?v=4?s=100" width="100px;" alt="Emily Mahanna"/><br /><sub><b>Emily Mahanna</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=eamahanna" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/brandonlenz"><img src="https://avatars.githubusercontent.com/u/15805554?v=4?s=100" width="100px;" alt="Brandon Lenz"/><br /><sub><b>Brandon Lenz</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=brandonlenz" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/commits?author=brandonlenz" title="Documentation">📖</a> <a href="#maintenance-brandonlenz" title="Maintenance">🚧</a> <a href="https://github.com/trussworks/react-uswds/issues?q=author%3Abrandonlenz" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sojeri"><img src="https://avatars.githubusercontent.com/u/10818509?v=4?s=100" width="100px;" alt="Jeri Sommers"/><br /><sub><b>Jeri Sommers</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=sojeri" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tinyels"><img src="https://avatars.githubusercontent.com/u/3142631?v=4?s=100" width="100px;" alt="Erin Stanfill"/><br /><sub><b>Erin Stanfill</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=tinyels" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.barrymorrison.com/"><img src="https://avatars.githubusercontent.com/u/689591?v=4?s=100" width="100px;" alt="Barry Morrison"/><br /><sub><b>Barry Morrison</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=esacteksab" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/duncan-truss"><img src="https://avatars.githubusercontent.com/u/52669884?v=4?s=100" width="100px;" alt="Duncan"/><br /><sub><b>Duncan</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=duncan-truss" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SirenaBorracha"><img src="https://avatars.githubusercontent.com/u/16230705?v=4?s=100" width="100px;" alt="Arianna Kellogg"/><br /><sub><b>Arianna Kellogg</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=SirenaBorracha" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/christopherhuii"><img src="https://avatars.githubusercontent.com/u/8367504?v=4?s=100" width="100px;" alt="Christopher Hui"/><br /><sub><b>Christopher Hui</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=christopherhuii" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://pandasguide.com/"><img src="https://avatars.githubusercontent.com/u/3331?v=4?s=100" width="100px;" alt="Jim Benton"/><br /><sub><b>Jim Benton</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=jim" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jenbutongit"><img src="https://avatars.githubusercontent.com/u/22080510?v=4?s=100" width="100px;" alt="Jen Duong"/><br /><sub><b>Jen Duong</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=jenbutongit" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kimallen"><img src="https://avatars.githubusercontent.com/u/13249580?v=4?s=100" width="100px;" alt="Kim Allen"/><br /><sub><b>Kim Allen</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=kimallen" title="Code">💻</a> <a href="#a11y-kimallen" title="Accessibility">️️️️♿️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kylehilltruss"><img src="https://avatars.githubusercontent.com/u/83614364?v=4?s=100" width="100px;" alt="Kyle Hill"/><br /><sub><b>Kyle Hill</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=kylehilltruss" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rswerve"><img src="https://avatars.githubusercontent.com/u/8964335?v=4?s=100" width="100px;" alt="Mazdak Atighi"/><br /><sub><b>Mazdak Atighi</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=rswerve" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Igarfinkle"><img src="https://avatars.githubusercontent.com/u/7664177?v=4?s=100" width="100px;" alt="Isaac Garfinkle"/><br /><sub><b>Isaac Garfinkle</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=Igarfinkle" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rogeruiz"><img src="https://avatars.githubusercontent.com/u/706004?v=4?s=100" width="100px;" alt="Roger Steve Ruiz"/><br /><sub><b>Roger Steve Ruiz</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=rogeruiz" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/commits?author=rogeruiz" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lpsinger"><img src="https://avatars.githubusercontent.com/u/728407?v=4?s=100" width="100px;" alt="Leo Singer"/><br /><sub><b>Leo Singer</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/issues?q=author%3Alpsinger" title="Bug reports">🐛</a> <a href="https://github.com/trussworks/react-uswds/commits?author=lpsinger" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Shkeating"><img src="https://avatars.githubusercontent.com/u/59394696?v=4?s=100" width="100px;" alt="Shauna Keating"/><br /><sub><b>Shauna Keating</b></sub></a><br /><a href="#a11y-Shkeating" title="Accessibility">️️️️♿️</a> <a href="https://github.com/trussworks/react-uswds/commits?author=Shkeating" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jcbcapps"><img src="https://avatars.githubusercontent.com/u/99674188?v=4?s=100" width="100px;" alt="Jacob Capps"/><br /><sub><b>Jacob Capps</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=jcbcapps" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pearl-truss"><img src="https://avatars.githubusercontent.com/u/67110378?v=4?s=100" width="100px;" alt="pearl-truss"/><br /><sub><b>pearl-truss</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=pearl-truss" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://andyhub.com/"><img src="https://avatars.githubusercontent.com/u/764090?v=4?s=100" width="100px;" alt="Andrew Nelson"/><br /><sub><b>Andrew Nelson</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=werdnanoslen" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/commits?author=werdnanoslen" title="Documentation">📖</a> <a href="#maintenance-werdnanoslen" title="Maintenance">🚧</a> <a href="https://github.com/trussworks/react-uswds/issues?q=author%3Awerdnanoslen" title="Bug reports">🐛</a> <a href="#a11y-werdnanoslen" title="Accessibility">️️️️♿️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sawyer.soy"><img src="https://avatars.githubusercontent.com/u/371943?v=4?s=100" width="100px;" alt="Sawyer Hollenshead"/><br /><sub><b>Sawyer Hollenshead</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=sawyerh" title="Code">💻</a> <a href="https://github.com/trussworks/react-uswds/issues?q=author%3Asawyerh" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://keybase.io/rpdelaney"><img src="https://avatars.githubusercontent.com/u/1139517?v=4?s=100" width="100px;" alt="Ryan Delaney"/><br /><sub><b>Ryan Delaney</b></sub></a><br /><a href="#maintenance-rpdelaney" title="Maintenance">🚧</a> <a href="#infra-rpdelaney" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AnnaGingle"><img src="https://avatars.githubusercontent.com/u/48488699?v=4?s=100" width="100px;" alt="Anna Gingle"/><br /><sub><b>Anna Gingle</b></sub></a><br /><a href="#design-AnnaGingle" title="Design">🎨</a> <a href="https://github.com/trussworks/react-uswds/commits?author=AnnaGingle" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aybeedee"><img src="https://avatars.githubusercontent.com/u/75930195?v=4?s=100" width="100px;" alt="Abdullah Umer"/><br /><sub><b>Abdullah Umer</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=aybeedee" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/m7adeel"><img src="https://avatars.githubusercontent.com/u/87698014?v=4?s=100" width="100px;" alt="Muhammad Adeel"/><br /><sub><b>Muhammad Adeel</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/issues?q=author%3Am7adeel" title="Bug reports">🐛</a> <a href="https://github.com/trussworks/react-uswds/commits?author=m7adeel" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vinodkv2511"><img src="https://avatars.githubusercontent.com/u/44632502?v=4?s=100" width="100px;" alt="Vinod Krishna Vellampalli"/><br /><sub><b>Vinod Krishna Vellampalli</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=vinodkv2511" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://joeforyou.xyz"><img src="https://avatars.githubusercontent.com/u/57681819?v=4?s=100" width="100px;" alt="Joe Kleinschmidt"/><br /><sub><b>Joe Kleinschmidt</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=kleinschmidtj" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jhancock532.github.io/"><img src="https://avatars.githubusercontent.com/u/18164832?v=4?s=100" width="100px;" alt="James Hancock"/><br /><sub><b>James Hancock</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/issues?q=author%3Ajhancock532" title="Bug reports">🐛</a> <a href="https://github.com/trussworks/react-uswds/commits?author=jhancock532" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jpandersen87"><img src="https://avatars.githubusercontent.com/u/12385932?v=4?s=100" width="100px;" alt="Joseph Andersen"/><br /><sub><b>Joseph Andersen</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/commits?author=jpandersen87" title="Code">💻</a> <a href="#maintenance-jpandersen87" title="Maintenance">🚧</a> <a href="#infra-jpandersen87" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/crwallace"><img src="https://avatars.githubusercontent.com/u/3453669?v=4?s=100" width="100px;" alt="Courtney Eimerman-Wallace"/><br /><sub><b>Courtney Eimerman-Wallace</b></sub></a><br /><a href="#maintenance-crwallace" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ocoutts-usds"><img src="https://avatars.githubusercontent.com/u/174364898?v=4?s=100" width="100px;" alt="Owen Coutts"/><br /><sub><b>Owen Coutts</b></sub></a><br /><a href="https://github.com/trussworks/react-uswds/issues?q=author%3Aocoutts-usds" title="Bug reports">🐛</a> <a href="https://github.com/trussworks/react-uswds/commits?author=ocoutts-usds" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
