import React from 'react'
import { screen, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { TextInputMask } from './TextInputMask'

describe('TextInputMask component', () => {
  const requiredProps = { name: 'masked-input', type: 'text' as const }

  const setup = () => {
    const utils = render(
      <TextInputMask
        id="input-type-alphanumeric"
        name="input-type-alphanumeric"
        type="text"
        aria-describedby="hint-alphanumeric"
        mask="___ ___"
        pattern="\w\d\w \d\w\d"
        charset="A#A #A#"
      />
    )
    const input = screen.getByTestId('textInput')
    const mask = screen.getByTestId('input-type-alphanumericMask')
    const user = userEvent.setup()
    return {
      input,
      mask,
      user,
      ...utils,
    }
  }

  it('renders with class and placeholder', () => {
    const { input, mask } = setup()
    expect(input).toHaveClass('usa-masked')
    expect(mask).toHaveTextContent('___ ___')
  })

  it('autoformats inputted text', async () => {
    const { input, user } = setup()
    await user.type(input, 'A1B2C3')
    expect((input as HTMLInputElement).value).toBe('A1B 2C3')
  })

  it('rejects entry based on charset', async () => {
    const { input, user } = setup()
    await user.type(input, 'A1B 2C')
    expect((input as HTMLInputElement).value).toBe('A1B 2C')
  })

  it('updates the mask overlay when a controlled value changes', () => {
    const { rerender } = render(
      <TextInputMask
        {...requiredProps}
        id="controlled"
        mask="____"
        value="12"
      />
    )

    expect(screen.getByTestId('controlledMask')).toHaveTextContent('12__', {
      normalizeWhitespace: false,
    })

    rerender(
      <TextInputMask
        {...requiredProps}
        id="controlled"
        mask="____"
        value="1234"
      />
    )

    expect(screen.getByTestId('controlledMask').textContent).toBe('1234')
  })

  it('re-masks a controlled value when the mask changes', () => {
    const { rerender } = render(
      <TextInputMask
        {...requiredProps}
        id="controlled-mask"
        mask="____"
        value="1234"
      />
    )

    rerender(
      <TextInputMask
        {...requiredProps}
        id="controlled-mask"
        mask="__-__"
        value="1234"
      />
    )

    expect(screen.getByTestId('textInput')).toHaveValue('12-34')
  })

  it('re-masks a controlled value when the charset changes', () => {
    const { rerender } = render(
      <TextInputMask
        {...requiredProps}
        id="controlled-charset"
        mask="____"
        charset="####"
        value="1234"
      />
    )

    rerender(
      <TextInputMask
        {...requiredProps}
        id="controlled-charset"
        mask="____"
        charset="AAAA"
        value="1234"
      />
    )

    // The letter-only charset rejects the numeric value at its first character.
    expect(screen.getByTestId('textInput')).toHaveValue('')
  })

  it('does not reapply a changed defaultValue after user input', async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <TextInputMask
        {...requiredProps}
        id="uncontrolled"
        mask="____"
        defaultValue="12"
      />
    )
    const input = screen.getByTestId('textInput')

    await user.type(input, '34')
    rerender(
      <TextInputMask
        {...requiredProps}
        id="uncontrolled"
        mask="____"
        defaultValue="9"
      />
    )

    expect(input).toHaveValue('1234')
  })
})
