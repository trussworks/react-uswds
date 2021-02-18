import React from 'react'
import { render } from '@testing-library/react'
import { Step } from '../Step/Step'

describe('Step component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <Step label="Test Step" status="incomplete" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment')
  })
})
