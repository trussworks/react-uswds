import { render } from '@testing-library/react'

vi.mock('../../../deprecation')
import { Fieldset } from './Fieldset'

describe('Fieldset component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Fieldset>My Fieldset</Fieldset>)
    expect(queryByTestId('fieldset')).toBeInTheDocument()
  })

  it('renders its children', () => {
    const { queryByText } = render(<Fieldset>My Fieldset</Fieldset>)
    expect(queryByText('My Fieldset')).toBeInTheDocument()
  })

  it('accepts fieldset intrinsic props', () => {
    const { queryByText } = render(
      <Fieldset aria-live="polite">My Fieldset</Fieldset>
    )

    const myFieldset = queryByText('My Fieldset')

    expect(myFieldset).toBeInTheDocument()
    expect(myFieldset).toHaveAttribute('aria-live', 'polite')
  })

  it('renders with required marker', () => {
    const { queryByText } = render(
      <Fieldset legend="Historical figures 1" requiredMarker>
        My Fieldset
      </Fieldset>
    )
    const marker = queryByText('*')
    expect(marker).toBeInTheDocument()
    expect(marker).toHaveClass('usa-hint--required')
  })

  describe('renders uswds classes', () => {
    it('renders legend with class usa-legend by default', () => {
      const { queryByTestId, getByText } = render(
        <Fieldset legend="Legend">My Fieldset</Fieldset>
      )
      expect(queryByTestId('fieldset')).toBeInTheDocument()
      expect(getByText('Legend')).toHaveClass('usa-legend')
    })

    it('renders legend with class usa-legend--large when specified', () => {
      const { queryByTestId, getByText } = render(
        <Fieldset legend="Legend" legendStyle="large">
          My Fieldset
        </Fieldset>
      )
      expect(queryByTestId('fieldset')).toBeInTheDocument()
      expect(getByText('Legend')).toHaveClass('usa-legend--large')
    })

    it('renders legend with class usa-sr-only when specified', () => {
      const { queryByTestId, getByText } = render(
        <Fieldset legend="Legend" legendStyle="srOnly">
          My Fieldset
        </Fieldset>
      )
      expect(queryByTestId('fieldset')).toBeInTheDocument()
      expect(getByText('Legend')).toHaveClass('usa-sr-only')
    })
  })
})
