import React from 'react'
import { render } from '@testing-library/react'

import { ButtonGroup } from './ButtonGroup'

describe('ButtonGroup component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(
      <ButtonGroup>
        <button>This is a button</button>
      </ButtonGroup>
    )
    expect(getByRole('list')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { getByText } = render(<ButtonGroup>My Text Input</ButtonGroup>)
    expect(getByText('My Text Input')).toBeInTheDocument()
  })

  it('displays with expected styles', () => {
    const { getByRole } = render(
      <ButtonGroup>
        <button>This is a button</button>
      </ButtonGroup>
    )
    expect(getByRole('list')).toHaveClass('usa-button-group')
  })

  it('handles type prop  - default', () => {
    const { getByRole } = render(
      <ButtonGroup type="default">A child</ButtonGroup>
    )
    expect(getByRole('list')).not.toHaveClass('usa-button-group--segmented')
  })

  it('handles type prop  - segmented', () => {
    const { getByRole } = render(
      <ButtonGroup type="segmented">A child</ButtonGroup>
    )
    expect(getByRole('list')).toHaveClass('usa-button-group--segmented')
  })

  it('displays list elements with expected styles', () => {
    const { getByRole } = render(<ButtonGroup>A child</ButtonGroup>)
    expect(getByRole('listitem')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-button-group__item')
  })

  it('renders a list item wrapping each child', () => {
    const { getAllByRole } = render(
      <ButtonGroup>
        <p>first child</p>
        <p>second child</p>
      </ButtonGroup>
    )
    const listItems = getAllByRole('listitem')
    expect(listItems[0]).toHaveTextContent('first child')
    expect(listItems[1]).toHaveTextContent('second child')
    expect(listItems.length).toBe(2)
  })
})
