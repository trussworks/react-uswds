import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    identifierLinkGoogle
  </a>,
  <a key="identifierLinkGoogleAgain" href="www.google.com">
    identifierLinkGoogleAgain
  </a>,
]

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierLinks></IdentifierLinks>)
    expect(queryByTestId('identifierLinks')).toBeInTheDocument()
  })

  it('renders custom styles', () => {
    const { container } = render(
      <IdentifierLinks className="custom-class" links={links} />
    )
    expect(
      container.querySelector('.usa-identifier__section--required-links')
    ).toHaveClass('custom-class')
  })

  it('renders nav attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierLinks links={links} aria-label="Important links" />
    )
    expect(queryByTestId('identifierLinks')).toHaveAttribute('aria-label')
  })
})
