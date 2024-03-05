import React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { ModalCloseButton } from './ModalCloseButton'

describe('ModalCloseButton component', () => {
  it('renders without errors', () => {
    render(<ModalCloseButton handleClose={vi.fn()} />)

    expect(screen.queryByRole('button')).toBeInTheDocument()
  })

  it('implements the close handler', async () => {
    const mockHandleClose = vi.fn()

    render(<ModalCloseButton handleClose={mockHandleClose} />)

    await userEvent.click(screen.getByRole('button'))
    expect(mockHandleClose).toHaveBeenCalled()
  })
})
