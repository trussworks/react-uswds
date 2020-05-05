import React from 'react'
import { render } from '@testing-library/react'

import { NavDropDown } from './NavDropDown'

const testLabel = 'Nav Label'
const onToggle = (): void => {
  /* mock toggle fn */
}

describe('NavDropDown component', () => {
  it('renders without errors', () => {
    const { queryByText } = render(
      <NavDropDown
        label={testLabel}
        id="testId"
        isOpen={true}
        onToggle={onToggle}
      />
    )
    expect(queryByText('Nav Label')).toBeInTheDocument()
  })
})
