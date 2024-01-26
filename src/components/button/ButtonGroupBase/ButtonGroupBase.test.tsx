import React from 'react'
import { render } from '@testing-library/react'

import ButtonGroupBase from './ButtonGroupBase'

describe('ButtonGroup component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<ButtonGroupBase />)
    expect(getByRole('list')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { getByText } = render(
      <ButtonGroupBase>My Text Input</ButtonGroupBase>
    )
    expect(getByText('My Text Input')).toBeInTheDocument()
  })

  it('displays with expected styles', () => {
    const { getByRole } = render(<ButtonGroupBase />)
    expect(getByRole('list')).toHaveClass('usa-button-group')
  })

  it('handles type prop  - default', () => {
    const { getByRole } = render(
      <ButtonGroupBase type="default">A child</ButtonGroupBase>
    )
    expect(getByRole('list')).not.toHaveClass('usa-button-group--segmented')
  })

  it('handles type prop  - segmented', () => {
    const { getByRole } = render(
      <ButtonGroupBase type="segmented">A child</ButtonGroupBase>
    )
    expect(getByRole('list')).toHaveClass('usa-button-group--segmented')
  })
})
