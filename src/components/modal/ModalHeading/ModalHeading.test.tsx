import React from 'react'
import { render, screen } from '@testing-library/react'

import { ModalHeading } from './ModalHeading'

describe('ModalHeading component', () => {
  it('renders without errors', () => {
    render(<ModalHeading>Are you sure you want to continue?</ModalHeading>)

    expect(screen.queryByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent(
      'Are you sure you want to continue?'
    )
  })
})
