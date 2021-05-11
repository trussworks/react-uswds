import React from 'react'
import { render } from '@testing-library/react'

import { ModalNew } from './Modal'

describe('Modal component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<ModalNew>some children</ModalNew>)

    expect(getByTestId('modal')).toBeInTheDocument()
  })

  it('renders large model when passed isLarge', () => {
    const { getByTestId } = render(<ModalNew isLarge>some children</ModalNew>)

    expect(getByTestId('modal')).toHaveClass('usa-modal--lg')
  })

  it('accepts attributes passed in through props', () => {
    const { getByTestId } = render(
      <ModalNew aria-label="aria-label-model">some children</ModalNew>
    )

    expect(getByTestId('modal')).toHaveAttribute(
      'aria-label',
      'aria-label-model'
    )
  })

  it('accepts a custom className', () => {
    const { getByTestId } = render(
      <ModalNew className="custom-class">some children</ModalNew>
    )

    expect(getByTestId('modal')).toHaveClass('usa-modal custom-class')
  })
})
