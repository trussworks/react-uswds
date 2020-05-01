import React from 'react'
import { render } from '@testing-library/react'

import { ExtendedHeader } from './ExtendedHeader'

describe('ExtendedHeader component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ExtendedHeader>My Extended Header</ExtendedHeader>
    )
    expect(queryByTestId('header')).toBeInTheDocument()
  })
})
