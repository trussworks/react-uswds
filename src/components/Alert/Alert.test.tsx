import React from 'react'
import { render } from '@testing-library/react'

import { Alert, AlertHeading, AlertText } from './Alert'
import { HeadingLevel } from '../../types/headingLevel'

describe('Alert component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert type="success" />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  it('renders children in <p> tag by default', () => {
    const { queryByTestId } = render(
      <Alert type="success" className="myClass">
        <AlertText>Test children</AlertText>
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

  it('accepts a bodyClassName prop', () => {
    const { queryByText } = render(
      <Alert type="success" bodyClassName="myBodyClass">
        Test children
      </Alert>
    )
    expect(queryByText('Test children')).toHaveClass('myBodyClass')
  })

  describe('with custom heading levels', () => {
    const scenarios: [HeadingLevel, number][] = [
      ['h1', 1],
      ['h2', 2],
      ['h3', 3],
      ['h4', 4],
      ['h5', 5],
      ['h6', 6],
    ]
    it.each(scenarios)(
      'can render with headingLevel %s',
      (headingLevel, expectedLevel) => {
        const { getByRole } = render(
          <Alert type="success">
            <AlertHeading level={headingLevel}>Working Alert</AlertHeading>
          </Alert>
        )
        expect(
          getByRole('heading', { level: expectedLevel })
        ).toBeInTheDocument()
      }
    )
  })

  describe('with a custom Call To Action', () => {
    it('renders the Call To Action', () => {
      const { queryByText } = render(
        <Alert type="success">
          <button type="button">Click Here</button>
        </Alert>
      )
      expect(queryByText('Click Here')).toBeInTheDocument()
    })
  })
})
