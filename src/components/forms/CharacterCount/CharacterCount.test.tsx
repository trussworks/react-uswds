import React, { useRef, useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CharacterCount, useCharacterCount } from './CharacterCount'
import { TextInput } from '../TextInput/TextInput'
import { Textarea } from '../Textarea/Textarea'
import { Label } from '../Label/Label'

describe('CharacterCount component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  const id = 'character-count'
  const characterCountId = `${id}-info`

  const TextInputExample = ({
    maxLength = 10,
    getMessage,
    getCharacterCount,
  }: {
    maxLength?: number
    getMessage?: (remainingCount: number, max: number) => string
    getCharacterCount?: (text: string) => number
  }): React.JSX.Element => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const status = useCharacterCount({
      inputValue: value,
      maxLength,
      getCharacterCount,
      getMessage,
      inputRef,
    })
    return (
      <>
        <Label htmlFor={id}>Text input</Label>
        <TextInput
          id={id}
          name={id}
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          validationStatus={status.isOverLimit ? 'error' : undefined}
          aria-describedby={characterCountId}
        />
        <CharacterCount id={characterCountId} status={status} />
      </>
    )
  }

  const TextareaExample = ({
    maxLength = 10,
  }: {
    maxLength?: number
  }): React.JSX.Element => {
    const [value, setValue] = useState('')
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const status = useCharacterCount({
      inputValue: value,
      maxLength,
      inputRef: textareaRef,
    })
    return (
      <>
        <Label htmlFor={id}>Textarea</Label>
        <Textarea
          id={id}
          name={id}
          ref={textareaRef}
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          error={status.isOverLimit}
          aria-describedby={characterCountId}
        />
        <CharacterCount id={characterCountId} status={status} />
      </>
    )
  }

  it('renders the visual and screen reader status messages', () => {
    render(<TextInputExample />)

    const message = screen.getByTestId('characterCountMessage')
    expect(message).toHaveClass('usa-hint usa-character-count__status')
    expect(message).toHaveAttribute('aria-hidden', 'true')

    const srMessage = screen.getByTestId('characterCountSRMessage')
    expect(srMessage).toHaveClass('usa-character-count__sr-status usa-sr-only')
    expect(srMessage).toHaveAttribute('aria-live', 'polite')
  })

  it('exposes an info element that should be linked to the field via aria-describedby', () => {
    render(<TextInputExample maxLength={10} />)

    const info = screen.getByText('You can enter up to 10 characters')
    expect(info).toHaveAttribute('id', characterCountId)
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      characterCountId
    )
  })

  describe('with a text input', () => {
    it('updates the count message as the user types', async () => {
      const user = userEvent.setup()
      render(<TextInputExample maxLength={5} />)
      const input = screen.getByRole('textbox')

      const message = screen.getByTestId('characterCountMessage')
      expect(message).toHaveTextContent('5 characters allowed')

      await user.type(input, '1')
      expect(message).toHaveTextContent('4 characters left')

      await user.type(input, '234')
      expect(message).toHaveTextContent('1 character left')

      await user.type(input, '5')
      expect(message).toHaveTextContent('0 characters left')

      await user.type(input, '6')
      expect(message).toHaveTextContent('1 character over limit')

      await user.type(input, '7')
      expect(message).toHaveTextContent('2 characters over limit')
    })

    it('shows over-limit messaging and invalid styling as the user exceeds the limit', async () => {
      const user = userEvent.setup()
      render(<TextInputExample maxLength={5} />)

      await user.type(screen.getByRole('textbox'), 'abcdef')

      const message = screen.getByTestId('characterCountMessage')
      expect(message).toHaveTextContent('1 character over limit')
      expect(message).toHaveClass('usa-character-count__status--invalid')
    })

    it('applies the error class to the input when over the limit', async () => {
      const user = userEvent.setup()
      render(<TextInputExample maxLength={5} />)
      const input = screen.getByRole('textbox')
      expect(input).not.toHaveClass('usa-input--error')

      await user.type(input, 'abcdef')
      expect(input).toHaveClass('usa-input--error')

      await user.type(input, '{backspace}{backspace}')
      expect(input).not.toHaveClass('usa-input--error')
    })

    it('sets the field validity from the limit as the user types', async () => {
      const user = userEvent.setup()
      render(<TextInputExample maxLength={5} />)
      const input = screen.getByRole('textbox')
      expect(input).toBeValid()

      await user.type(input, 'abcdef')
      expect(input).toBeInvalid()

      await user.type(input, '{backspace}{backspace}')
      expect(input).toBeValid()
    })

    it('updates the screen reader status after a delay', async () => {
      const user = userEvent.setup()
      render(<TextInputExample maxLength={5} />)
      const srMessage = screen.getByTestId('characterCountSRMessage')

      await user.type(screen.getByRole('textbox'), 'a')
      expect(srMessage).toHaveTextContent('')

      await new Promise((res) => setTimeout(res, 1000))
      expect(srMessage).toHaveTextContent('4 characters left')
    })
  })

  describe('with a textarea', () => {
    it('updates the count and field validity as the user types', async () => {
      const user = userEvent.setup()
      render(<TextareaExample maxLength={5} />)
      const textarea = screen.getByRole('textbox')

      await user.type(textarea, 'abcdef')
      expect(screen.getByTestId('characterCountMessage')).toHaveTextContent(
        '1 character over limit'
      )
      expect(textarea).toBeInvalid()
      expect(textarea).toHaveClass('usa-input--error')

      await user.type(textarea, '{backspace}{backspace}')
      expect(textarea).toBeValid()
      expect(textarea).not.toHaveClass('usa-input--error')
    })
  })

  describe('with custom message and character count', () => {
    it('uses a custom message and updates it as the user types', async () => {
      const user = userEvent.setup()
      const customMessage = vi.fn(
        (count: number, maxCount: number): string =>
          `${maxCount - count} characters remain`
      )
      render(<TextInputExample maxLength={6} getMessage={customMessage} />)

      expect(customMessage).toHaveBeenCalled()

      const characterCountMessage = screen.getByTestId('characterCountMessage')
      expect(characterCountMessage).toHaveTextContent('6 characters remain')

      await user.type(screen.getByRole('textbox'), 'abcdef')
      expect(characterCountMessage).toHaveTextContent('0 characters remain')
    })

    it('uses a custom character count for messaging and validity', async () => {
      const user = userEvent.setup()
      // custom count adds 2 to the input value
      const customCount = vi.fn((text: string): number => text.length + 2)
      render(<TextInputExample maxLength={6} getCharacterCount={customCount} />)
      const input = screen.getByRole('textbox')

      const message = screen.getByTestId('characterCountMessage')
      // 6 (max) - 2 (added to blank input value) = 4 (remaining)
      expect(message).toHaveTextContent('4 characters left')

      // 5 typed characters count as 7 (over maxLength 6)
      await user.type(input, '12345')
      expect(input).toBeInvalid()
      expect(message).toHaveTextContent('1 character over limit')
    })
  })
})
