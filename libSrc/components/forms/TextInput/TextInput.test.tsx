import React from 'react'
import { render } from '@testing-library/react'
import TextInput from './TextInput'
import type { ValidationStatus } from '../../../types/validationStatus'

describe('TextInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <TextInput id="input-type-text" name="input-type-text" type="text" />
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })

  describe('renders inputSize classes', () => {
    beforeEach(() => {
      vi.clearAllMocks()
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
      vi.clearAllMocks()
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
