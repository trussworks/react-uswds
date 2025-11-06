import React from 'react'
import { render, within } from '@testing-library/react'
import { StepIndicatorStep } from '../StepIndicatorStep/StepIndicatorStep'
import { StepIndicator } from './StepIndicator'
import { HeadingLevel } from '../../../types/headingLevel'

const step1 = 'Step 1'
const step2 = 'Step 2'
const step3 = 'Step 3'

describe('StepIndicator component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without errors', () => {
    const { getByRole, queryByText, queryAllByText, getByTestId } = render(
      <StepIndicator headingLevel="h4">
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )

    const stepIndicator = getByTestId('step-indicator')

    expect(stepIndicator).toBeInTheDocument()
    expect(stepIndicator).toHaveClass('usa-step-indicator')
    expect(queryByText(step1)).toBeInTheDocument()
    expect(queryAllByText(step2)).toHaveLength(2)
    expect(queryByText(step3)).toBeInTheDocument()
    expect(getByRole('list')).toHaveClass('usa-step-indicator__segments')
    const stepSrOnly = within(stepIndicator).queryByText('Step')
    expect(stepSrOnly).toHaveClass('usa-sr-only')
    const totalSteps = queryByText(`of 3`)
    expect(totalSteps).toBeInTheDocument()
    expect(totalSteps).toHaveClass('usa-step-indicator__total-steps')
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

  describe('with custom heading levels', () => {
    const scenarios: [HeadingLevel, number][] = [
      ['h1', 1],
      ['h2', 2],
      ['h3', 3],
      ['h4', 4],
      ['h5', 5],
      ['h6', 6],
    ]
    it.each(scenarios)(
      'can render with headingLevel %s',
      (headingLevel, expectedLevel) => {
        const { getByRole } = render(
          <StepIndicator headingLevel={headingLevel}>
            <StepIndicatorStep label={step1} status="complete" />
            <StepIndicatorStep label={step2} status="current" />
            <StepIndicatorStep label={step3} status="incomplete" />
          </StepIndicator>
        )
        expect(
          getByRole('heading', { level: expectedLevel })
        ).toBeInTheDocument()
      }
    )
  })

  it('allows props to be passed through to the heading element', () => {
    const { queryByRole, queryByTestId } = render(
      <StepIndicator
        headingLevel="h4"
        headingProps={{ id: 'my-id', className: 'my-custom-className' }}>
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

  it("renders properly with translatable 'of' string", () => {
    const ofText = 'de'
    const { queryByText } = render(
      <StepIndicator headingLevel="h4" ofText={ofText}>
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )
    const totalSteps = queryByText(`${ofText} 3`)
    expect(totalSteps).toBeInTheDocument()
    expect(totalSteps).toHaveClass('usa-step-indicator__total-steps')
  })

  it("renders properly with translatable 'step' string", () => {
    const stepText = 'Paso'
    const { getByTestId } = render(
      <StepIndicator headingLevel="h4" stepText={stepText}>
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )
    const stepIndicator = getByTestId('step-indicator')
    const stepSrOnly = within(stepIndicator).queryByText(stepText)
    expect(stepSrOnly).toHaveClass('usa-sr-only')
  })
  it('renders properly with translated statusText for screen reader', () => {
    const statusText = { complete: 'completado', incomplete: 'no completado' }

    const { getByTestId } = render(
      <StepIndicator headingLevel="h4" statusText={statusText}>
        <StepIndicatorStep label={step1} status="complete" />
        <StepIndicatorStep label={step2} status="current" />
        <StepIndicatorStep label={step3} status="incomplete" />
      </StepIndicator>
    )
    const stepIndicator = getByTestId('step-indicator')

    const completedStatusSrOnly = within(stepIndicator).queryByText(
      statusText.complete
    )
    expect(completedStatusSrOnly).toHaveClass('usa-sr-only')

    const incompleteStatusSrOnly = within(stepIndicator).queryByText(
      statusText.incomplete
    )
    expect(incompleteStatusSrOnly).toHaveClass('usa-sr-only')
  })
})
