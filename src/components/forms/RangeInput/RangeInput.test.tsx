import React from 'react'
import { render } from '@testing-library/react'

import { RangeInput } from './RangeInput'

describe('RangeInput component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        className="additional-class"
      />
    )
    const rangeElement = queryByTestId('range')

    expect(rangeElement).toBeInTheDocument()
    expect(rangeElement).toHaveAttribute('id', 'range-slider-id')
    expect(rangeElement).toHaveAttribute('name', 'rangeName')
    expect(rangeElement).toHaveAttribute('aria-valuemin', '0')
    expect(rangeElement).toHaveAttribute('aria-valuemax', '100')
    expect(rangeElement).toHaveAttribute('aria-valuenow', '50')
    expect(rangeElement).toHaveClass('usa-range')
    expect(rangeElement).toHaveClass('additional-class')
  })

  it('renders with custom range values', () => {
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        min={-15}
        max={60}
        step={15}
        defaultValue={45}
      />
    )

    const rangeElement = queryByTestId('range')

    expect(rangeElement).toHaveAttribute('min', '-15')
    expect(rangeElement).toHaveAttribute('max', '60')
    expect(rangeElement).toHaveAttribute('aria-valuemin', '-15')
    expect(rangeElement).toHaveAttribute('aria-valuemax', '60')
    expect(rangeElement).toHaveAttribute('aria-valuenow', '45')
    expect(rangeElement).toHaveAttribute('step', '15')
    expect(rangeElement).toHaveAttribute('value', '45')
  })

  it('renders with step attribute set to value any', () => {
    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" step="any" />
    )
    expect(queryByTestId('range')).toHaveAttribute('step', 'any')
  })

  it('renders with specified datalist attribute', () => {
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        list="some-datalist-id"
      />
    )
    expect(queryByTestId('range')).toHaveAttribute('list', 'some-datalist-id')
  })

  it('renders with attached ref', () => {
    const rangeRef: React.RefObject<HTMLInputElement> = React.createRef()

    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" inputRef={rangeRef} />
    )
    expect(queryByTestId('range')).toEqual(rangeRef.current)
  })
})
