import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { SignUpForm } from './SignUpForm'

describe('SignUpForm component', () => {
  const emptySubmit = (): void => {
    /* mock submit fn */
  }

  it('renders without errors', () => {
    const { queryByTestId } = render(
      <SignUpForm
        heading="Test form"
        label="Test input"
        onSubmit={emptySubmit}
      />
    )

    expect(queryByTestId('form')).toBeInTheDocument()
  })

  it('renders expected form elements', () => {
    const { getByRole } = render(
      <SignUpForm
        heading="Test form"
        label="Test input"
        onSubmit={emptySubmit}
      />
    )
    expect(getByRole('heading')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('renders email input by default', () => {
    const { container } = render(
      <SignUpForm
        heading="Test form"
        label="Sign up phone number"
        onSubmit={emptySubmit}
      />
    )

    const input = container.querySelector('input')
    expect(input && input.type).toBe('email')
  })

  it('renders input with type prop', () => {
    const { container } = render(
      <SignUpForm
        heading="Test form"
        label="Phone number"
        type="number"
        onSubmit={emptySubmit}
      />
    )

    const input = container.querySelector('input')
    expect(input && input.type).toBe('number')
  })

  it('implements an onSubmit handler', () => {
    const mockSubmit = jest.fn()
    const { getByTestId } = render(
      <SignUpForm
        heading="Test form"
        label="Test Label"
        onSubmit={mockSubmit}
      />
    )

    fireEvent.submit(getByTestId('form'))
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
