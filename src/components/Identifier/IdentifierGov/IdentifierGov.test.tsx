import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { IdentifierGov } from './IdentifierGov'

describe('IdentifierGov component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<IdentifierGov />)
    expect(queryByTestId('identifierGov')).toBeInTheDocument()
  })

  it('renders section attributes passed in through props', () => {
    const { queryByTestId } = render(
      <IdentifierGov aria-label="U.S. government information and services" />
    )
    expect(queryByTestId('identifierGov')).toHaveAttribute('aria-label')
  })

  it('renders consistently in English (default) when not passed a language prop', () => {
    const tree = renderer.create(<IdentifierGov />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders consistently in Spanish when passed Spangish for language prop', () => {
    const tree = renderer.create(<IdentifierGov language="spanish" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
