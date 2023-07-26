import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {
  LanguageSelector,
  LanguageDefinition,
} from '../LanguageSelector/LanguageSelector'

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
]

describe('LanguageSelector component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<LanguageSelector langs={languages} />)
    expect(getByTestId('languageSelector')).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { getByTestId } = render(
      <LanguageSelector langs={languages} className="custom-class" />
    )
    expect(getByTestId('languageSelector')).toHaveClass('custom-class')
  })

  it('renders small', () => {
    const { getByTestId } = render(<LanguageSelector langs={languages} small />)
    expect(getByTestId('languageSelector')).toHaveClass('usa-language--small')
  })

  it('is auto-labelled with the first language in the list', () => {
    const { getByTestId } = render(<LanguageSelector langs={languages} />)
    expect(getByTestId('languageSelectorButton')).toHaveTextContent(
      languages[0].label
    )
  })

  describe('Given 2 languages', () => {
    it('toggles button label on click', () => {
      const { getByTestId } = render(
        <LanguageSelector langs={[languages[0], languages[1]]} />
      )
      const button = getByTestId('languageSelectorButton')
      expect(button).toHaveTextContent(languages[0].label)
      fireEvent.click(button)
      expect(button).toHaveTextContent(languages[1].label)
      fireEvent.click(button)
      expect(button).toHaveTextContent(languages[0].label)
    })
  })

  describe('Given >2 languages', () => {
    it('displays the given label', () => {
      const { getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )
      expect(getByTestId('languageSelectorButton')).toHaveTextContent(
        'Languages'
      )
    })

    it('renders list when opened', () => {
      const { getByText, getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )
      expect(getByText(languages[0].label)).not.toBeVisible()
      expect(getByText(languages[1].label)).not.toBeVisible()
      expect(getByText(languages[2].label)).not.toBeVisible()
      fireEvent.click(getByTestId('languageSelectorButton'))
      expect(getByText(languages[0].label)).toBeVisible()
      expect(getByText(languages[1].label)).toBeVisible()
      expect(getByText(languages[2].label)).toBeVisible()
    })
  })
})
