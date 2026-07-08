import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
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
    it('toggles button label on click', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={[languages[0], languages[1]]} />
      )
      const button = getByTestId('languageSelectorButton')
      expect(button).toHaveTextContent(languages[0].label)
      await user.click(button)
      expect(button).toHaveTextContent(languages[1].label)
      await user.click(button)
      expect(button).toHaveTextContent(languages[0].label)
    })

    it('works like a link', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={[languages[0], languages[1]]} />
      )
      await user.click(getByTestId('languageSelectorButton'))
      await waitFor(() => {
        expect(window.location.hash).toEqual(voidLink)
      })
    })

    it('works like a button', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={[languagesButton[0], languagesButton[1]]} />
      )
      await user.click(getByTestId('languageSelectorButton'))
      await user.click(getByTestId('languageSelectorButton'))
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

    it('displays the selected displayLang label', () => {
      const { getByTestId } = render(
        <LanguageSelector
          langs={languages}
          label="Languages"
          displayLang={languages[1].attr}
        />
      )

      expect(getByTestId('languageSelectorButton')).toHaveTextContent(
        languages[1].label
      )
    })

    it('renders list when opened', async () => {
      const user = userEvent.setup()
      const { getByText, getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )
      expect(getByText(languages[0].label)).not.toBeVisible()
      expect(getByText(languages[1].label)).not.toBeVisible()
      expect(getByText(languages[2].label)).not.toBeVisible()
      await user.click(getByTestId('languageSelectorButton'))
      expect(getByText(languages[0].label)).toBeVisible()
      expect(getByText(languages[1].label)).toBeVisible()
      expect(getByText(languages[2].label)).toBeVisible()
    })

    describe('its list items', () => {
      it('are links', async () => {
        const user = userEvent.setup()
        const { getByTestId } = render(
          <LanguageSelector langs={languages} label="Languages" />
        )
        await user.click(getByTestId('languageSelectorButton'))
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

      it('are buttons', async () => {
        const user = userEvent.setup()
        const { getByTestId } = render(
          <LanguageSelector langs={languagesButton} label="Languages" />
        )
        await user.click(getByTestId('languageSelectorButton'))
        await user.click(getByTestId(languagesButton[0].attr))
        await user.click(getByTestId(languagesButton[1].attr))
        await user.click(getByTestId(languagesButton[2].attr))
        expect(voidButton).toHaveBeenCalledTimes(5) //3 here and 2 above
      })
    })

    it('closes the list after selecting a language', async () => {
      const user = userEvent.setup()

      const onClick = vi.fn()
      const localLanguagesButton = languagesButton.map((language) => ({
        ...language,
        on_click: onClick,
      }))
      const { getByTestId } = render(
        <LanguageSelector langs={localLanguagesButton} label="Languages" />
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languagesButton[0].attr)).toBeVisible()

      await user.click(getByTestId(languagesButton[0].attr))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languagesButton[0].attr)).not.toBeVisible()
    })

    it('closes the list after selecting a language link', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      await user.click(getByTestId(languages[0].attr))

      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId('languageSelectorButton')).toHaveTextContent(
        'Languages'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list after clicking outside the language selector', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <>
          <LanguageSelector langs={languages} label="Languages" />
          <button type="button" data-testid="outside">
            Outside
          </button>
        </>
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      await user.click(getByTestId('outside'))

      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list after clicking empty space inside the component, without relying on focus', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      // fireEvent, not userEvent: dispatch a bare click with no focus
      // movement, as in Safari, so the focusout handler cannot close the
      // menu and mask a regression in the click listener
      fireEvent.click(getByTestId('languageSelector'))

      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list when focus leaves the language selector', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <>
          <LanguageSelector langs={languages} label="Languages" />
          <button type="button" data-testid="outside">
            Outside
          </button>
        </>
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      // tab through each language link...
      for (const _language of languages) {
        await user.tab()
      }
      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'true'
      )
      // ...then tab out of the component
      await user.tab()

      expect(getByTestId('outside')).toHaveFocus()
      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list and returns focus to the button when Escape is pressed', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      // move focus into the menu so Escape must return it to the button
      await user.tab()
      expect(getByTestId(languages[0].attr)).toHaveFocus()

      await user.keyboard('{Escape}')

      expect(getByTestId('languageSelectorButton')).toHaveFocus()
      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list when the toggle button is clicked again', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <LanguageSelector langs={languages} label="Languages" />
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      await user.click(getByTestId('languageSelectorButton'))

      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes the list when an outside click handler stops propagation', async () => {
      const user = userEvent.setup()
      const { getByTestId } = render(
        <>
          <LanguageSelector langs={languages} label="Languages" />
          <button type="button" data-testid="outside">
            Outside
          </button>
        </>
      )
      // a widget that swallows bubbling clicks, as third-party widgets often
      // do; only a capture-phase document listener can still observe the click
      getByTestId('outside').addEventListener('click', (event) =>
        event.stopPropagation()
      )

      await user.click(getByTestId('languageSelectorButton'))
      expect(getByTestId(languages[0].attr)).toBeVisible()

      // fireEvent, not userEvent: a bare click with no focus movement, so the
      // focusout handler cannot close the menu and mask a bubble-phase listener
      fireEvent.click(getByTestId('outside'))

      expect(getByTestId('languageSelectorButton')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId(languages[0].attr)).not.toBeVisible()
    })

    it('closes an open selector when another selector is opened', async () => {
      const user = userEvent.setup()
      const { getAllByTestId } = render(
        <>
          <LanguageSelector langs={languages} label="Languages" />
          <LanguageSelector langs={languages} label="Languages" />
        </>
      )
      const [firstButton, secondButton] = getAllByTestId(
        'languageSelectorButton'
      )

      await user.click(firstButton)
      expect(firstButton).toHaveAttribute('aria-expanded', 'true')

      await user.click(secondButton)

      expect(firstButton).toHaveAttribute('aria-expanded', 'false')
      expect(secondButton).toHaveAttribute('aria-expanded', 'true')
    })
  })
})
