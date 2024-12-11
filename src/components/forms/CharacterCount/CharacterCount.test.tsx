import { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CharacterCount } from './CharacterCount'

describe('CharacterCount component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByRole } = render(
      <CharacterCount
        id="character-count-1"
        name="character-count-1"
        maxLength={10}
      />
    )
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  describe('renders text input', () => {
    it('with expected element', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          className={'custom-class'}
          maxLength={10}
        />
      )
      expect(getByRole('textbox')).toBeInstanceOf(HTMLInputElement)
    })

    it('with expected styles', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          className={'custom-class'}
          maxLength={10}
        />
      )
      const input = getByRole('textbox')
      expect(input).toHaveClass('usa-character-count__field')
      expect(input).toHaveClass('custom-class')
    })

    it('handles own props', () => {
      const tRef = createRef<HTMLTextAreaElement>()
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          defaultValue="Prefill this value"
          maxLength={10}
          inputRef={tRef}
        />
      )
      const input = getByRole('textbox')
      expect(input).toHaveAttribute('name', 'character-count')
      expect(input).toHaveAttribute('value', 'Prefill this value')
      expect(input).toBe(tRef.current)
    })

    it('calls own onChange and onBlur functions', () => {
      const onBlur = vi.fn()
      const onChange = vi.fn()
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          maxLength={2}
          onBlur={onBlur}
          onChange={onChange}
        />
      )
      const input = getByRole('textbox')

      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, {
        target: { value: 'a' },
      })

      expect(onChange).toHaveBeenCalled()
      fireEvent.blur(input)

      expect(onBlur).toHaveBeenCalled()
    })

    it('includes the message hint', () => {
      const { getByTestId } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          maxLength={10}
        />
      )
      const message = getByTestId('characterCountMessage')
      expect(message).toHaveClass('usa-hint usa-character-count__status')
      expect(message).toHaveAttribute('aria-hidden', 'true')
    })

    it('includes the screen reader message', () => {
      const { getByTestId } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          maxLength={10}
        />
      )
      const message = getByTestId('characterCountSRMessage')
      expect(message).toHaveClass('usa-character-count__sr-status usa-sr-only')
      expect(message).toHaveAttribute('aria-live', 'polite')
    })
  })

  describe('renders textarea', () => {
    it('with expected element', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          className={'custom-class'}
          isTextArea
          maxLength={10}
        />
      )
      expect(getByRole('textbox')).toBeInstanceOf(HTMLTextAreaElement)
    })

    it('with expected styles', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          className={'custom-class'}
          isTextArea
          maxLength={10}
        />
      )
      const textarea = getByRole('textbox')
      expect(textarea).toHaveClass('usa-character-count__field')
      expect(textarea).toHaveClass('custom-class')
    })

    it('handles own props', () => {
      const tRef = createRef<HTMLTextAreaElement>()
      const { getByDisplayValue } = render(
        <>
          <CharacterCount
            id="character-count-defaultValue"
            name="character-count-defaultValue"
            defaultValue="Prefilled defaultValue"
            isTextArea
            rows={5}
            maxLength={10}
            inputRef={tRef}
          />
          <CharacterCount
            id="character-count-value"
            name="character-count-value"
            value="Prefilled value"
            isTextArea
            rows={5}
            maxLength={10}
          />
        </>
      )
      const textareaDefaultValue = getByDisplayValue('Prefilled defaultValue')
      expect(textareaDefaultValue).toHaveAttribute(
        'name',
        'character-count-defaultValue'
      )
      expect(textareaDefaultValue).toHaveAttribute('rows', '5')
      expect(textareaDefaultValue).toBe(tRef.current)
      const textareaValue = getByDisplayValue('Prefilled value')
      expect(textareaValue).toHaveAttribute('id', 'character-count-value')
    })

    it('calls own onChange and onBlur functions', () => {
      const onChange = vi.fn()
      const onBlur = vi.fn()
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          isTextArea
          maxLength={10}
          onBlur={onBlur}
          onChange={onChange}
        />
      )
      const input = getByRole('textbox')

      expect(onChange).not.toHaveBeenCalled()

      fireEvent.change(input, {
        target: { value: 'a' },
      })

      expect(onChange).toHaveBeenCalled()

      fireEvent.blur(input)

      expect(onBlur).toHaveBeenCalled()
    })

    it('includes the message hint', () => {
      const { getByTestId } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          maxLength={10}
          isTextArea
        />
      )
      const message = getByTestId('characterCountMessage')
      expect(message).toHaveClass('usa-character-count__status')
      expect(message).toHaveAttribute('aria-hidden', 'true')
    })

    it('includes the screen reader message hint', () => {
      const { getByTestId } = render(
        <CharacterCount
          id="character-count"
          name="character-count"
          maxLength={10}
          isTextArea
        />
      )
      const message = getByTestId('characterCountSRMessage')
      expect(message).toHaveClass('usa-character-count__sr-status usa-sr-only')
      expect(message).toHaveAttribute('aria-live', 'polite')
    })
  })

  describe('with default character count and message', () => {
    it('displays allowed characters when character count is zero', () => {
      const { getByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={20}
        />
      )
      expect(getByText('20 characters allowed')).toBeInTheDocument()
    })

    it('updates message text with characters left onChange', async () => {
      const { getByRole, getAllByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )
      const input = getByRole('textbox')
      fireEvent.change(input, {
        target: { value: 'a' },
      })

      await new Promise((res) => setTimeout(res, 1000))

      expect(getAllByText('4 characters left')).toHaveLength(2)
      expect(getAllByText('4 characters left')[0]).toBeInTheDocument()

      fireEvent.change(input, {
        target: { value: 'abcd' },
      })

      await new Promise((res) => setTimeout(res, 1000))

      expect(getAllByText('1 character left')).toHaveLength(2)
      expect(getAllByText('1 character left')[0]).toBeInTheDocument()
    })

    it('updates message text with characters over the limit when expected', async () => {
      const { getByRole, getAllByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )
      const input = getByRole('textbox')

      fireEvent.change(input, {
        target: { value: 'abcdef' },
      })

      await new Promise((res) => setTimeout(res, 1000))

      expect(getAllByText('1 character over limit')).toHaveLength(2)
      expect(getAllByText('1 character over limit')[0]).toBeInTheDocument()
      expect(getAllByText('1 character over limit')[0]).toHaveClass(
        'usa-character-count__status--invalid'
      )

      fireEvent.change(input, {
        target: { value: 'abcdefg' },
      })

      await new Promise((res) => setTimeout(res, 1000))

      expect(getAllByText('2 characters over limit')).toHaveLength(2)
      expect(getAllByText('2 characters over limit')[0]).toBeInTheDocument()
    })

    it('updates input validity', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )
      const input = getByRole('textbox')

      fireEvent.change(getByRole('textbox'), {
        target: { value: 'abcdefdfsfdsfdsfsd' },
      })
      fireEvent.blur(input)

      expect(getByRole('textbox')).toBeInvalid()

      fireEvent.change(input, {
        target: { value: 'abce' },
      })
      fireEvent.blur(input)

      expect(input).toBeValid()
    })

    it('adjusts message styles onChange', () => {
      const { getByRole, getByTestId } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )
      const input = getByRole('textbox')

      fireEvent.change(input, {
        target: { value: 'abcdef' },
      })
      expect(getByTestId('characterCountMessage')).toHaveClass(
        'usa-character-count__status--invalid'
      )

      fireEvent.change(input, {
        target: { value: 'abcde' },
      })

      expect(getByTestId('characterCountMessage')).not.toHaveClass(
        'usa-character-count__status--invalid'
      )
    })
  })

  describe('with custom message', () => {
    const customMessage = vi.fn(
      (count: number, maxCount: number): string =>
        `${maxCount - count} characters remain`
    )

    it('renders initially with custom message', () => {
      const { getByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          getMessage={customMessage}
          maxLength={6}
        />
      )
      expect(customMessage).toHaveBeenCalled()
      expect(getByText('6 characters remain')).toBeInTheDocument()
    })

    it('updates message text onChange', () => {
      const { getByRole, getByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          getMessage={customMessage}
          maxLength={6}
        />
      )

      const input = getByRole('textbox')
      expect(getByText('6 characters remain')).toBeInTheDocument()

      fireEvent.change(input, {
        target: { value: 'abcdef' },
      })

      expect(getByText('0 characters remain')).toBeInTheDocument()
    })
  })

  describe('with custom character count', () => {
    const customCharacterCount = vi.fn(
      (text: string): number => text.length + 2
    )

    it('renders initially with custom character count', () => {
      const { getByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          getCharacterCount={customCharacterCount}
          maxLength={6}
        />
      )
      expect(customCharacterCount).toHaveBeenCalled()
      expect(getByText('4 characters left')).toBeInTheDocument()
    })

    it('updates input validity', () => {
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          getCharacterCount={customCharacterCount}
          maxLength={6}
        />
      )

      const input = getByRole('textbox')
      expect(input).toBeValid()

      fireEvent.change(input, {
        target: { value: 'abcad' },
      })
      fireEvent.blur(input)

      expect(input).toBeInvalid()
    })
  })
})
