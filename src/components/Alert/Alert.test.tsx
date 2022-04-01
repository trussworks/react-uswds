import React from 'react'
import { render } from '@testing-library/react'

import { Alert } from './Alert'

describe('Alert component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert type="success" />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  it('renders children in <p> tag by default', () => {
    const { queryByTestId } = render(
      <Alert type="success" className="myClass">
        Test children
      </Alert>
    )
    expect(queryByTestId('alert')).toHaveTextContent('Test children')
    expect(queryByTestId('alert')).toContainHTML('p')
  })

  it('renders validation style alert', () => {
    const { queryByTestId } = render(
      <Alert type="success" validation className="myClass">
        Test children
      </Alert>
    )
    expect(queryByTestId('alert')).toHaveTextContent('Test children')
    expect(queryByTestId('alert')).not.toContainHTML('p')
    expect(queryByTestId('alert')).toHaveClass('usa-alert--validation')
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(
      <Alert type="success" className="myClass" />
    )
    expect(queryByTestId('alert')).toHaveClass('myClass')
  })

  it('accepts a headingLevel', () => {
    const { getByRole } = render(
      <Alert type="success" headingLevel="h2" heading="Working Alert" />
    )
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('uses heading level 4 by default', () => {
    const { getByRole } = render(<Alert type="info" heading="Working Alert" />)
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
  })

  describe('with a CTA', () => {
    it('renders the CTA', () => {
      const testCTA = <button type="button">Click Here</button>
      const { queryByText } = render(<Alert type="success" cta={testCTA} />)
      expect(queryByText('Click Here')).toBeInTheDocument()
    })
  })
})
