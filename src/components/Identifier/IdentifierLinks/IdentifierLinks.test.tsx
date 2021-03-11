import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'

const links = [
  <a key="identifierLinkGoogle" href="www.google.com">
    Google
  </a>,
  <a key="identifierLinkOrWhatever" href="www.google.com">
    Google again
  </a>,
]

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierLinks links={links} />)
    expect(queryByTestId('identifierLinks')).toBeInTheDocument()
  })

  it('renders nav attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierLinks links={links} aria-label="Important links" />
    )
    expect(queryByTestId('identifierLinks')).toHaveAttribute('aria-label')
  })
})
