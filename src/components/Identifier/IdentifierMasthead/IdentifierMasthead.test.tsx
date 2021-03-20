import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierMasthead } from './IdentifierMasthead'

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierMasthead />)
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })

  it('renders section attributes passed in by props', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead aria-label="custom aria-label value" />
    )
    expect(queryByTestId('identifierMasthead')).toHaveAttribute(
      'aria-label',
      'custom aria-label value'
    )
  })

  it('renders with a custom className passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead className="usa-identifier__custom-class-name" />
    )
    expect(queryByTestId('identifierMasthead')).toHaveClass(
      'usa-identifier__section usa-identifier__section--masthead usa-identifier__custom-class-name'
    )
  })

  // renders with a logo passed in // use snapshot?
  // renders in spanish with a logo and spanish passed in as props // use snapshot?
  // renders with multiple custom logos passed in // use snapshot?
  // renders in spanish  with multiple custom logos and spanish passed in as props // use snapshot?
  // renders without any logos
  // renders in spanish without any logos
})
