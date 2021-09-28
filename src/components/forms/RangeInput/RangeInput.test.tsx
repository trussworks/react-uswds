import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

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
      String(min + (max - min) / 2)
    )
    expect(rangeElement).toHaveAttribute('step', '15')
  })

  it('renders with default value', () => {
    const { queryByTestId } = render(
      <RangeInput id="range-slider-id" name="rangeName" defaultValue={75} />
    )

    expect(queryByTestId('range')).toHaveAttribute('aria-valuenow', '75')
  })

  it('renders with custom aria values and updates aria-valuenow on keyboard actions', () => {
    render(
      <RangeInput
        id="range-slider-id"
        name="rangeName"
        aria-valuemin={12}
        aria-valuemax={58}
        aria-valuenow={23}
      />
    )
    const rangeInput = screen.getByTestId('range')
    expect(rangeInput).toHaveAttribute('aria-valuemin', '12')
    expect(rangeInput).toHaveAttribute('aria-valuemax', '58')
    expect(rangeInput).toHaveAttribute('aria-valuenow', '23')

    userEvent.type(rangeInput, '{arrowright}')

    waitFor(() => expect(rangeInput).toHaveAttribute('aria-valuenow', '24'))
    userEvent.type(rangeInput, '{arrowleft}')
    userEvent.type(rangeInput, '{arrowleft}')
    waitFor(() => expect(rangeInput).toHaveAttribute('aria-valuenow', '22'))
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
