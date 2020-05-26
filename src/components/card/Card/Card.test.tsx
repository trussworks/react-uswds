import React from 'react'
import { render } from '@testing-library/react'

import { Card } from './Card'

describe('CardGroup component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Card standardLayout="default" />)
    expect(queryByTestId('Card')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <Card standardLayout="default">My Content</Card>
    )
    expect(queryByText('My Content')).toBeInTheDocument()
  })

  it('renders optional header prop', () => {
    const { queryByText } = render(
      <Card standardLayout="default" header="My Header" />
    )
    expect(queryByText('My Header')).toBeInTheDocument()
  })

  it('renders optional media prop', () => {
    const { queryByText } = render(
      <Card standardLayout="default" media="My Media" />
    )
    expect(queryByText('My Media')).toBeInTheDocument()
  })

  it('renders optional footer prop', () => {
    const { queryByText } = render(
      <Card standardLayout="default" footer="My Footer" />
    )
    expect(queryByText('My Footer')).toBeInTheDocument()
  })

  it('renders the header first class when standardHeaderFirst is true', () => {
    const { getByTestId } = render(
      <Card standardLayout="headerFirst" header="My Header" />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--header-first')
  })

  it('renders the flag class when layout is flag', () => {
    const { getByTestId } = render(
      <Card flagLayout="default" header="My Header" />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--flag')
  })

  it('renders the media right class when layout is flag and mediaOrientation is right', () => {
    const { getByTestId } = render(
      <Card flagLayout="mediaOnRight" media="My Media" />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--media-right')
  })
})
