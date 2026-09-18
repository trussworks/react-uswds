import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { RangeSlider } from './RangeSlider'

describe('RangeSlider component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <RangeSlider
        id="range-slider-id"
        name="rangeName"
        className="additional-class"
        wrapperClassName="additional-wrapper-class"
      />
    )
    const rangeElement = queryByTestId('range')
    expect(rangeElement).toBeInTheDocument()
    expect(rangeElement).toHaveAttribute('id', 'range-slider-id')
    expect(rangeElement).toHaveAttribute('name', 'rangeName')
    expect(rangeElement).toHaveClass('usa-range', 'additional-class')

    const wrapper = queryByTestId('range-wrapper')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass(
      'usa-range__wrapper',
      'additional-wrapper-class'
    )
  })

  it('renders with default hint', () => {
    const { queryByTestId, queryByText } = render(
      <RangeSlider id="range-slider-id" name="rangeName" />
    )

    const hint = queryByText('Move the slider to change the value')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveClass('usa-hint')
    expect(hint).toHaveAttribute('id', 'range-slider-id-hint')
    expect(hint?.nextElementSibling).toBe(queryByTestId('range-wrapper'))
    expect(queryByTestId('range')).toHaveAttribute(
      'aria-describedby',
      'range-slider-id-hint'
    )
  })

  it('renders with custom hint', () => {
    const { getByText, queryByText } = render(
      <RangeSlider
        id="range-slider-id"
        name="rangeName"
        hint={<a href="#top">Drag to adjust or use arrow keys</a>}
      />
    )

    expect(
      queryByText('Move the slider to change the value')
    ).not.toBeInTheDocument()

    const hint = getByText('Drag to adjust or use arrow keys')
    expect(hint.parentElement).toHaveClass('usa-hint')
    expect(hint.parentElement).toHaveAttribute('id', 'range-slider-id-hint')
  })

  it('renders without a hint', () => {
    const { queryByTestId, queryByText } = render(
      <RangeSlider id="range-slider-id" name="rangeName" hint={null} />
    )

    expect(
      queryByText('Move the slider to change the value')
    ).not.toBeInTheDocument()
    expect(queryByTestId('range')).not.toHaveAttribute('aria-describedby')
  })

  it('combines aria-describedby with the hint id', () => {
    const { queryByTestId } = render(
      <RangeSlider
        id="range-slider-id"
        name="rangeName"
        aria-describedby="range-slider-id-error"
      />
    )

    expect(queryByTestId('range')).toHaveAttribute(
      'aria-describedby',
      'range-slider-id-hint range-slider-id-error'
    )
  })

  it('sets aria-describedby when no hint exists', () => {
    const { queryByTestId } = render(
      <RangeSlider
        id="range-slider-id"
        name="rangeName"
        hint={null}
        aria-describedby="range-slider-id-error"
      />
    )

    expect(queryByTestId('range')).toHaveAttribute(
      'aria-describedby',
      'range-slider-id-error'
    )
  })

  it('renders with custom range values', () => {
    const min = -15
    const max = 60
    const { queryByTestId } = render(
      <RangeSlider
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
      <RangeSlider id="range-slider-id" name="rangeName" defaultValue={75} />
    )

    expect(queryByTestId('range')).toHaveAttribute('value', '75')
  })

  it('renders with step attribute set to value any', () => {
    const { queryByTestId } = render(
      <RangeSlider id="range-slider-id" name="rangeName" step="any" />
    )
    expect(queryByTestId('range')).toHaveAttribute('step', 'any')
  })

  it('renders with specified datalist attribute', () => {
    const { queryByTestId } = render(
      <RangeSlider
        id="range-slider-id"
        name="rangeName"
        list="some-datalist-id"
      />
    )
    expect(queryByTestId('range')).toHaveAttribute('list', 'some-datalist-id')
  })

  it('renders with attached ref', () => {
    const rangeRef = React.createRef<HTMLInputElement>()

    const { queryByTestId } = render(
      <RangeSlider id="range-slider-id" name="rangeName" inputRef={rangeRef} />
    )
    expect(queryByTestId('range')).toEqual(rangeRef.current)
  })

  it('renders with callout', () => {
    const max = 100
    const val = 50
    const prep = 'de'
    const unit = 'por ciento'
    const { queryByTestId } = render(
      <RangeSlider
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

  it('updates visual callout', () => {
    const { queryByTestId } = render(
      <RangeSlider id="range-slider-id" name="rangeName" defaultValue={75} />
    )
    expect(queryByTestId('range')).toHaveValue('75')
    expect(queryByTestId('range-visual')).toHaveTextContent('75')

    const input = queryByTestId('range')
    expect(input).toBeInTheDocument()

    fireEvent.change(input as HTMLInputElement, {
      target: { value: '80' },
    })
    expect(queryByTestId('range')).toHaveValue('80')
    expect(queryByTestId('range-visual')).toHaveTextContent('80')
  })
})
