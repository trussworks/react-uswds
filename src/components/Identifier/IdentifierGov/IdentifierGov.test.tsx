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
      <IdentifierGov aria-label="custom aria-label value" />
    )

    expect(queryByTestId('identifierGov')).toHaveAttribute(
      'aria-label',
      'custom aria-label value'
    )
  })

  it('renders consistently in Spanish', () => {
    const tree = renderer
      .create(
        <IdentifierGov>
          <div className="usa-identifier__usagov-description">
            ¿Necesita información y servicios del Gobierno?
          </div>
          &nbsp;
          <a href="https://www.usa.gov/espanol/" className="usa-link">
            Visite USAGov en Español
          </a>
        </IdentifierGov>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
