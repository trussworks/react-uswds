import React from 'react'

import { Modal } from './Modal'

import { render, screen } from '@testing-library/react'

describe('Modal component', () => {
  it('renders without errors', () => {
    render(<Modal>some children</Modal>)
    expect(screen.queryByTestId('modal')).toBeInTheDocument()
    expect(screen.queryByText('some children')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).toBeInTheDocument()
  })

  it('renders large modal when passed isLarge', () => {
    render(<Modal isLarge>some children</Modal>)
    expect(screen.getByTestId('modal')).toHaveClass('usa-modal--lg')
  })

  it('accepts attributes passed in through props', () => {
    render(<Modal aria-label="aria-label-modal">some children</Modal>)

    expect(screen.getByTestId('modal')).toHaveAttribute(
      'aria-label',
      'aria-label-modal'
    )
  })

  it('accepts a custom className', () => {
    render(<Modal className="custom-class">some children</Modal>)

    expect(screen.getByTestId('modal')).toHaveClass('usa-modal custom-class')
  })

  it('does not render a close button if forceAction is true', () => {
    render(<Modal forceAction>some children</Modal>)
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).not.toBeInTheDocument()
  })
})
