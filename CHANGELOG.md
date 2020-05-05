# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## UNRELEASED

- Added components for the header and extended header (Header, List, MegaMenu, Menu, NavButton, NavDropDown, PrimaryNav, Title, ExtendedHeader, ExtendedNav)
- Added search component

## [1.2.0] - 2020-04-30

- Added new Alert styles (slim, no icon) and allow the Alert to accept `div` attributes as props
- Added additional examples of Form templates (Sign In form, Reset Password form) to Storybook
- Turn off USWDS SCSS notifications on compile
- Updated CODEOWNERS and contributors
- Fixed Jest running in CI
- Auto-approve Dependabot PRs
- Deploy Storybook static site on merge to master
- Run `yarn upgrade` to update all out of date dependencies
- Add [DangerJS](https://danger.systems/js/) to automate some checks for contribution standards
- Add additional CSS utility classes for background colors and text colors

## [1.1.0] - 2020-03-19

- Add initial set of USWDS form components (Checkbox, Dropdown, ErrorMessage, Fieldset, Form, FormGroup, Label, Radio, TextInput, Textarea)
- Add native HTML attributes to existing Tag & Button components in order to support custom CSS classes
- Added new Modal component (designed by Truss) and related Overlay and ModalContainer components
- Configured use of SASS/SCSS and SASS/SCSS modules so that we can use USWDS SCSS
- Configure Dependabot for automated dependency updates

## [1.0.0] - 2019-01-10

### Added

- Initial set of USWDS components (Accordion, Alert, Button, GovBanner, SideNav, Table, Tag)
- Initial documentation and dev configuration for contributing & usage
