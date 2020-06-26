import React from 'react'
import { render } from '@testing-library/react'

import { Link } from './Link'

describe('Link component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders default link', () => {
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

  describe('with custom component', () => {
    interface CustomLinkProps {
      to: string
      children: React.ReactNode
      className: string
    }

    const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
      to,
      children,
      className,
    }: CustomLinkProps): React.ReactElement => (
      <a data-testid="customComponent" href={to} className={className}>
        {children}
      </a>
    )

    it('renders functional component, handling own props', () => {
      const { queryByTestId } = render(
        <Link
          className="custom-class"
          asCustom={CustomLink}
          to={'#testlink'}
          data-testid={'customComponent'}>
          Click Me
        </Link>
      )
      expect(queryByTestId('customComponent')).toBeInTheDocument()
      expect(queryByTestId('customComponent')).toHaveAttribute(
        'href',
        '#testlink'
      )
    })

    it('handles unstyled prop', () => {
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
