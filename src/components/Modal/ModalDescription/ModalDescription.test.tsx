import React from 'react'
import { render } from '@testing-library/react'

import { ModalDescription } from './ModalDescription'

describe('ModalDescription component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ModalDescription>
        You have unsaved changes that will be lost.
      </ModalDescription>
    )

    expect(queryByTestId('modalDescription')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { queryByTestId } = render(
      <ModalDescription className="custom-class">
        You have unsaved changes that will be lost.
      </ModalDescription>
    )

    expect(queryByTestId('modalDescription')).toHaveClass('custom-class')
  })
})
