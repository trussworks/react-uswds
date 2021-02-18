import React from 'react'
import { render } from '@testing-library/react'
import { Step } from '../Step/Step'
import { StepIndicator } from '../StepIndicator/StepIndicator'

const step1 = 'Step 1'
const step2 = 'Step 2'
const step3 = 'Step 3'

describe('StepIndicator component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText, queryAllByText } = render(
      <StepIndicator>
        <Step label={step1} status="complete" />
        <Step label={step2} status="current" />
        <Step label={step3} status="incomplete" />
      </StepIndicator>
    )
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })
})
