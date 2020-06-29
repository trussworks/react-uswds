import React from 'react'
import { render } from '@testing-library/react'

jest.mock('../../../deprecation')
import { deprecationWarning } from '../../../deprecation'
import { TextInput } from './TextInput'

describe('TextInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <TextInput id="input-type-text" name="input-type-text" type="text" />
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
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
        expect(deprecationWarning).toHaveBeenCalledTimes(0)
      }
    )

    it.each([
      ['medium', 'small', 'usa-input--medium'],
      ['small', 'medium', 'usa-input--small'],
    ])(
      'prefers inputSize to deprecated %s',
      (sizeString, deprecatedKey, uswdsClass) => {
        const inputSize = sizeString as 'medium' | 'small'
        const deprecatedProps: { [key: string]: boolean } = {}
        deprecatedProps[`${deprecatedKey}`] = true
        const { container } = render(
          <TextInput
            id="input-type-text"
            name="input-type-text"
            type="text"
            inputSize={inputSize}
            {...deprecatedProps}
          />
        )
        expect(container.querySelector('input')).toHaveClass(uswdsClass)
        expect(deprecationWarning).toHaveBeenCalledTimes(1)
      }
    )
  })

  describe('renders validationStatus classes', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it.each([
      ['error', 'usa-input--error'],
      ['success', 'usa-input--success'],
    ])(
      'when validationStatus is %s should include class %s',
      (validationString, uswdsClass) => {
        const validationStatus = validationString as 'error' | 'success'
        const { container } = render(
          <TextInput
            id="input-type-text"
            name="input-type-text"
            type="text"
            validationStatus={validationStatus}
          />
        )
        expect(container.querySelector('input')).toHaveClass(uswdsClass)
        expect(deprecationWarning).toHaveBeenCalledTimes(0)
      }
    )

    it.each([
      ['error', 'success', 'usa-input--error'],
      ['success', 'error', 'usa-input--success'],
    ])(
      'prefers validationStatus to deprecated %s',
      (validationString, deprecatedKey, uswdsClass) => {
        const validationStatus = validationString as 'error' | 'success'
        const deprecatedProps: { [key: string]: boolean } = {}
        deprecatedProps[`${deprecatedKey}`] = true
        const { container } = render(
          <TextInput
            id="input-type-text"
            name="input-type-text"
            type="text"
            validationStatus={validationStatus}
            {...deprecatedProps}
          />
        )
        expect(container.querySelector('input')).toHaveClass(uswdsClass)
        expect(deprecationWarning).toHaveBeenCalledTimes(1)
      }
    )
  })
})
