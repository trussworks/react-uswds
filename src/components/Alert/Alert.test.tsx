import { render } from '@testing-library/react'

import { Alert } from './Alert'
import { HeadingLevel } from '../../types/headingLevel'

describe('Alert component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<Alert type="success" headingLevel="h4" />)
    expect(queryByTestId('alert')).toBeInTheDocument()
  })

  it('renders children in <p> tag by default', () => {
    const { queryByTestId } = render(
      <Alert type="success" headingLevel="h4" className="myClass">
        Test children
      </Alert>
    )
    expect(queryByTestId('alert')).toHaveTextContent('Test children')
    expect(queryByTestId('alert')).toContainHTML('p')
  })

  it('renders validation style alert', () => {
    const { queryByTestId } = render(
      <Alert type="success" validation headingLevel="h4" className="myClass">
        Test children
      </Alert>
    )
    expect(queryByTestId('alert')).toHaveTextContent('Test children')
    expect(queryByTestId('alert')).not.toContainHTML('p')
    expect(queryByTestId('alert')).toHaveClass('usa-alert--validation')
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(
      <Alert type="success" headingLevel="h4" className="myClass" />
    )
    expect(queryByTestId('alert')).toHaveClass('myClass')
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
          <Alert
            type="success"
            headingLevel={headingLevel}
            heading="Working Alert"
          />
        )
        expect(
          getByRole('heading', { level: expectedLevel })
        ).toBeInTheDocument()
      }
    )
  })

  describe('with a CTA', () => {
    it('renders the CTA', () => {
      const testCTA = <button type="button">Click Here</button>
      const { queryByText } = render(
        <Alert type="success" headingLevel="h4" cta={testCTA} />
      )
      expect(queryByText('Click Here')).toBeInTheDocument()
    })
  })
})
