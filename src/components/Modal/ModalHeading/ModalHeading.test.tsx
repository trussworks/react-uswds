import React from 'react'
import { render } from '@testing-library/react'

import { ModalHeading } from './ModalHeading'

describe('ModalHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId, queryByRole } = render(
      <ModalHeading type="h1">Are you sure you want to continue?</ModalHeading>
    )

    expect(queryByTestId('modalHeading')).toBeInTheDocument()
    expect(queryByRole('heading')).toBeInTheDocument()
  })

  // it('accepts a custom className')
})
