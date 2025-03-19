import { create } from '@storybook/theming/create';

export default create({
  brandTitle: 'U.S. Web Design System (USWDS)',
  brandUrl: 'https://github.com/trussworks/react-uswds',
  brandImage: 'uswds.svg',
  brandTarget: '_self',
  base: 'light',

  // Text
  fontBase: "'Public Sans Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  textColor: '#1b1b1b',
  inputTextColor: '#1b1b1b',
  textInverseColor: '#ffffff',
  barTextColor: '#757575',
  colorPrimary: '#005ea2',
  colorSecondary: '#005ea2',

  // UI
  appBg: '#ffffff',
  appBorderColor: '#a9aeb1',
  appBorderRadius: 4,
  inputBorder: '#5c5c5c',
  inputBorderRadius: 4,
});
