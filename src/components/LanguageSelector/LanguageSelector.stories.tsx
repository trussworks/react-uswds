import React from 'react'
import { LanguageSelector, LanguageDefinition } from './LanguageSelector'

export default {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  argTypes: {
    small: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 LanguageSelector component

Source: https://designsystem.digital.gov/components/language-selector/
`,
      },
    },
  },
}
type StorybookArguments = {
  small?: boolean
}
const voidLink = 'javascript:void()'
const languages: LanguageDefinition[] = [
  {
    label: 'العربية',
    label_en: 'Arabic',
    attr: 'ar',
    on_click: voidLink,
  },
  {
    label: '简体字',
    label_en: 'Chinese - Simplified',
    attr: 'zh',
    on_click: voidLink,
  },
  {
    label: 'English',
    attr: 'en',
    on_click: voidLink,
  },
  {
    label: 'Español',
    label_en: 'Spanish',
    attr: 'es',
    on_click: voidLink,
  },
  {
    label: 'Français',
    label_en: 'French',
    attr: 'fr',
    on_click: voidLink,
  },
  {
    label: 'Italiano',
    label_en: 'Italian',
    attr: 'it',
    on_click: voidLink,
  },
  {
    label: 'Pусский',
    label_en: 'Russian',
    attr: 'ru',
    on_click: voidLink,
  },
]

export const TwoLanguages = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <LanguageSelector
    langs={[languages[2], languages[3]]}
    small={argTypes.small}
  />
)

export const MoreThanTwoLanguages = (
  argTypes: StorybookArguments
): React.ReactElement => (
  <LanguageSelector
    langs={languages}
    label="Languages"
    small={argTypes.small}
  />
)
