import React from 'react'
import { render } from '@testing-library/react'

import { ModalWrapper } from './ModalWrapper'

describe('ModalWrapper component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <ModalWrapper isVisible>children</ModalWrapper>
    )

    expect(getByTestId('modalWrapper')).toBeInTheDocument()
  })
})
