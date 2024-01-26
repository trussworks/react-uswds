import React from 'react'
import { render } from '@testing-library/react'

import ButtonGroupItem from './ButtonGroupItem'

describe('ButtonGroup component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<ButtonGroupItem />)
    expect(getByRole('listitem')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { getByText } = render(
      <ButtonGroupItem>My Text Input</ButtonGroupItem>
    )
    expect(getByText('My Text Input')).toBeInTheDocument()
  })

  it('displays with expected styles', () => {
    const { getByRole } = render(<ButtonGroupItem>A child</ButtonGroupItem>)
    expect(getByRole('listitem')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-button-group__item')
  })
})
