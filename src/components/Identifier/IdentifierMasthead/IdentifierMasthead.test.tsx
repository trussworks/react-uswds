import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { IdentifierMasthead } from './IdentifierMasthead'

const testProps = {
  plaintextDomain: 'aGovDomain.gov',
  parentAgencyUrl: 'https://www.parentAgencyExampleUrl.gov/',
  parentAgencyName: 'Test Parent Agency Name',
}

describe('IdentifierMasthead component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierMasthead {...testProps} />)
    expect(queryByTestId('identifierMasthead')).toBeInTheDocument()
  })

  it('renders section attributes passed in by props', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead aria-label="custom aria-label value" {...testProps} />
    )
    expect(queryByTestId('identifierMasthead')).toHaveAttribute(
      'aria-label',
      'custom aria-label value'
    )
  })

  it('renders with a custom className passed in', () => {
    const { queryByTestId } = render(
      <IdentifierMasthead
        className="usa-identifier__custom-class-name"
        {...testProps}
      />
    )
    expect(queryByTestId('identifierMasthead')).toHaveClass(
      'usa-identifier__section usa-identifier__section--masthead usa-identifier__custom-class-name'
    )
  })

  it('renders consistently in Spanish when passed Spanish for language prop', () => {
    const tree = renderer
      .create(<IdentifierMasthead language="spanish" {...testProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // renders with a logo passed in // use snapshot?
  // renders in spanish with a logo and spanish passed in as props // use snapshot?
  // renders with multiple custom logos passed in // use snapshot?
  // renders in spanish  with multiple custom logos and spanish passed in as props // use snapshot?
  // renders without any logos
  // renders in spanish without any logos
})
