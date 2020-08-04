import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CharacterCount } from './CharacterCount'

describe('CharacterCount component', () => {
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

  it('renders with default value', () => {
    const { queryByText } = render(
      <CharacterCount
        id="character-count-id"
        name="characterCount"
        defaultValue="Prefill with this value"
        maxLength={20}
      />
    )
    expect(queryByText('Prefill with this value')).toBeInTheDocument()
  })

  it.todo('can be passed a ref')

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
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          defaultValue="Prefill this value"
          maxLength={10}
        />
      )
      const input = getByRole('textbox')
      expect(input).toHaveAttribute('name', 'character-count')
      expect(input).toHaveAttribute('value', 'Prefill this value')
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
      const { getByRole } = render(
        <CharacterCount
          id="character-count-id"
          name="character-count"
          defaultValue="Prefill this value"
          isTextArea
          rows={5}
          maxLength={10}
        />
      )
      const textarea = getByRole('textbox')
      expect(textarea).toHaveAttribute('name', 'character-count')
      expect(textarea).toHaveAttribute('rows', '5')
      expect(textarea).toHaveAttribute('value', 'Prefill this value')
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

  describe('uses default character count and message', () => {
    it('displays allowed characters when character count is zero', () => {
      const { queryByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          defaultValue=""
          maxLength={20}
        />
      )
      expect(queryByText('20 characters allowed')).toBeInTheDocument()
    })

    it('updates message field onChange', () => {
      const { queryByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          defaultValue=""
          maxLength={20}
        />
      )
      expect(queryByText('20 characters allowed')).toBeInTheDocument()
    })

    it('updates message field with characters left when expected', () => {
      const { getByTestId, queryByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'a' },
      })

      expect(queryByText('4 characters left')).toBeInTheDocument()

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'abcd' },
      })

      expect(queryByText('1 character left')).toBeInTheDocument()
    })

    it('updates message field with characters over the limit when expected ', () => {
      const { getByTestId, queryByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'abcdef' },
      })

      expect(queryByText('1 character over limit')).toBeInTheDocument()
      expect(queryByText('1 character over limit')).toHaveClass(
        'usa-character-count__message--invalid'
      )

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'abcdefg' },
      })

      expect(queryByText('2 characters over limit')).toBeInTheDocument()
    })

    it('sets validity onChange', () => {
      const { getByTestId, queryByText } = render(
        <CharacterCount
          id="character-count-id"
          name="characterCount"
          maxLength={5}
        />
      )

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'abcdef' },
      })

      fireEvent.blur(getByTestId('characterCountInput'))

      expect(getByTestId('characterCountInput')).toBeInvalid()

      fireEvent.change(getByTestId('characterCountInput'), {
        target: { value: 'abcde' },
      })

      fireEvent.blur(getByTestId('characterCountInput'))

      expect(getByTestId('characterCountInput')).toBeValid()
    })
  })

  describe('uses custom character count and message when props included', () => {
    const customCharacterCount = jest.mock()
    const customMessage = jest.mock()
  })
})
