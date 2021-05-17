import React from 'react'
import { render } from '@testing-library/react'

import { ModalHeading } from './ModalHeading'

describe('ModalHeading component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<ModalHeading />)

    expect(queryByTestId('modalHeading')).toBeInTheDocument()
  })
})
