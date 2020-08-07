import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CharacterCount } from './CharacterCount'

describe('CharacterCount component', () => {
  afterEach(() => jest.clearAllMocks())

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
      const tRef = React.createRef<HTMLTextAreaElement>()
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
      const onBlur = jest.fn()
      const onChange = jest.fn()
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
      expect(message).toHaveClass('usa-character-count__message')
      expect(message).toHaveAttribute('id', 'character-count-id-info')
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
      const tRef = React.createRef<HTMLTextAreaElement>()
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          defaultValue="Prefill this value"
          isTextArea
          rows={5}
          maxLength={10}
          inputRef={tRef}
        />
      )
      const textarea = getByRole('textbox')
      expect(textarea).toHaveAttribute('name', 'character-count')
      expect(textarea).toHaveAttribute('rows', '5')
      expect(textarea).toHaveTextContent('Prefill this value')
      expect(textarea).toBe(tRef.current)
    })

    it('calls own onChange and onBlur functions', () => {
      const onChange = jest.fn()
      const onBlur = jest.fn()
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
      expect(message).toHaveClass('usa-character-count__message')
      expect(message).toHaveAttribute('id', 'character-count-info')
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

    it('updates message text with characters left onChange', () => {
      const { getByRole, getByText } = render(
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

      expect(getByText('4 characters left')).toBeInTheDocument()

      fireEvent.change(input, {
        target: { value: 'abcd' },
      })

      expect(getByText('1 character left')).toBeInTheDocument()
    })

    it('updates message text with characters over the limit when expected ', () => {
      const { getByRole, getByText } = render(
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

      expect(getByText('1 character over limit')).toBeInTheDocument()
      expect(getByText('1 character over limit')).toHaveClass(
        'usa-character-count__message--invalid'
      )

      fireEvent.change(input, {
        target: { value: 'abcdefg' },
      })

      expect(getByText('2 characters over limit')).toBeInTheDocument()
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
        'usa-character-count__message--invalid'
      )

      fireEvent.change(input, {
        target: { value: 'abcde' },
      })

      expect(getByTestId('characterCountMessage')).not.toHaveClass(
        'usa-character-count__message--invalid'
      )
    })
  })

  describe('with custom message', () => {
    const customMessage = jest.fn(
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
    const customCharacterCount = jest.fn(
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
      expect(input).toBeValid

      fireEvent.change(input, {
        target: { value: 'abcad' },
      })
      fireEvent.blur(input)

      expect(input).toBeInvalid
    })
  })
})
