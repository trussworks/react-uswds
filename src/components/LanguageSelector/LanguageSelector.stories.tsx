import React, { useState } from 'react'
import { LanguageSelector, LanguageDefinition } from './LanguageSelector'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof LanguageSelector> = {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  argTypes: {
    displayLang: { control: { type: 'text' } },
    small: { control: { type: 'boolean' } },
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

export default meta
type Story = StoryObj<typeof meta>

export const LanguagesDisplayPropSandbox: Story = {
  args: {
    displayLang: `en`,
  },
  render: (args) => {
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
  },
}

export const LanguagesDisplayMoreThanTwoLanguagesPropSandbox: Story = {
  args: {
    displayLang: `en`,
  },
  render: (args) => {
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
  },
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

export const TwoLanguagesAsALink: Story = {
  render: (args) => (
    <LanguageSelector
      langs={[languagesLink[2], languagesLink[3]]}
      small={args.small}
    />
  ),
}

export const TwoLanguagesAsAButton: Story = {
  render: (args) => (
    <LanguageSelector
      langs={[languagesButton[2], languagesButton[3]]}
      small={args.small}
    />
  ),
}

export const MoreThanTwoLanguagesAsALink: Story = {
  render: (args) => (
    <LanguageSelector
      langs={languagesLink}
      label="Languages"
      small={args.small}
    />
  ),
}

export const MoreThanTwoLanguagesAsAButton: Story = {
  render: (args) => (
    <LanguageSelector
      langs={languagesButton}
      label="Languages"
      small={args.small}
    />
  ),
}

export const CustomClass: Story = {
  render: (args) => (
    <LanguageSelector
      langs={languagesLink}
      label="Languages"
      small={args.small}
      className="usa-button--unstyled"
    />
  ),
}
