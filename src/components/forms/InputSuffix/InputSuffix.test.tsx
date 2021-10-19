import React from 'react'
import { render } from '@testing-library/react'
import { InputSuffix } from './InputSuffix'

describe('InputSuffix component', () => {
  it('renders without errors', () => {
    const { queryByTestId, getByText } = render(
      <InputSuffix className={'test-class'}>lbs.</InputSuffix>
    )

    const inputSuffix = queryByTestId('InputSuffix')
    expect(inputSuffix).toBeInTheDocument()
    expect(inputSuffix).toHaveClass('usa-input-suffix')
    expect(inputSuffix).toHaveClass('test-class')
    expect(inputSuffix).toHaveAttribute('aria-hidden')

    expect(getByText('lbs.')).toBeInTheDocument()
  })
})
