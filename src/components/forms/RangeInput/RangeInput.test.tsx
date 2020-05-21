import React from 'react'
import { render, queryByText } from '@testing-library/react'

import { RangeInput } from './RangeInput'

describe('RangeInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <RangeInput className="additional-class" />
    )
    const rangeElement = queryByTestId('range')

    expect(rangeElement).toBeInTheDocument()
    expect(rangeElement).toHaveAttribute('id', 'range-slider')
    expect(rangeElement).toHaveAttribute('name', 'range')
    expect(rangeElement).toHaveClass('usa-range')
    expect(rangeElement).toHaveClass('additional-class')
  })

  it('renders with Label', () => {
    const { queryByLabelText } = render(
      <RangeInput id="range-input" name="range" label="Range Label" />
    )
    expect(queryByLabelText('Range Label')).toBeInTheDocument()
  })

  it('renders Label with hint', () => {
    const { queryByLabelText } = render(
      <RangeInput label="Range Label" hint="(hint text)" />
    )
    expect(queryByLabelText('Range Label(hint text)')).toBeInTheDocument()
  })

  it('renders with custom range values', () => {
    const { queryByTestId } = render(
      <RangeInput
        label="minutes"
        min={0}
        max={60}
        step={15}
        defaultValue={45}
      />
    )
    expect(queryByTestId('range')).toHaveAttribute('min', '0')
    expect(queryByTestId('range')).toHaveAttribute('max', '60')
    expect(queryByTestId('range')).toHaveAttribute('step', '15')
    expect(queryByTestId('range')).toHaveAttribute('value', '45')
  })

  it('renders with any step attribute', () => {
    const { queryByTestId } = render(
      <RangeInput min={0} max={60} step="any" defaultValue={45} />
    )
    expect(queryByTestId('range')).toHaveAttribute('min', '0')
    expect(queryByTestId('range')).toHaveAttribute('max', '60')
    expect(queryByTestId('range')).toHaveAttribute('step', 'any')
    expect(queryByTestId('range')).toHaveAttribute('value', '45')
  })
})
