import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { CharacterCount } from './CharacterCount'
import { Label } from '../Label/Label'

describe('CharacterCount component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <CharacterCount
        id="character-count-id"
        name="characterCount"
        maxLength={10}
      />
    )
    expect(queryByTestId('characterCountInput')).toBeInTheDocument()
  })

  it('renders with label component prop', () => {
    const { queryByLabelText } = render(
      <CharacterCount
        id="character-count-id"
        name="characterCount"
        maxLength={10}
        label={
          <Label htmlFor="character-count-id">Text input character count</Label>
        }
      />
    )
    expect(queryByLabelText('Text input character count')).toBeInTheDocument()
  })

  it('renders with Textarea component', () => {
    const { container } = render(
      <CharacterCount
        id="character-count-id"
        name="characterCount"
        maxLength={10}
        isTextArea={true}
      />
    )
    expect(container.querySelector('textarea')).toBeInTheDocument()
  })

  it('displays initial empty state message', () => {
    const { queryByText } = render(
      <CharacterCount
        id="character-count-id"
        name="characterCount"
        maxLength={20}
      />
    )
    expect(queryByText('20 characters allowed')).toBeInTheDocument()
  })

  it('updates message field less than limit', () => {
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

  it('updates message field over the limit with invalid class', () => {
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

  it('sets validity on focus event', () => {
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

    expect(getByTestId('characterCountInput')).toBeValid()
  })
})
