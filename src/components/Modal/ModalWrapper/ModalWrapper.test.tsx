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
        handleClose={jest.fn()}>
        children
      </ModalWrapper>
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
