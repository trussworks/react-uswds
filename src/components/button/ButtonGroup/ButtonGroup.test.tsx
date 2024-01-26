import React from 'react'
import { render } from '@testing-library/react'

import ButtonGroup from './ButtonGroup'

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
