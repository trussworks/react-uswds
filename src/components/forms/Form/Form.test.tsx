import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Form } from './Form'

describe('Form component', () => {
  it('renders without errors', () => {
    const mockSubmit = jest.fn()
    const { queryByTestId } = render(<Form onSubmit={mockSubmit}>My Form</Form>)
    expect(queryByTestId('form')).toBeInTheDocument()
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(<Form onSubmit={mockSubmit}>My Form</Form>)

    fireEvent.submit(getByTestId('form'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
