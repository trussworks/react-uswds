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
    const min = -15
    const max = 60
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        min={min}
        max={max}
        step={15}
      />
    )

    const rangeElement = queryByTestId('range')

    expect(rangeElement).toHaveAttribute('min', '-15')
    expect(rangeElement).toHaveAttribute('max', '60')
    expect(rangeElement).toHaveAttribute('aria-valuemin', String(min))
    expect(rangeElement).toHaveAttribute('aria-valuemax', String(max))
    expect(rangeElement).toHaveAttribute(
      'aria-valuenow',
      String(min + max - max / 2)
    )
    expect(rangeElement).toHaveAttribute('step', '15')
  })

  it('renders with default value set', () => {
    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" defaultValue={75} />
    )

    expect(queryByTestId('range')).toHaveAttribute('aria-valuenow', '75')
  })

  it('renders with aria values set', () => {
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        ariaValueMin={12}
        ariaValueMax={58}
        ariaValueNow={23}
      />
    )

    expect(queryByTestId('range')).toHaveAttribute('aria-valuemin', '12')
    expect(queryByTestId('range')).toHaveAttribute('aria-valuemax', '58')
    expect(queryByTestId('range')).toHaveAttribute('aria-valuenow', '23')
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
