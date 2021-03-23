import React from 'react'
import { render } from '@testing-library/react'

import { IdentifierLinks } from './IdentifierLinks'
import { Link } from '../../Link/Link'
import { IdentifierLink } from '../IdentifierLink/IdentifierLink'

const testPageName = 'Test Page'

describe('IdentifierLinks component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <IdentifierLinks>{testPageName}</IdentifierLinks>
    )
    expect(queryByText(testPageName)).toBeInTheDocument()
  })

  // it('renders custom styles', () => {
  //   const { container } = render(
  //     <IdentifierLinks className="custom-class" links={links} />
  //   )
  //   expect(
  //     container.querySelector('.usa-identifier__section--required-links')
  //   ).toHaveClass('custom-class')
  // })

  // it('renders nav attributes passed in through props', () => {
  //   const { queryByTestId } = render(
  //     <IdentifierLinks links={links} aria-label="Important links" />
  //   )
  //   expect(queryByTestId('identifierLinks')).toHaveAttribute('aria-label')
  // })
})
