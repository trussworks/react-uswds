import React from 'react'
import { render } from '@testing-library/react'

import { InputPrefix } from './InputPrefix'

describe('InputPrefix component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <InputPrefix className={'test-class'}>
        <svg data-testid="svg-test" />
      </InputPrefix>
    )

    const inputPrefix = queryByTestId('InputPrefix')
    expect(inputPrefix).toBeInTheDocument()
    expect(inputPrefix).toHaveClass('usa-input-prefix')
    expect(inputPrefix).toHaveClass('test-class')
    expect(inputPrefix).toHaveAttribute('aria-hidden')
    expect(queryByTestId('svg-test')).toBeInTheDocument()
  })
})
