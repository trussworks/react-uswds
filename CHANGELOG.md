# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.3.0 (2020-05-19)


### Features

* add header component [#83](https://github.com/trussworks/react-uswds/issues/83) ([#102](https://github.com/trussworks/react-uswds/issues/102)) ([4281b11](https://github.com/trussworks/react-uswds/commit/4281b11fc5dac3579ac9bdea56e1327b08c9c738))

## [1.2.0] - 2020-04-30

- feat: Added components for the header and extended header (Header, NavList, MegaMenu, Menu, NavMenuButton, NavCloseButton, NavDropDownButton, PrimaryNav, Title,  ExtendedNav)
- chore: Added yarn audit check to dangerfile (on package change)
- feat: Added search component
- feat: Added Grid, GridContainer components

## 1.2.0 (2020-04-30)

- feat: Added new Alert styles (slim, no icon) and allow the Alert to accept `div` attributes as props
- feat: Add additional CSS utility classes for background colors and text colors
- docs: Added additional examples of Form templates (Sign In form, Reset Password form) to Storybook
- chore: Turn off USWDS SCSS notifications on compile
- chore: Updated CODEOWNERS and contributors
- chore: Auto-approve Dependabot PRs
- chore: Deploy Storybook static site on merge to master
- chore: Run `yarn upgrade` to update all out of date dependencies
- chore: Add [DangerJS](https://danger.systems/js/) to automate some checks for contribution standards
- ci: Fixed Jest running in CI

## 1.1.0 (2020-03-19)

- feat: Add initial set of USWDS form components (Checkbox, Dropdown, ErrorMessage, Fieldset, Form, FormGroup, Label, Radio, TextInput, Textarea)
- feat: Add native HTML attributes to existing Tag & Button components in order to support custom CSS classes
- feat: Added new Modal component (designed by Truss) and related Overlay and ModalContainer components
- chore: Configured use of SASS/SCSS and SASS/SCSS modules so that we can use USWDS SCSS
- chore: Configure Dependabot for automated dependency updates

## 1.0.0 (2019-01-10)

- feat!: Initial set of USWDS components (Accordion, Alert, Button, GovBanner, SideNav, Table, Tag)
- feat!: Initial documentation and dev configuration for contributing & usage
