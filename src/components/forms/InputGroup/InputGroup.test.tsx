import { render } from '@testing-library/react'

import { InputGroup } from './InputGroup'

describe('InputGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<InputGroup>My Input Group</InputGroup>)
    expect(queryByTestId('inputGroup')).toBeInTheDocument()
    expect(queryByTestId('inputGroup')).toHaveClass('usa-input-group')
  })

  it('renders its children', () => {
    const { queryByText } = render(<InputGroup>My Input Group</InputGroup>)
    expect(queryByText('My Input Group')).toBeInTheDocument()
  })

  it('adds the error class when error is true', () => {
    const { queryByTestId } = render(
      <InputGroup error>My Input Group</InputGroup>
    )
    expect(queryByTestId('inputGroup')).toHaveClass('usa-input-group--error')
  })

  it('adds the provided className', () => {
    const { queryByTestId } = render(
      <InputGroup className="my-class">My Input Group</InputGroup>
    )
    expect(queryByTestId('inputGroup')).toHaveClass('my-class')
  })
})
