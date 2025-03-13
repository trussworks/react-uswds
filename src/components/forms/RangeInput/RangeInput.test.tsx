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
    expect(rangeElement).toHaveAttribute('step', '15')
  })

  it('renders with default value', () => {
    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" defaultValue={75} />
    )

    expect(queryByTestId('range')).toHaveAttribute('value', '75')
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
    const rangeRef: React.RefObject<HTMLInputElement | null> = React.createRef()

    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" inputRef={rangeRef} />
    )
    expect(queryByTestId('range')).toEqual(rangeRef.current)
  })

  it('renders with callout', () => {
    const max = 100
    const val = 50
    const prep = 'de'
    const unit = 'por ciento'
    const { queryByTestId } = render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        defaultValue={val}
        max={max}
        textPreposition={prep}
        textUnit={unit}
      />
    )
    expect(queryByTestId('range')).toHaveAttribute(
      'aria-valuetext',
      '50 por ciento de 100'
    )
  })
})
