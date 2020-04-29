import React from 'react'
import { render } from '@testing-library/react'

import { Grid } from './Grid'

describe('Grid component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Grid />)
    expect(queryByTestId('grid')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<Grid>My Content</Grid>)
    expect(queryByText('My Content')).toBeInTheDocument()
  })

  it('implements the col prop', () => {
    const { getByTestId } = render(<Grid col={5}>My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-col-5')
  })

  it('implements the col auto prop', () => {
    const { getByTestId } = render(<Grid col="auto">My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-col-auto')
  })

  it('implements the col fill prop', () => {
    const { getByTestId } = render(<Grid col="fill">My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-col-fill')
  })

  it('implements the offset prop', () => {
    const { getByTestId } = render(<Grid offset={4}>My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-offset-4')
  })

  it('implements the row prop', () => {
    const { getByTestId } = render(<Grid row>My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-row')
  })

  it('implements the gap prop', () => {
    const { getByTestId } = render(<Grid gap>My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-gap')
  })

  it('implements the gap size prop', () => {
    const { getByTestId } = render(<Grid gap="sm">My Content</Grid>)
    expect(getByTestId('grid')).toHaveClass('grid-gap-sm')
  })
})
