# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
