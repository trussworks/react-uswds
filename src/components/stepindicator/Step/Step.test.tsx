import React from 'react'
import { render } from '@testing-library/react'
import { Step } from '../Step/Step'

describe('Step component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <Step label="Test Step" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment')
  })

  it('renders with incomplete status', () => {
    const { getByRole, queryByText } = render(
      <Step label="Test Step" status="incomplete" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment')
  })

  it('renders with current status', () => {
    const { getByRole, queryByText } = render(
      <Step label="Test Step" status="current" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment usa-step-indicator__segment--current')
  })

  it('renders with complete status', () => {
    const { getByRole, queryByText } = render(
      <Step label="Test Step" status="complete" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment usa-step-indicator__segment--complete')
  })
})
