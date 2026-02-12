import React from 'react'
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

  describe('alert type classes', () => {
    const typeScenarios: ['success' | 'warning' | 'error' | 'info', string][] =
      [
        ['success', 'usa-alert--success'],
        ['warning', 'usa-alert--warning'],
        ['error', 'usa-alert--error'],
        ['info', 'usa-alert--info'],
      ]

    it.each(typeScenarios)(
      'applies the correct class for type="%s"',
      (type, expectedClass) => {
        const { queryByTestId } = render(
          <Alert type={type} headingLevel="h4" />
        )
        expect(queryByTestId('alert')).toHaveClass('usa-alert', expectedClass)
      }
    )
  })

  describe('slim prop', () => {
    it('applies usa-alert--slim class when slim is true', () => {
      const { queryByTestId } = render(
        <Alert type="info" headingLevel="h4" slim />
      )
      expect(queryByTestId('alert')).toHaveClass('usa-alert--slim')
    })

    it('does not apply usa-alert--slim class when slim is not set', () => {
      const { queryByTestId } = render(
        <Alert type="info" headingLevel="h4" />
      )
      expect(queryByTestId('alert')).not.toHaveClass('usa-alert--slim')
    })
  })

  describe('noIcon prop', () => {
    it('applies usa-alert--no-icon class when noIcon is true', () => {
      const { queryByTestId } = render(
        <Alert type="info" headingLevel="h4" noIcon />
      )
      expect(queryByTestId('alert')).toHaveClass('usa-alert--no-icon')
    })

    it('does not apply usa-alert--no-icon class when noIcon is not set', () => {
      const { queryByTestId } = render(
        <Alert type="info" headingLevel="h4" />
      )
      expect(queryByTestId('alert')).not.toHaveClass('usa-alert--no-icon')
    })
  })

  it('applies both slim and noIcon classes together', () => {
    const { queryByTestId } = render(
      <Alert type="info" headingLevel="h4" slim noIcon />
    )
    expect(queryByTestId('alert')).toHaveClass(
      'usa-alert--slim',
      'usa-alert--no-icon'
    )
  })

  describe('heading prop', () => {
    it('renders heading with usa-alert__heading class', () => {
      const { getByRole } = render(
        <Alert type="info" headingLevel="h4" heading="Test Heading" />
      )
      const heading = getByRole('heading', { level: 4 })
      expect(heading).toHaveTextContent('Test Heading')
      expect(heading).toHaveClass('usa-alert__heading')
    })

    it('does not render a heading element when heading prop is absent', () => {
      const { queryByRole } = render(
        <Alert type="info" headingLevel="h4" />
      )
      expect(queryByRole('heading')).not.toBeInTheDocument()
    })

    it('renders heading as ReactNode', () => {
      const { getByRole } = render(
        <Alert
          type="info"
          headingLevel="h4"
          heading={
            <>
              Alert with <em>emphasis</em>
            </>
          }
        />
      )
      const heading = getByRole('heading', { level: 4 })
      expect(heading).toContainHTML('em')
      expect(heading).toHaveTextContent('Alert with emphasis')
    })
  })

  describe('children rendering', () => {
    it('wraps children in a p tag with usa-alert__text class', () => {
      const { container } = render(
        <Alert type="info" headingLevel="h4">
          Some text
        </Alert>
      )
      const pTag = container.querySelector('p.usa-alert__text')
      expect(pTag).toBeInTheDocument()
      expect(pTag).toHaveTextContent('Some text')
    })

    it('does not render children or p tag when children are not provided', () => {
      const { container } = render(
        <Alert type="info" headingLevel="h4" />
      )
      expect(container.querySelector('p.usa-alert__text')).not.toBeInTheDocument()
    })

    it('renders children directly without p tag when validation is true', () => {
      const { container } = render(
        <Alert type="info" headingLevel="h4" validation>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Alert>
      )
      expect(container.querySelector('p.usa-alert__text')).not.toBeInTheDocument()
      expect(container.querySelector('ul')).toBeInTheDocument()
      expect(container.querySelectorAll('li')).toHaveLength(2)
    })
  })

  describe('with a CTA', () => {
    it('adds the CTA-specific CSS module class', () => {
      const testCTA = <button type="button">Click Here</button>
      const { queryByTestId } = render(
        <Alert type="success" headingLevel="h4" cta={testCTA} />
      )
      const alert = queryByTestId('alert')
      // The alertWithCTA class is a CSS module class, so check for a class that
      // contains 'alertWithCTA' (CSS modules may mangle the name)
      const classNames = alert?.getAttribute('class') || ''
      expect(classNames).toMatch(/alertWithCTA/)
    })

    it('does not add the CTA-specific CSS module class when no cta is provided', () => {
      const { queryByTestId } = render(
        <Alert type="success" headingLevel="h4" />
      )
      const alert = queryByTestId('alert')
      const classNames = alert?.getAttribute('class') || ''
      expect(classNames).not.toMatch(/alertWithCTA/)
    })

    it('renders the CTA outside the alert body', () => {
      const testCTA = <button type="button">CTA Button</button>
      const { container } = render(
        <Alert type="success" headingLevel="h4" cta={testCTA}>
          Body text
        </Alert>
      )
      const alertBody = container.querySelector('.usa-alert__body')
      expect(alertBody).not.toContainHTML('CTA Button')
      expect(container.querySelector('button')).toHaveTextContent('CTA Button')
    })
  })

  describe('HTML attribute spread', () => {
    it('passes through additional HTML attributes', () => {
      const { queryByTestId } = render(
        <Alert
          type="info"
          headingLevel="h4"
          role="alert"
          aria-live="assertive"
          id="my-alert"
        />
      )
      const alert = queryByTestId('alert')
      expect(alert).toHaveAttribute('role', 'alert')
      expect(alert).toHaveAttribute('aria-live', 'assertive')
      expect(alert).toHaveAttribute('id', 'my-alert')
    })
  })

  it('always has the base usa-alert class', () => {
    const { queryByTestId } = render(
      <Alert type="error" headingLevel="h4" />
    )
    expect(queryByTestId('alert')).toHaveClass('usa-alert')
  })
})
