import React, { type JSX, useState } from 'react'
import { LanguageSelector, LanguageDefinition } from './LanguageSelector'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  argTypes: {
    displayLang: { control: 'string' },
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

const TwoLanguagesTemplate: StoryFn<typeof LanguageSelector> = (args) => {
  const [lang, setLang] = useState<string | undefined>(args.displayLang)

  const languagesDisplayProp: LanguageDefinition[] = [
    {
      label: '简体字',
      label_local: 'Chinese - Simplified',
      attr: 'zh',
      on_click: () => {
        setLang(`en`)
      },
    },
    {
      label: 'English',
      attr: 'en',
      on_click: () => {
        setLang(`zh`)
      },
    },
  ]

  return <LanguageSelector langs={languagesDisplayProp} displayLang={lang} />
}

export const LanguagesDisplayPropSandbox = TwoLanguagesTemplate.bind({})
LanguagesDisplayPropSandbox.args = {
  displayLang: `en`,
}

const MoreThanTwoLanguagesTemplate: StoryFn<typeof LanguageSelector> = (
  args
) => {
  const [lang, setLang] = useState<string | undefined>(args.displayLang)

  const languagesDisplayProp: LanguageDefinition[] = [
    {
      label: 'العربية',
      label_local: 'Arabic',
      attr: 'ar',
      on_click: () => {
        setLang(`ar`)
      },
    },
    {
      label: '简体字',
      label_local: 'Chinese - Simplified',
      attr: 'zh',
      on_click: () => {
        setLang(`zh`)
      },
    },
    {
      label: 'English',
      attr: 'en',
      on_click: () => {
        setLang(`en`)
      },
    },
  ]

  return <LanguageSelector langs={languagesDisplayProp} displayLang={lang} />
}

export const LanguagesDisplayMoreThanTwoLanguagesPropSandbox =
  MoreThanTwoLanguagesTemplate.bind({})
LanguagesDisplayPropSandbox.args = {
  displayLang: `en`,
}

type StorybookArguments = {
  small?: boolean
}
const voidLink = '#test'
const languagesLink: LanguageDefinition[] = [
  {
    label: 'العربية',
    label_local: 'Arabic',
    attr: 'ar',
    on_click: voidLink,
  },
  {
    label: '简体字',
    label_local: 'Chinese - Simplified',
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
    label_local: 'Spanish',
    attr: 'es',
    on_click: voidLink,
  },
  {
    label: 'Français',
    label_local: 'French',
    attr: 'fr',
    on_click: voidLink,
  },
  {
    label: 'Italiano',
    label_local: 'Italian',
    attr: 'it',
    on_click: voidLink,
  },
  {
    label: 'Pусский',
    label_local: 'Russian',
    attr: 'ru',
    on_click: voidLink,
  },
]

const voidButton = () => console.log('click')
const languagesButton: LanguageDefinition[] = [
  {
    label: 'العربية',
    label_local: 'Arabic',
    attr: 'ar',
    on_click: voidButton,
  },
  {
    label: '简体字',
    label_local: 'Chinese - Simplified',
    attr: 'zh',
    on_click: voidButton,
  },
  {
    label: 'English',
    attr: 'en',
    on_click: voidButton,
  },
  {
    label: 'Español',
    label_local: 'Spanish',
    attr: 'es',
    on_click: voidButton,
  },
  {
    label: 'Français',
    label_local: 'French',
    attr: 'fr',
    on_click: voidButton,
  },
  {
    label: 'Italiano',
    label_local: 'Italian',
    attr: 'it',
    on_click: voidButton,
  },
  {
    label: 'Pусский',
    label_local: 'Russian',
    attr: 'ru',
    on_click: voidButton,
  },
]

export const TwoLanguagesAsALink = (
  argTypes: StorybookArguments
): JSX.Element => (
  <LanguageSelector
    langs={[languagesLink[2], languagesLink[3]]}
    small={argTypes.small}
  />
)

export const TwoLanguagesAsAButton = (
  argTypes: StorybookArguments
): JSX.Element => (
  <LanguageSelector
    langs={[languagesButton[2], languagesButton[3]]}
    small={argTypes.small}
  />
)

export const MoreThanTwoLanguagesAsALink = (
  argTypes: StorybookArguments
): JSX.Element => (
  <LanguageSelector
    langs={languagesLink}
    label="Languages"
    small={argTypes.small}
  />
)

export const MoreThanTwoLanguagesAsAButton = (
  argTypes: StorybookArguments
): JSX.Element => (
  <LanguageSelector
    langs={languagesButton}
    label="Languages"
    small={argTypes.small}
  />
)

export const CustomClass = (argTypes: StorybookArguments): JSX.Element => (
  <LanguageSelector
    langs={languagesLink}
    label="Languages"
    small={argTypes.small}
    className="usa-button--unstyled"
  />
)
