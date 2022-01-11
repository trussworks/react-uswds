# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.6.0](https://github.com/trussworks/react-uswds/compare/2.5.0...2.6.0) (2022-01-07)


### Features

* accept prop for heading level ([#1751](https://github.com/trussworks/react-uswds/issues/1751)) ([#1865](https://github.com/trussworks/react-uswds/issues/1865)) ([464756f](https://github.com/trussworks/react-uswds/commit/464756fb1e189509bde02848cc09f992357d7e1c))

## [2.5.0](https://github.com/trussworks/react-uswds/compare/2.4.1...2.5.0) (2022-01-03)


### Features

* Allow intrinsic elements to be passed to Fieldset ([#1862](https://github.com/trussworks/react-uswds/issues/1862)) ([85a0092](https://github.com/trussworks/react-uswds/commit/85a0092bad776357ede2cd4e9aee9a5aa11912fd))

### [2.4.1](https://github.com/trussworks/react-uswds/compare/2.4.0...2.4.1) (2021-10-29)

- Fix build artifact containing unused type definitions ([#1726](https://github.com/trussworks/react-uswds/issues/1726))

## [2.4.0](https://github.com/trussworks/react-uswds/compare/2.3.0...2.4.0) (2021-10-27)

### Features

- Add InputPrefix and InputSuffix components ([#1713](https://github.com/trussworks/react-uswds/issues/1713)) ([95ac139](https://github.com/trussworks/react-uswds/commit/95ac13922c522a67c5b85ecf984c4da3b1800498))

### Bug Fixes

- Control ComboBox scroll with scrollTop instead of scrollIntoView ([#1715](https://github.com/trussworks/react-uswds/pull/1715)) ([600d53b](https://github.com/trussworks/react-uswds/commit/600d53b108a8c296d8a4fd25b4eaa91bae951484))
- Add ComboBox status text and aria-activedescendant values ([#1716](https://github.com/trussworks/react-uswds/issues/1716)) ([29919bf](https://github.com/trussworks/react-uswds/commit/29919bff045e29d2b2f70d8af5d8bdcd17fa9e9c))

## [2.3.0](https://github.com/trussworks/react-uswds/compare/2.2.0...2.3.0) (2021-10-19)

### Features

- Add input onChange handler to ComboBox ([#1689](https://github.com/trussworks/react-uswds/issues/1689)) ([47be106](https://github.com/trussworks/react-uswds/commit/47be1062e4a54472235f8652978a0c69057ff236))

### Documentation & Examples

- Update ADR-0001 name to match it's title/outcome ([#1652](https://github.com/trussworks/react-uswds/issues/1652)) ([d3bd12c](https://github.com/trussworks/react-uswds/commit/d3bd12c54186bb1cfc333bc3b99c6ca7370be720))

## [2.2.0](https://github.com/trussworks/react-uswds/compare/2.1.0...2.2.0) (2021-10-08)

### Features

- Modal component ([#1622](https://github.com/trussworks/react-uswds/issues/1622)) ([2b76a7a](https://github.com/trussworks/react-uswds/commit/2b76a7a250f5885329d44a09711d856bd133f39c))

## [2.1.0](https://github.com/trussworks/react-uswds/compare/2.0.0...2.1.0) (2021-09-29)

### Features

- Add aria attributes to RangeInput ([#1560](https://github.com/trussworks/react-uswds/issues/1560)) ([0034835](https://github.com/trussworks/react-uswds/commit/00348350ced514bf33c9a1795270838e2df33a24))
- Icon component using SVGR ([#1609](https://github.com/trussworks/react-uswds/issues/1609)) ([317c859](https://github.com/trussworks/react-uswds/commit/317c859ebae503194eb9005244957392caf302dd))

## [2.0.0](https://github.com/trussworks/react-uswds/compare/1.17.0...2.0.0) (2021-06-15)

### ⚠ BREAKING CHANGES

- Expose FileInput component ref with a clearFiles method (#1165)
- Expose ComboBox component ref with a clearSelection method (#1236)
- **deps-dev:** Update Typescript to 4.0+ (#1214)
- Modal component has been removed. The USWDS Modal will be added when reaching parity with USWDS 2.11.x
- Accordion component default behavior was updated to match USWDS. To continue to use the multiselectable behavior, use the multiselectable prop.

### Features

- Collection Component ([#1133](https://github.com/trussworks/react-uswds/issues/1133)) ([cdc200f](https://github.com/trussworks/react-uswds/commit/cdc200f5e084c5d63723ce4cf5dbb40252d6b2f5))
- Deprecate the Modal component ([#956](https://github.com/trussworks/react-uswds/issues/956)) ([7ae4e30](https://github.com/trussworks/react-uswds/commit/7ae4e30cf240af917fc66128e6dc8a047271c6de))
- Expose ComboBox component ref with a clearSelection method ([#1236](https://github.com/trussworks/react-uswds/issues/1236)) ([e90e4df](https://github.com/trussworks/react-uswds/commit/e90e4df9bdb55a217174e551dabb9e6535c384b8))
- Expose FileInput component ref with a clearFiles method ([#1165](https://github.com/trussworks/react-uswds/issues/1165)) ([0bc0b54](https://github.com/trussworks/react-uswds/commit/0bc0b54a2d38e789554d9ba4af57b9f854f002fc))
- Update Accordion component default behavior to match USWDS ([#922](https://github.com/trussworks/react-uswds/issues/922)) ([c063047](https://github.com/trussworks/react-uswds/commit/c063047a86551539bba3664d2ceb591e1d50971f))

### Bug Fixes

- Fix TimePicker filter behavior. Misc ComboBox Fixes ([#1139](https://github.com/trussworks/react-uswds/issues/1139)) ([c684844](https://github.com/trussworks/react-uswds/commit/c68484418a3e53d3b4ed98c5eb66e3522f81a475))
- Update storybook form control organization and SWDS URLs ([#1136](https://github.com/trussworks/react-uswds/issues/1136)) ([bfd7344](https://github.com/trussworks/react-uswds/commit/bfd73443732e78fd06841bf5d36a2e83fdb08bd2))
- Use embedded images for storybook ([#1265](https://github.com/trussworks/react-uswds/issues/1265)) ([#1266](https://github.com/trussworks/react-uswds/issues/1266)) ([61abd79](https://github.com/trussworks/react-uswds/commit/61abd7933a3ed9fa7fedeba6857e1417c0c51770))

- **deps-dev:** Update Typescript to 4.0+ ([#1214](https://github.com/trussworks/react-uswds/issues/1214)) ([f632744](https://github.com/trussworks/react-uswds/commit/f632744b566a4da8e7f27499af51ee18e55516b8))

## [1.17.0](https://github.com/trussworks/react-uswds/compare/1.16.0...1.17.0) (2021-05-05)

### Features

- Checkbox Tile Variant ([#1104](https://github.com/trussworks/react-uswds/issues/1104)) ([9936c4a](https://github.com/trussworks/react-uswds/commit/9936c4ad6d53cd49f52fb6b7a0f52b752eb15317))
- Implement ProcessListHeading subcomponent ([#1162](https://github.com/trussworks/react-uswds/issues/1162)) ([964e34c](https://github.com/trussworks/react-uswds/commit/964e34cb831554f5951973a62a5d4959357daff3))
- New Component ProcessList MVP ([#1107](https://github.com/trussworks/react-uswds/issues/1107)) ([1bc0f93](https://github.com/trussworks/react-uswds/commit/1bc0f93f916ce46470230b34406fef57c3e44a16))
- New Component SiteAlert ([#1099](https://github.com/trussworks/react-uswds/issues/1099)) ([c1e88e0](https://github.com/trussworks/react-uswds/commit/c1e88e0e5fcdcd8c1612943d6808c8ec5ff2efd5))
- New Component SummaryBox ([#1098](https://github.com/trussworks/react-uswds/issues/1098)) ([b2279b4](https://github.com/trussworks/react-uswds/commit/b2279b4fa178ee3bcf1e4e81fa209e4f04d66ac3))
- Radio Button Tile Variant ([#1101](https://github.com/trussworks/react-uswds/issues/1101)) ([a2f40a0](https://github.com/trussworks/react-uswds/commit/a2f40a0c727a4621909e1da610f5fd16e1bb38c6))
- Update Grid components to render any type of element ([#1166](https://github.com/trussworks/react-uswds/issues/1166)) ([07468c8](https://github.com/trussworks/react-uswds/commit/07468c8a68d0b7706ea2f5978982ff4658bb5ade)), closes [#1194](https://github.com/trussworks/react-uswds/issues/1194)
- Update Search component to support i18n ([#1192](https://github.com/trussworks/react-uswds/issues/1192)) ([5241d15](https://github.com/trussworks/react-uswds/commit/5241d156592407178f609280802cefcb6a3ed0c7))
- Update Table to 2.10.0 implementation ([#1110](https://github.com/trussworks/react-uswds/issues/1110)) ([117a6c7](https://github.com/trussworks/react-uswds/commit/117a6c7060e1a4b8a2246b0e1b2bef1ac1a73e07))

## [1.16.0](https://github.com/trussworks/react-uswds/compare/1.15.0...1.16.0) (2021-04-22)

### Features

- Add i18n support to DatePicker component ([#990](https://github.com/trussworks/react-uswds/issues/990)) ([2000b9c](https://github.com/trussworks/react-uswds/commit/2000b9cd1e98ab85841d448a58b41105a17a7bb4))
- Update to USWDS 2.10.3 ([#1106](https://github.com/trussworks/react-uswds/issues/1106)) ([c9f71d7](https://github.com/trussworks/react-uswds/commit/c9f71d7d7989fb9c7ab2e264d1af26436dcb66c3))
- Implement Identifier subcomponents ([#1100](https://github.com/trussworks/react-uswds/issues/1100)) ([703a60d](https://github.com/trussworks/react-uswds/commit/703a60dadc326c822748bbf50aec735e35421c60))

### Documentation & Examples

- **adr:** Increase ReactUSWDS version when updating USWDS version ([#1045](https://github.com/trussworks/react-uswds/issues/1045)) ([59f6720](https://github.com/trussworks/react-uswds/commit/59f6720ad023d102d71e00ad9447edc47c1d0a55))

## [1.15.0](https://github.com/trussworks/react-uswds/compare/1.14.0...1.15.0) (2021-04-12)

### Features

- Identifier component ([#1044](https://github.com/trussworks/react-uswds/issues/1044)) ([e79bc87](https://github.com/trussworks/react-uswds/commit/e79bc8773a3ff7d9096b8b65a9f6cb58f7d3a28a))
- StepIndicator component ([#1047](https://github.com/trussworks/react-uswds/issues/1047)) ([d61988e](https://github.com/trussworks/react-uswds/commit/d61988eb90646d35e57b17c00bd392e4ce3c200e))
- TimePicker component ([#1082](https://github.com/trussworks/react-uswds/issues/1082)) ([c7bfdee](https://github.com/trussworks/react-uswds/commit/c7bfdee95bda8c357f8b56e600e0c03be9ff922f))
- Update to USWDS 2.9.0 ([#1048](https://github.com/trussworks/react-uswds/issues/1048)) ([3859eea](https://github.com/trussworks/react-uswds/commit/3859eeaca8505403bd3bb149b12b13fb950fc082))

### Documentation & Examples

- Add guidance for PR titles and testing in an application ([#1028](https://github.com/trussworks/react-uswds/issues/1028)) ([be3bed4](https://github.com/trussworks/react-uswds/commit/be3bed41eb973ba9bdc69c69d168ef7a13d17ccf))

## [1.14.0](https://github.com/trussworks/react-uswds/compare/1.13.2...1.14.0) (2021-03-22)

### Features

- DateRangePicker Component ([#983](https://github.com/trussworks/react-uswds/issues/983)) ([69d34ed](https://github.com/trussworks/react-uswds/commit/69d34ed8f78ae22e29c270d877c081fe5335325c))
- Tooltip component ([#871](https://github.com/trussworks/react-uswds/issues/871)) ([92ea5f0](https://github.com/trussworks/react-uswds/commit/92ea5f07f7212370165423ec09ed35eec3aa7e58))

### Documentation & Examples

- Update documentation. Show component description and prop defaults in storybook ([#1008](https://github.com/trussworks/react-uswds/issues/1008)) ([a8d267f](https://github.com/trussworks/react-uswds/commit/a8d267f6f7db8c9d3dc1c8477fe1ee6b98f9b914))

### [1.13.2](https://github.com/trussworks/react-uswds/compare/1.13.1...1.13.2) (2021-03-11)

### Bug Fixes

- ComboBox "keyboard trap" and misc bugs ([#1010](https://github.com/trussworks/react-uswds/issues/1010)) ([50aef22](https://github.com/trussworks/react-uswds/commit/50aef22b3dcccad7da165e023bb05fe921e0af98))

### [1.13.1](https://github.com/trussworks/react-uswds/compare/1.13.0...1.13.1) (2021-03-08)

### Bug Fixes

- set CombBox focusMode to BLUR when focus is outside of the component ([#989](https://github.com/trussworks/react-uswds/issues/989)) ([fa468a0](https://github.com/trussworks/react-uswds/commit/fa468a00275c9646d43ff55fb50468c033d25ad5))

## [1.13.0](https://github.com/trussworks/react-uswds/compare/1.12.2...1.13.0) (2021-02-26)

### Features

- File Input component ([#900](https://github.com/trussworks/react-uswds/issues/900)) ([e1ccbcd](https://github.com/trussworks/react-uswds/commit/e1ccbcd0b0c0cc3ec80cd8f0fa38afd09b29ecfa))

### Documentation & Examples

- Add All-Contributors section to README ([#954](https://github.com/trussworks/react-uswds/issues/954)) ([fe23df1](https://github.com/trussworks/react-uswds/commit/fe23df1acb2de244ac45ee5f1f797a1229203822))

### [1.12.2](https://github.com/trussworks/react-uswds/compare/1.12.1...1.12.2) (2021-02-22)

### Bug Fixes

- add ActionType.CLEAR_FOCUS to indicate a user has left the field ([#902](https://github.com/trussworks/react-uswds/issues/902)) ([58159d7](https://github.com/trussworks/react-uswds/commit/58159d7430016bb88ab2fba33ab1984e0aebed66))

### [1.12.1](https://github.com/trussworks/react-uswds/compare/1.12.0...1.12.1) (2021-02-22)

### Bug Fixes

- Revert husky to V4 ([#923](https://github.com/trussworks/react-uswds/issues/923)) ([e934ff7](https://github.com/trussworks/react-uswds/commit/e934ff76a58cdbc523eef0a3c496fe2d20c02c73))

## [1.12.0](https://github.com/trussworks/react-uswds/compare/1.11.0...1.12.0) (2021-02-18)

### Features

- DatePicker component ([#803](https://github.com/trussworks/react-uswds/issues/803)) ([ea996c8](https://github.com/trussworks/react-uswds/commit/ea996c81287623110963bcaad3067cfb73d95144))

### Bug Fixes

- prevent dependabot version updates (+ husky 5 fixes) ([#867](https://github.com/trussworks/react-uswds/issues/867)) ([4529d89](https://github.com/trussworks/react-uswds/commit/4529d899a6142dea97795f5a53016943ee16e15d))

## [1.11.0](https://github.com/trussworks/react-uswds/compare/1.10.0...1.11.0) (2021-02-08)

### Features

- Add Modal deprecation warnings (non-breaking deprecation) ([#825](https://github.com/trussworks/react-uswds/issues/825)) ([41d7e8e](https://github.com/trussworks/react-uswds/commit/41d7e8e7f0be0ced8e077e51fe60f21320e79cfb))
- Add nav variant to Link component ([#846](https://github.com/trussworks/react-uswds/issues/846)) ([c92159e](https://github.com/trussworks/react-uswds/commit/c92159e08eb4b3975859942bca0378f12241e28c))
- New Component: Breadcrumb ([#804](https://github.com/trussworks/react-uswds/issues/804)) ([1a804d3](https://github.com/trussworks/react-uswds/commit/1a804d3984b6d5b4fc8cf48426e84b651587730e))
- Update GovBanner to match USWDS 2.8.0 release ([#782](https://github.com/trussworks/react-uswds/issues/782)) ([3d61f78](https://github.com/trussworks/react-uswds/commit/3d61f78eb0414fe77eba2b7c424560c2f4563721))
- Upgrade to React 17 ([#826](https://github.com/trussworks/react-uswds/issues/826)) ([9f75909](https://github.com/trussworks/react-uswds/commit/9f7590917f58f3e33f3c3cef9d78bc0e6dcb812a))

### Documentation & Examples

- Add request for implementation issue template ([#726](https://github.com/trussworks/react-uswds/issues/726)) ([93300e8](https://github.com/trussworks/react-uswds/commit/93300e80fac8c951b3fee71fed331d283cdadd56))
- cleanup storybook examples and clear warnings ([#736](https://github.com/trussworks/react-uswds/issues/736)) ([4b0f7aa](https://github.com/trussworks/react-uswds/commit/4b0f7aa7f101d43cd279da124da31cfa6e87ad5b))
- Reorganize Storybook sidebar nav to better reflect USWDS docs ([#785](https://github.com/trussworks/react-uswds/issues/785)) ([a9ff49f](https://github.com/trussworks/react-uswds/commit/a9ff49ffdbc91c96a6c674f9864cb99327dedde5))
- Update license to 2021 ([#767](https://github.com/trussworks/react-uswds/issues/767)) ([82329da](https://github.com/trussworks/react-uswds/commit/82329da7390a60f122225286c39ae101b699348c))

## [1.10.0](https://github.com/trussworks/react-uswds/compare/1.9.3...1.10.0) (2020-12-29)

### Features

- ComboBox component ([#694](https://github.com/trussworks/react-uswds/issues/694)) ([824028a](https://github.com/trussworks/react-uswds/commit/824028a48d4f7cb2c16472893437128d8411f67b))

### Bug Fixes

- Add className handling to header and footer subcomponents ([#735](https://github.com/trussworks/react-uswds/issues/735)) ([808b290](https://github.com/trussworks/react-uswds/commit/808b29036583095285560c5194b3842db45dded7))

### [1.9.3](https://github.com/trussworks/react-uswds/compare/1.9.2...1.9.3) (2020-11-13)

### Bug Fixes

- Happo automation should skip dependabot PRs ([#453](https://github.com/trussworks/react-uswds/issues/453)) ([dc5bffc](https://github.com/trussworks/react-uswds/commit/dc5bffc88784eef283a075045172e6228cf5384f))
- Require Typescript 3.8+ ([#521](https://github.com/trussworks/react-uswds/issues/521)) ([53efe5d](https://github.com/trussworks/react-uswds/commit/53efe5d164d8dd488c94eb8bdce1c13243d04dae))
- update example app deps to fix security issue ([#476](https://github.com/trussworks/react-uswds/issues/476)) ([00fd70a](https://github.com/trussworks/react-uswds/commit/00fd70a5b597af29d54a6d5b4ca90a619ef05c51))

### Documentation & Examples

- Add Code of Conduct ([#455](https://github.com/trussworks/react-uswds/issues/455)) ([6b8f96c](https://github.com/trussworks/react-uswds/commit/6b8f96cae8d677d9f7a58b82db27a721b7282dc0))

### [1.9.2](https://github.com/trussworks/react-uswds/compare/1.9.1...1.9.2) (2020-09-10)

### Bug Fixes

- Change happo command to check for github user ([#451](https://github.com/trussworks/react-uswds/issues/451)) ([cd0add9](https://github.com/trussworks/react-uswds/commit/cd0add9bd922bafe858bda9a658b9e0983ebec38))

### Documentation & Examples

- **storybook:** Upgrade to 6.0.12 ([#418](https://github.com/trussworks/react-uswds/issues/418)) ([65d91cc](https://github.com/trussworks/react-uswds/commit/65d91ccd77fb102e819480412cc4fc84631b6f51))
- Improve documentation for new contributors, trussels ([#402](https://github.com/trussworks/react-uswds/issues/402)) ([0849a30](https://github.com/trussworks/react-uswds/commit/0849a3093365514741387edd66e7e948861babaa))

### [1.9.1](https://github.com/trussworks/react-uswds/compare/1.9.0...1.9.1) (2020-08-18)

### Bug Fixes

- **Search:** Add placeholder to Search input [#403](https://github.com/trussworks/react-uswds/issues/403) ([#415](https://github.com/trussworks/react-uswds/issues/415)) ([ca31eb4](https://github.com/trussworks/react-uswds/commit/ca31eb49d76a9bea5bafc14b141ff83573bdeb05))

## [1.9.0](https://github.com/trussworks/react-uswds/compare/1.8.0...1.9.0) (2020-08-10)

### Features

- **ButtonGroup:** Add new component ButtonGroup ([#382](https://github.com/trussworks/react-uswds/issues/382)) ([a7b84d6](https://github.com/trussworks/react-uswds/commit/a7b84d6ebd9a144412faf9685d80310204566ba8))
- **CharacterCount:** Add new component CharacterCount ([#383](https://github.com/trussworks/react-uswds/issues/383)) ([cc12034](https://github.com/trussworks/react-uswds/commit/cc120342c3a6484227b6bab00d18c4ce8212d30c))
- add addon-viewports using the included INITIAL_VIEWPORTS list as default for all stories ([#376](https://github.com/trussworks/react-uswds/issues/376)) ([9683b40](https://github.com/trussworks/react-uswds/commit/9683b400769e63bb3035c986acc253ffdc2f008b))
- **Validation:** Add new Validation components ([#351](https://github.com/trussworks/react-uswds/issues/351)) ([2b2369a](https://github.com/trussworks/react-uswds/commit/2b2369a9ad231200daae3042a3070b872081310b))

### Bug Fixes

- **Button:** Deprecate icon, size small properties ([#362](https://github.com/trussworks/react-uswds/issues/362)) ([23a2e4b](https://github.com/trussworks/react-uswds/commit/23a2e4ba9af1f7d16b13625d3b4b3d80fcdd24a3))
- **webpack:** support browsers and node

### Documentation & Examples

- Even more info and emphasis on conventional commits ([#350](https://github.com/trussworks/react-uswds/issues/350)) ([1301cc4](https://github.com/trussworks/react-uswds/commit/1301cc4aef7661a6f6bbead1d89e829a8047fecd))
- Point users to react-fontawesome for icons ([#364](https://github.com/trussworks/react-uswds/issues/364)) ([3de50ef](https://github.com/trussworks/react-uswds/commit/3de50ef1046a1b368e4e8f32b2aa7cef5750d2b8))

## [1.8.0](https://github.com/trussworks/react-uswds/compare/1.7.0...1.8.0) (2020-07-27)

### Features

- **danger:** Block PR if yarn audit has high or critical, do not run on dependabot, no warn on version ([#327](https://github.com/trussworks/react-uswds/issues/327)) ([ee13281](https://github.com/trussworks/react-uswds/commit/ee13281a7669faaeb6ebd56a22d863d82cfe49e2)), closes [#324](https://github.com/trussworks/react-uswds/issues/324)
- **storybook:** switch to addon-docs ([#323](https://github.com/trussworks/react-uswds/issues/323)) ([ccae95d](https://github.com/trussworks/react-uswds/commit/ccae95d44995da3be4156601dd6d023087140f9a)), closes [#119](https://github.com/trussworks/react-uswds/issues/119)
- **storybook:** upgrade to 5.3.0, prepare for addon-docs ([#322](https://github.com/trussworks/react-uswds/issues/322)) ([1f1fc6a](https://github.com/trussworks/react-uswds/commit/1f1fc6a7759c411fff11b9f156b074143ed2eec4)), closes [#119](https://github.com/trussworks/react-uswds/issues/119)

### Bug Fixes

- correct version syntax in deploy-storybook worflow([#321](https://github.com/trussworks/react-uswds/issues/321)) ([4eb7d2c](https://github.com/trussworks/react-uswds/commit/4eb7d2c3490d3740be3517d0d0e4715e0fe2ff9f))
- Export NavDropDownButton ([91f9ca7](https://github.com/trussworks/react-uswds/commit/6e27ce6e3fcc98699b7b442d801a53f113118adf))
- remove commitizen; upgrade example app dependencies ([#335](https://github.com/trussworks/react-uswds/issues/335)) ([9c5aea2](https://github.com/trussworks/react-uswds/commit/9c5aea26acb34cb282ce9f2e0c2a17af90cae786))

### Documentation & Examples

- add [@ahobson](https://github.com/ahobson) as codeowner, remove check-in meeting ([#347](https://github.com/trussworks/react-uswds/issues/347)) ([9eaf02b](https://github.com/trussworks/react-uswds/commit/9eaf02b188fd017322b6e4dc4c1b0d7693e47a9c))
- Add new component issue template ([#340](https://github.com/trussworks/react-uswds/issues/340)) ([8fb0f4b](https://github.com/trussworks/react-uswds/commit/8fb0f4b004fde789e5fcea6294a5659b91503742))

## [1.7.0](https://github.com/trussworks/react-uswds/compare/1.6.1...1.7.0) (2020-07-15)

### Features

- Link Component ([#309](https://github.com/trussworks/react-uswds/issues/309)) ([2879bec](https://github.com/trussworks/react-uswds/commit/2879bec7cce64a71b5b9e44ff0ad400cf11d52f1))

### Bug Fixes

- address all lint warnings ([#319](https://github.com/trussworks/react-uswds/issues/319)) ([95a12a3](https://github.com/trussworks/react-uswds/commit/95a12a363e6f609fee0760469443a808b1c35732))
- refactor menu, megamanu; removes deprecation warnings from tests ([#313](https://github.com/trussworks/react-uswds/issues/313)) ([42e2481](https://github.com/trussworks/react-uswds/commit/42e248190cfbeebf72f7617326cfb03c4f241304))

### [1.6.1](https://github.com/trussworks/react-uswds/compare/1.6.0...1.6.1) (2020-07-13)

### Bug Fixes

- **standard-version:** use -t flag correctly, autocommit changelog and release bump ([#310](https://github.com/trussworks/react-uswds/issues/310)) ([a96591e](https://github.com/trussworks/react-uswds/commit/a96591e71a7ac226b7d397c3714fed25d78c1ab9))
- Use JSX.ImplicitElements to derive valid property names ([#267](https://github.com/trussworks/react-uswds/issues/267)) ([2eba792](https://github.com/trussworks/react-uswds/commit/2eba7922ea2c6a4f4a710f989da41e7b847d4398))

### Documentation & Examples

- Update releasing instructions with current flow ([#297](https://github.com/trussworks/react-uswds/issues/297)) ([87515bc](https://github.com/trussworks/react-uswds/commit/87515bc8577af1630833d0e374c29d08a34cae54))

## 1.6.0 (2020-06-29)

### Features

- **Address:** convert to enum size prop, deprecate boolean ([#269](https://github.com/trussworks/react-uswds/issues/269)) ([952bb71](https://github.com/trussworks/react-uswds/commit/952bb71e55650ef87f23f4a74c6efaf785b01414)), closes [#265](https://github.com/trussworks/react-uswds/issues/265)
- **button:** size enum on Button, add deprecationWarning util ([#229](https://github.com/trussworks/react-uswds/issues/229)) ([3b3f4e7](https://github.com/trussworks/react-uswds/commit/3b3f4e7f792c99d662094af11433d662fae1462d)), closes [#187](https://github.com/trussworks/react-uswds/issues/187)
- **card:** add card component ([89cf241](https://github.com/trussworks/react-uswds/commit/89cf2419bd34d1df7eaa1288f5384e05307c2803))
- **example app:** add modals page example 204 ([#250](https://github.com/trussworks/react-uswds/issues/250)) ([1054469](https://github.com/trussworks/react-uswds/commit/1054469393951e4179690585f7db5ba949f54d99))
- **Footer,FooterNav:** use size prop, deprecate boolean sizes ([#239](https://github.com/trussworks/react-uswds/issues/239)) ([c5abdc4](https://github.com/trussworks/react-uswds/commit/c5abdc49017a31280b4e8608005f96beae545abc)), closes [#233](https://github.com/trussworks/react-uswds/issues/233)
- **Logo:** use size prop, deprecate boolean types ([#268](https://github.com/trussworks/react-uswds/issues/268)) ([ea88c50](https://github.com/trussworks/react-uswds/commit/ea88c500e31ca80950747f62b310b6ed7d7a8df1)), closes [#264](https://github.com/trussworks/react-uswds/issues/264)
- **NavList:** use type prop, deprecate boolean types ([#262](https://github.com/trussworks/react-uswds/issues/262)) ([7c83154](https://github.com/trussworks/react-uswds/commit/7c83154de230edde48b6780219eb86131db31265)), closes [#234](https://github.com/trussworks/react-uswds/issues/234)
- **Search:** add size enum prop, deprecate big,small boolean props ([#270](https://github.com/trussworks/react-uswds/issues/270)) ([c5daf8d](https://github.com/trussworks/react-uswds/commit/c5daf8df90d7d162f6f79a7d0d038d867b8bd4e7)), closes [#266](https://github.com/trussworks/react-uswds/issues/266)
- **TextInput:** use enum props, deprecate booleans ([#284](https://github.com/trussworks/react-uswds/issues/284)) ([6565be6](https://github.com/trussworks/react-uswds/commit/6565be62721f6cacb6348c571d33dde1cedb99af)), closes [#283](https://github.com/trussworks/react-uswds/issues/283)

### Bug Fixes

- **card:** add card components to export ([d57eefc](https://github.com/trussworks/react-uswds/commit/d57eefc9014f7ca694481589ea250c41b8c04130))

### Documentation & Examples

- **example-app:** Example app UI [#202](https://github.com/trussworks/react-uswds/issues/202) ([#237](https://github.com/trussworks/react-uswds/issues/237)) ([832decc](https://github.com/trussworks/react-uswds/commit/832decc83ec38afefed86a25409a0a9ebce83423))
- Add new pull request template [#73](https://github.com/trussworks/react-uswds/issues/73) ([#226](https://github.com/trussworks/react-uswds/issues/226)) ([f030ba6](https://github.com/trussworks/react-uswds/commit/f030ba698848827596b35f1dadb07c0589903565))
- adding new components docs [#73](https://github.com/trussworks/react-uswds/issues/73) ([#248](https://github.com/trussworks/react-uswds/issues/248)) ([981956f](https://github.com/trussworks/react-uswds/commit/981956f599c44dad91d3bc3f70cb46d8c1117a2c))

## 1.5.0 (2020-06-03)

### Bug Fixes

- expand required node version range to 10.x - 12.x ([#215](https://github.com/trussworks/react-uswds/issues/215)) ([0be79d3](https://github.com/trussworks/react-uswds/commit/0be79d340f993b5be3b3b41512bdfa94cc02e9da))

### Documentation & Examples

- **example-app:** add create-react-app example app ([#206](https://github.com/trussworks/react-uswds/issues/206)) ([cf28086](https://github.com/trussworks/react-uswds/commit/cf28086ac5c5b29452b04e0b96ceb62b923345e9))

## 1.4.0 (2020-05-28)

### Features

- **rangeinput:** creates form RangeInput component, test, and stories ([#194](https://github.com/trussworks/react-uswds/issues/194)) ([8e0179f](https://github.com/trussworks/react-uswds/commit/8e0179f27145732a6dc5a01661fa5b0e5278b1dd)), closes [#81](https://github.com/trussworks/react-uswds/issues/81)
- add dateInput component for forms ([#144](https://github.com/trussworks/react-uswds/issues/144)) ([bc5eccc](https://github.com/trussworks/react-uswds/commit/bc5eccc24a131e127388314f2cabef9401a5859d))
- add Footer component [#142](https://github.com/trussworks/react-uswds/issues/142) ([#146](https://github.com/trussworks/react-uswds/issues/146)) ([94c3ed8](https://github.com/trussworks/react-uswds/commit/94c3ed8f545480537590ec4e3166ed2b0596794d))

### Bug Fixes

- accept id and name props for Search component input field ([#183](https://github.com/trussworks/react-uswds/issues/183)) ([c39c085](https://github.com/trussworks/react-uswds/commit/c39c085082d929a20e740c48d8348fe8ac403348)), closes [#162](https://github.com/trussworks/react-uswds/issues/162)
- export Search component ([2508829](https://github.com/trussworks/react-uswds/commit/25088296ee2de1467b88e54df9cfb9e5962ea095))
- extends header menu to accept list props for corresponding id ([#188](https://github.com/trussworks/react-uswds/issues/188)) ([85a1780](https://github.com/trussworks/react-uswds/commit/85a1780c39f8c972e9f1d6978f686301911bcd01)), closes [#165](https://github.com/trussworks/react-uswds/issues/165)
- removes the usa-search class name from the form component ([#184](https://github.com/trussworks/react-uswds/issues/184)) ([8cb5121](https://github.com/trussworks/react-uswds/commit/8cb5121a2b0bb9c6aff985226c94857518b00750)), closes [#163](https://github.com/trussworks/react-uswds/issues/163)
- update gov banner to uswds version 2.7.0 ([c5bd62c](https://github.com/trussworks/react-uswds/commit/c5bd62c68b88248e98dab86a8db28a53529ee836))

## 1.3.0 (2020-05-19)

### Features

- Add header component [#83](https://github.com/trussworks/react-uswds/issues/83) ([#102](https://github.com/trussworks/react-uswds/issues/102)) ([4281b11](https://github.com/trussworks/react-uswds/commit/4281b11fc5dac3579ac9bdea56e1327b08c9c738))
- Add search component
- Add Grid, GridContainer components

## 1.2.0 (2020-04-30)

### Features

- Add new Alert styles (slim, no icon) and allow the Alert to accept `div` attributes as props
- Add additional CSS utility classes for background colors and text colors

### Docs

- Add additional examples of Form templates (Sign In form, Reset Password form) to Storybook

## 1.1.0 (2020-03-19)

### Features

- Add initial set of USWDS form components (Checkbox, Dropdown, ErrorMessage, Fieldset, Form, FormGroup, Label, Radio, TextInput, Textarea)
- Add native HTML attributes to existing Tag & Button components in order to support custom CSS classes
- Add new Modal component (designed by Truss) and related Overlay and ModalContainer components

## 1.0.0 (2019-01-10)

### Features

- Initial set of USWDS components (Accordion, Alert, Button, GovBanner, SideNav, Table, Tag)
- Initial documentation and dev configuration for contributing & usage
