import React from 'react'
import { render } from '@testing-library/react'

import AlertBase from './AlertBase'

describe('AlertBase component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(
      <AlertBase type="success" />
    )
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  it('renders validation style alert', () => {
    const { queryByTestId } = render(
      <AlertBase type="success" validation className="myClass">
        Test children
      </AlertBase>
    )
    expect(queryByTestId('alert')).toHaveTextContent('Test children')
    expect(queryByTestId('alert')).toHaveClass('usa-alert--validation')
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(
      <AlertBase type="success" className="myClass" />
    )
    expect(queryByTestId('alert')).toHaveClass('myClass')
  })
})
