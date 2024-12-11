import { fireEvent, render, waitFor } from '@testing-library/react'
import {
  LanguageSelector,
  LanguageDefinition,
} from '../LanguageSelector/LanguageSelector'

const voidLink = '#test'
const languages: LanguageDefinition[] = [
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
]

const voidButton = vi.fn()
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

    it('works like a link', async () => {
      const { getByTestId } = render(
        <LanguageSelector langs={[languages[0], languages[1]]} />
      )
      fireEvent.click(getByTestId('languageSelectorButton'))
      await waitFor(() => {
        expect(window.location.hash).toEqual(voidLink)
      })
    })

    it('works like a button', () => {
      const { getByTestId } = render(
        <LanguageSelector langs={[languagesButton[0], languagesButton[1]]} />
      )
      fireEvent.click(getByTestId('languageSelectorButton'))
      fireEvent.click(getByTestId('languageSelectorButton'))
      expect(voidButton).toHaveBeenCalledTimes(2)
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

    describe('its list items', () => {
      it('are links', () => {
        const { getByTestId } = render(
          <LanguageSelector langs={languages} label="Languages" />
        )
        fireEvent.click(getByTestId('languageSelectorButton'))
        expect(getByTestId(languages[0].attr)).toHaveAttribute(
          'href',
          languages[0].on_click
        )
        expect(getByTestId(languages[1].attr)).toHaveAttribute(
          'href',
          languages[0].on_click
        )
        expect(getByTestId(languages[2].attr)).toHaveAttribute(
          'href',
          languages[0].on_click
        )
      })

      it('are buttons', () => {
        const { getByTestId } = render(
          <LanguageSelector langs={languagesButton} label="Languages" />
        )
        fireEvent.click(getByTestId('languageSelectorButton'))
        fireEvent.click(getByTestId(languagesButton[0].attr))
        fireEvent.click(getByTestId(languagesButton[1].attr))
        fireEvent.click(getByTestId(languagesButton[2].attr))
        expect(voidButton).toHaveBeenCalledTimes(5) //3 here and 2 above
      })
    })
  })
})
