import React from 'react'
import { render, screen } from '@testing-library/react'

import { ModalWrapper } from './ModalWrapper'

describe('ModalWrapper component', () => {
  it('renders without errors', () => {
    render(
      <ModalWrapper
        id="testModal"
        isVisible={false}
        forceAction={false}
        handleClose={vi.fn()}>
        children
      </ModalWrapper>
    )

    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument()
  })

  it('hides the dialog from screen readers when not visible', () => {
    render(
      <ModalWrapper
        id="testModal"
        isVisible={false}
        forceAction={false}
        handleClose={vi.fn()}>
        children
      </ModalWrapper>
    )

    const modalWrapper = screen.getByRole('dialog', { hidden: true })
    expect(modalWrapper).toHaveAttribute('aria-hidden', 'true')
    expect(modalWrapper).not.toHaveAttribute('aria-modal')
  })

  it('marks the dialog as a modal when visible', () => {
    render(
      <ModalWrapper
        id="testModal"
        isVisible={true}
        forceAction={false}
        handleClose={vi.fn()}>
        children
      </ModalWrapper>
    )

    const modalWrapper = screen.getByRole('dialog')
    expect(modalWrapper).not.toHaveAttribute('aria-hidden')
    expect(modalWrapper).toHaveAttribute('aria-modal', 'true')
  })
})
