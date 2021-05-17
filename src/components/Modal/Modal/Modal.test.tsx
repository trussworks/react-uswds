import React from 'react'

import { Modal } from './Modal'

import { render } from '@testing-library/react'

describe('Modal component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<Modal>some children</Modal>)

    expect(getByTestId('modal')).toBeInTheDocument()
  })

  it('renders large modal when passed isLarge', () => {
    const { getByTestId } = render(<Modal isLarge>some children</Modal>)

    expect(getByTestId('modal')).toHaveClass('usa-modal--lg')
  })

  it('accepts attributes passed in through props', () => {
    const { getByTestId } = render(
      <Modal aria-label="aria-label-modal">some children</Modal>
    )

    expect(getByTestId('modal')).toHaveAttribute(
      'aria-label',
      'aria-label-modal'
    )
  })

  it('accepts a custom className', () => {
    const { getByTestId } = render(
      <Modal className="custom-class">some children</Modal>
    )

    expect(getByTestId('modal')).toHaveClass('usa-modal custom-class')
  })
})
