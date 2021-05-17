import React from 'react'
import { render } from '@testing-library/react'

import { ModalDescription } from './ModalDescription'

describe('ModalDescription component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<ModalDescription />)

    expect(queryByTestId('modalDescription')).toBeInTheDocument()
  })
})
