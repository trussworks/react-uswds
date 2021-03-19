import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { IdentifierGov } from './IdentifierGov'

describe('IdentifierGov component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierGov />)
    const identifierGov = queryByTestId('identifierGov')
    expect(identifierGov).toBeInTheDocument()
    expect(identifierGov).toHaveClass(
      'usa-identifier__section usa-identifier__section--usagov'
    )
    expect(queryByTestId('identifierGov-description')).toHaveClass(
      'usa-identifier__usagov-description'
    )
    expect(queryByTestId('identifierGov-link')).toHaveClass('usa-link')
  })

  it('renders section attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierGov aria-label="test aria-label value" />
    )
    expect(queryByTestId('identifierGov')).toHaveAttribute(
      'aria-label',
      'test aria-label value'
    )
  })

  it('renders with a custom className passed in', () => {
    const { queryByTestId } = render(
      <IdentifierGov className="usa-identifier__custom-class-name" />
    )
    expect(queryByTestId('identifierGov')).toHaveClass(
      'usa-identifier__section usa-identifier__section--usagov usa-identifier__custom-class-name'
    )
  })

  it('renders consistently in English (default) when not passed a language prop', () => {
    const tree = renderer.create(<IdentifierGov />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders consistently in Spanish when passed Spanish for language prop', () => {
    const tree = renderer.create(<IdentifierGov language="spanish" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
