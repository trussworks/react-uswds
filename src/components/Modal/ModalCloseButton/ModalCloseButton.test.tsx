import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModalCloseButton } from './ModalCloseButton'

describe('ModalCloseButton component', () => {
  it('renders without errors', () => {
    render(<ModalCloseButton handleClose={jest.fn()} />)

    expect(screen.queryByRole('button')).toBeInTheDocument()
  })

  it('implements the close handler', () => {
    const mockHandleClose = jest.fn()

    render(<ModalCloseButton handleClose={mockHandleClose} />)

    userEvent.click(screen.getByRole('button'))
    expect(mockHandleClose).toHaveBeenCalled()
  })
})
