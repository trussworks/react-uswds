import { render } from '@testing-library/react'

import { Label } from './Label'

describe('Label component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Label htmlFor="testInput">My Text Input</Label>
    )
    expect(queryByTestId('label')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <Label htmlFor="testInput">My Text Input</Label>
    )
    expect(queryByText('My Text Input')).toBeInTheDocument()
  })

  it('renders with hint', () => {
    const { queryByText } = render(
      <Label htmlFor="testInput" hint="a hint...">
        My Text Input
      </Label>
    )

    expect(queryByText('My Text Input')).toBeInTheDocument()

    const hint = queryByText('a hint...')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveClass('usa-hint')
  })

  it('renders with required marker', () => {
    const { queryByText } = render(
      <Label htmlFor="testInput" requiredMarker>
        My Text Input
      </Label>
    )

    expect(queryByText('My Text Input')).toBeInTheDocument()

    const marker = queryByText('*')
    expect(marker).toBeInTheDocument()
    expect(marker).toHaveClass('usa-hint--required')
  })
})
