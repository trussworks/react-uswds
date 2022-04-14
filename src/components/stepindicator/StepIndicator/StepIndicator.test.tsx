import React from 'react'
import { render } from '@testing-library/react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator } from '../StepIndicator/StepIndicator'
jest.mock('../../../deprecation')
import { deprecationWarning } from '../../../deprecation'

const step1 = 'Step 1'
const step2 = 'Step 2'
const step3 = 'Step 3'

describe('StepIndicator component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByRole, queryByText, queryAllByText, queryByTestId } = render(
      <StepIndicator headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass('usa-step-indicator')
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })

  it('renders properly with no labels', () => {
    const { getByRole, queryByText, queryAllByText, queryByTestId } = render(
      <StepIndicator showLabels={false} headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass(
      'usa-step-indicator usa-step-indicator--no-labels'
    )
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })

  it('renders properly with counters', () => {
    const { getByRole, queryByText, queryAllByText, queryByTestId } = render(
      <StepIndicator counters="default" headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass(
      'usa-step-indicator usa-step-indicator--counters'
    )
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })

  it('renders properly with small counters', () => {
    const { getByRole, queryByText, queryAllByText, queryByTestId } = render(
      <StepIndicator counters="small" headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass(
      'usa-step-indicator usa-step-indicator--counters-sm'
    )
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })

  it('renders properly with centered labels', () => {
    const { getByRole, queryByText, queryAllByText, queryByTestId } = render(
      <StepIndicator centered headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass(
      'usa-step-indicator usa-step-indicator--center'
    )
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
  })

  it('renders properly with a passed in heading level', () => {
    const { getByRole, queryByTestId } = render(
      <StepIndicator headingLevel="h2">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders properly with a default heading level and warns deprecation', () => {
    const { getByRole, queryByTestId } = render(
      <StepIndicator>
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
    expect(deprecationWarning).toHaveBeenCalledTimes(1)
  })

  it('allows props to be passed through to the heading element', () => {
    const { queryByRole, queryByTestId } = render(
      <StepIndicator
        headingProps={{ id: 'my-id', className: 'my-custom-className' }}
      >
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = queryByTestId('step-indicator')
    const heading = queryByRole('heading', { level: 4 })

    expect(stepIndicator).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveAttribute('id', 'my-id')
    expect(heading).toHaveClass(
      'usa-step-indicator__heading my-custom-className'
    )
  })
})
