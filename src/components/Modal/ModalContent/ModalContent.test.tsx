import React from 'react'
import { render } from '@testing-library/react'

import { ModalContent } from './ModalContent'

describe('ModalContent component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ModalContent>You have unsaved changes that will be lost.</ModalContent>
    )

    expect(queryByTestId('modalContent')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { queryByTestId } = render(
      <ModalContent className="custom-class">
        You have unsaved changes that will be lost.
      </ModalContent>
    )

    expect(queryByTestId('modalContent')).toHaveClass('custom-class')
  })
})
