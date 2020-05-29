import React from 'react'
import { render } from '@testing-library/react'

import { Card } from './Card'

describe('Card component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Card layout="standardDefault" header="My Header" footer="My Footer" />
    )
    expect(queryByTestId('Card')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(
      <Card layout="standardDefault" header="" footer="">
        My Content
      </Card>
    )
    expect(queryByText('My Content')).toBeInTheDocument()
  })

  it('renders header prop', () => {
    const { queryByText } = render(
      <Card layout="standardDefault" header="My Header" footer="" />
    )
    expect(queryByText('My Header')).toBeInTheDocument()
  })

  it('renders optional media prop', () => {
    const { queryByText } = render(
      <Card layout="standardDefault" media="My Media" header="" footer="" />
    )
    expect(queryByText('My Media')).toBeInTheDocument()
  })

  it('renders footer prop', () => {
    const { queryByText } = render(
      <Card layout="standardDefault" header="" footer="My Footer" />
    )
    expect(queryByText('My Footer')).toBeInTheDocument()
  })

  it('renders the header first class when standardHeaderFirst is true', () => {
    const { getByTestId } = render(
      <Card layout="headerFirst" header="My Header" footer="My Footer" />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--header-first')
  })

  it('renders the flag class when layout is flag', () => {
    const { getByTestId } = render(
      <Card layout="flagDefault" header="My Header" footer="My Footer" />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--flag')
  })

  it('renders the media right class when layout is flag and mediaOrientation is right', () => {
    const { getByTestId } = render(
      <Card
        layout="flagMediaRight"
        media="My Media"
        header="My Header"
        footer="My Footer"
      />
    )
    expect(getByTestId('Card')).toHaveClass('usa-card--media-right')
  })
})
