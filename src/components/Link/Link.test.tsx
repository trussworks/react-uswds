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

    it('renders navlink', () => {
      const { container } = render(
        <Link href="#" variant="nav">
          Click Me
        </Link>
      )
      expect(container.querySelector('a')).toHaveClass('usa-link usa-nav__link')
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
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a']

    const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
      to,
      children,
      className,
      ...linkProps
    }: CustomLinkProps): React.ReactElement => (
      <a href={to} className={className} {...linkProps}>
        {children}
      </a>
    )

    it('handles own props', () => {
      const { getByTestId } = render(
        <Link<CustomLinkProps>
          className="custom-class"
          asCustom={CustomLink}
          to={'#testlink'}
          data-testid={'customComponent'}
          custom-attr="customVal">
          Click Me
        </Link>
      )
      expect
      expect(getByTestId('customComponent')).toHaveTextContent('Click Me')
      expect(getByTestId('customComponent')).toHaveAttribute(
        'href',
        '#testlink'
      )
      expect(getByTestId('customComponent')).toHaveAttribute(
        'custom-attr',
        'customVal'
      )
      expect(getByTestId('customComponent')).toHaveClass('custom-class')
    })

    it('renders with Link styles', () => {
      const { getByTestId } = render(
        <Link<CustomLinkProps>
          asCustom={CustomLink}
          to={'#testlink'}
          data-testid={'customComponent'}>
          Click Me
        </Link>
      )
      expect(getByTestId('customComponent')).toBeInTheDocument()
      expect(getByTestId('customComponent')).toHaveClass('usa-link')
    })

    it('renders unstyled link', () => {
      const { queryByTestId } = render(
        <Link
          className="custom-class"
          asCustom={CustomLink}
          to={'#'}
          variant="unstyled"
          data-testid={'customComponent'}>
          Click Me
        </Link>
      )
      expect(queryByTestId('customComponent')).not.toHaveClass('usa-link')
      expect(queryByTestId('customComponent')).toHaveClass('custom-class')
    })
  })
})
