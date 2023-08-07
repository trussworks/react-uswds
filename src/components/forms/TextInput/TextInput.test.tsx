import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from './TextInput'
import { TextInputMask } from './TextInputMask'
import { ValidationStatus } from '../../../types/validationStatus'

describe('TextInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <TextInput id="input-type-text" name="input-type-text" type="text" />
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })

  describe('masking features', () => {
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
  })

  describe('renders inputSize classes', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it.each([
      ['medium', 'usa-input--medium'],
      ['small', 'usa-input--small'],
    ])(
      'when inputSize is %s should include class %s',
      (sizeString, uswdsClass) => {
        const inputSize = sizeString as 'medium' | 'small'
        const { container } = render(
          <TextInput
            id="input-type-text"
            name="input-type-text"
            type="text"
            inputSize={inputSize}
          />
        )
        expect(container.querySelector('input')).toHaveClass(uswdsClass)
      }
    )
  })

  describe('renders validationStatus classes', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it.each<[ValidationStatus, string]>([
      ['error', 'usa-input--error'],
      ['success', 'usa-input--success'],
    ])(
      'when validationStatus is %s should include class %s',
      (validationStatus, uswdsClass) => {
        const { container } = render(
          <TextInput
            id="input-type-text"
            name="input-type-text"
            type="text"
            validationStatus={validationStatus}
          />
        )
        expect(container.querySelector('input')).toHaveClass(uswdsClass)
      }
    )
  })
})
