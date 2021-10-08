import React from 'react'

import { ModalWindow } from './ModalWindow'

import { render, screen } from '@testing-library/react'

describe('Modal component', () => {
  const testProps = {
    modalId: 'testModalId',
    handleClose: jest.fn(),
  }

  it('renders without errors', () => {
    render(<ModalWindow {...testProps}>some children</ModalWindow>)
    expect(screen.queryByTestId('modalWindow')).toBeInTheDocument()
    expect(screen.queryByText('some children')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).toBeInTheDocument()
  })

  it('renders large modal when passed isLarge', () => {
    render(
      <ModalWindow {...testProps} isLarge>
        some children
      </ModalWindow>
    )
    expect(screen.getByTestId('modalWindow')).toHaveClass('usa-modal--lg')
  })

  it('accepts attributes passed in through props', () => {
    render(
      <ModalWindow {...testProps} aria-label="aria-label-modal">
        some children
      </ModalWindow>
    )

    expect(screen.getByTestId('modalWindow')).toHaveAttribute(
      'aria-label',
      'aria-label-modal'
    )
  })

  it('accepts a custom className', () => {
    render(
      <ModalWindow {...testProps} className="custom-class">
        some children
      </ModalWindow>
    )

    expect(screen.getByTestId('modalWindow')).toHaveClass(
      'usa-modal custom-class'
    )
  })

  it('does not render a close button if forceAction is true', () => {
    render(
      <ModalWindow {...testProps} forceAction>
        some children
      </ModalWindow>
    )
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).not.toBeInTheDocument()
  })
})
