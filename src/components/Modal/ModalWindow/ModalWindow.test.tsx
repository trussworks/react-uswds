import React from 'react'

import { ModalWindow } from './ModalWindow'

import { render, screen } from '@testing-library/react'

describe('Modal component', () => {
  it('renders without errors', () => {
    render(<ModalWindow>some children</ModalWindow>)
    expect(screen.queryByTestId('modal')).toBeInTheDocument()
    expect(screen.queryByText('some children')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).toBeInTheDocument()
  })

  it('renders large modal when passed isLarge', () => {
    render(<ModalWindow isLarge>some children</ModalWindow>)
    expect(screen.getByTestId('modal')).toHaveClass('usa-modal--lg')
  })

  it('accepts attributes passed in through props', () => {
    render(
      <ModalWindow aria-label="aria-label-modal">some children</ModalWindow>
    )

    expect(screen.getByTestId('modal')).toHaveAttribute(
      'aria-label',
      'aria-label-modal'
    )
  })

  it('accepts a custom className', () => {
    render(<ModalWindow className="custom-class">some children</ModalWindow>)

    expect(screen.getByTestId('modal')).toHaveClass('usa-modal custom-class')
  })

  it('does not render a close button if forceAction is true', () => {
    render(<ModalWindow forceAction>some children</ModalWindow>)
    expect(
      screen.queryByRole('button', { name: 'Close this window' })
    ).not.toBeInTheDocument()
  })
})
