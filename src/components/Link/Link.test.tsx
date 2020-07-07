import React from 'react'
import { render } from '@testing-library/react'

import { Link } from './Link'

describe('Link component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('with default anchor tag', () => {
    it('renders link', () => {
      const { container, getByText } = render(
        <Link href="#">Click this link</Link>
      )
      expect(container.querySelector('a')).toHaveClass('usa-link')
      expect(getByText('Click this link')).toBeInTheDocument()
    })

    it('renders external link', () => {
      const { container } = render(
        <Link href="#" variant="external">
          Click Me
        </Link>
      )
      expect(container.querySelector('a')).toHaveClass(
        'usa-link usa-link--external'
      )
    })

    it('renders unstyled link', () => {
      const { container } = render(
        <Link className="custom-class" href="#" variant="unstyled">
          Click Me
        </Link>
      )
      expect(container.querySelector('a')).not.toHaveClass('usa-link')
      expect(container.querySelector('a')).toHaveClass('custom-class')
    })

    it('renders link with optional anchor tag attributes', () => {
      const { container } = render(
        <Link href="#" target="_blank" title="Test Link" variant="unstyled">
          Click Me
        </Link>
      )
      expect(container.querySelector('a')).toHaveAttribute('title', 'Test Link')
      expect(container.querySelector('a')).toHaveAttribute('target', '_blank')
    })
  })

  describe('with custom component', () => {
    const CustomLink = (
      <a data-testid="customComponent" href="#testlink">
        Click Me
      </a>
    )

    it('renders component', () => {
      const { queryByTestId } = render(
        <Link className="custom-class" asCustomComponent>
          {CustomLink}
        </Link>
      )
      expect(queryByTestId('customComponent')).toBeInTheDocument()
      expect(queryByTestId('customComponent')).toHaveAttribute(
        'href',
        '#testlink'
      )
    })

    it('renders component children', () => {
      const { queryByText } = render(
        <Link className="custom-class" asCustomComponent>
          {CustomLink}
        </Link>
      )
      expect(queryByText('Click Me')).toBeInTheDocument()
    })

    it('adds Link styles', () => {
      const { queryByTestId } = render(
        <Link className="custom-class" asCustomComponent>
          {CustomLink}
        </Link>
      )
      expect(queryByTestId('customComponent')).toHaveClass('usa-link')
      expect(queryByTestId('customComponent')).toHaveClass('custom-class')
    })

    it('handles variant prop', () => {
      const { queryByTestId } = render(
        <Link className="custom-class" asCustomComponent variant="unstyled">
          {CustomLink}
        </Link>
      )
      expect(queryByTestId('customComponent')).not.toHaveClass('usa-link')
      expect(queryByTestId('customComponent')).toHaveClass('custom-class')
    })
  })
})
