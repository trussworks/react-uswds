import React from 'react'
import { render } from '@testing-library/react'

import { Collection } from './Collection'

describe('Collection component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <Collection>
        <div />
      </Collection>
    )
    expect(getByTestId('collection')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByTestId } = render(
      <Collection>
        <div data-testid="collection-child" />
      </Collection>
    )
    expect(getByTestId('collection-child')).toBeInTheDocument()
  })

  it('renders with condensed class name', () => {
    const { getByTestId } = render(
      <Collection condensed>
        <div />
      </Collection>
    )
    expect(getByTestId('collection')).toHaveClass('usa-collection--condensed')
  })
})
