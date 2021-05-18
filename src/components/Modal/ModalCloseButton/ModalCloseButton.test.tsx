import React from 'react'
import { render } from '@testing-library/react'

import { ModalCloseButton } from './ModalCloseButton'

describe('ModalCloseButton component', () => {
  it('renders without errors', () => {
    const { queryByRole } = render(
      <ModalCloseButton>close button</ModalCloseButton>
    )

    expect(queryByRole('button')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { queryByRole } = render(
      <ModalCloseButton className="custom-class">close button</ModalCloseButton>
    )

    expect(queryByRole('button')).toHaveClass(
      'usa-button usa-modal__close custom-class'
    )
  })
})
