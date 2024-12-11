import { render } from '@testing-library/react'
import { StepIndicatorStep } from './StepIndicatorStep'

describe('Step component', () => {
  it('renders without errors', () => {
    const { getByRole, queryByText } = render(
      <StepIndicatorStep label="Test Step" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment')
  })

  it('renders with incomplete status', () => {
    const { getByRole, queryByText, queryByTestId } = render(
      <StepIndicatorStep label="Test Step" status="incomplete" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(queryByTestId('srStatusText')).toHaveClass('usa-sr-only')
    expect(queryByTestId('srStatusText')).toHaveTextContent('not completed')
    expect(getByRole('listitem')).toHaveClass('usa-step-indicator__segment')
  })

  it('renders incomplete status with alternative language in screen reader element', () => {
    const { queryByTestId } = render(
      <StepIndicatorStep
        label="Test Step"
        status="incomplete"
        statusText={{ complete: 'completado', incomplete: 'no completado' }}
      />
    )
    expect(queryByTestId('srStatusText')).toHaveTextContent('no completado')
  })

  it('renders with current status', () => {
    const { getByRole, queryByText } = render(
      <StepIndicatorStep label="Test Step" status="current" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(getByRole('listitem')).toHaveClass(
      'usa-step-indicator__segment usa-step-indicator__segment--current'
    )
  })

  it('renders with complete status', () => {
    const { getByRole, queryByText, queryByTestId } = render(
      <StepIndicatorStep label="Test Step" status="complete" />
    )
    expect(queryByText('Test Step')).toBeInTheDocument()
    expect(queryByTestId('srStatusText')).toHaveClass('usa-sr-only')
    expect(queryByTestId('srStatusText')).toHaveTextContent('completed')
    expect(getByRole('listitem')).toHaveClass(
      'usa-step-indicator__segment usa-step-indicator__segment--complete'
    )
  })

  it('renders complete status with alternative language in screen reader element', () => {
    const { queryByTestId } = render(
      <StepIndicatorStep
        label="Test Step"
        status="complete"
        statusText={{ complete: 'completado', incomplete: 'no completado' }}
      />
    )
    expect(queryByTestId('srStatusText')).toHaveTextContent('completado')
  })
})
