import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComboBox } from './ComboBox'

import { fruits } from './fruits'

const fruitOptions = Object.entries(fruits).map(([value, key]) => ({
  value: value,
  label: key,
}))

describe('ComboBox component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )
    expect(queryByTestId('combo-box')).toBeInTheDocument()
  })

  it('displays options list when input is clicked', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    fireEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByTestId('combo-box-option-list')).toBeVisible()
    expect(getByTestId('combo-box-option-list').childElementCount).toEqual(
      fruitOptions.length
    )
  })

  it('displays options list when input is clicked twice', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    fireEvent.click(getByTestId('combo-box-input'))
    fireEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })

  it('hides options list when clicking away', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    fireEvent.click(getByTestId('combo-box-input'))
    fireEvent.blur(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('shows and hides options list when toggle is clicked', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    fireEvent.click(getByTestId('combo-box-toggle'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByTestId('combo-box-option-list')).toBeVisible()

    fireEvent.click(getByTestId('combo-box-toggle'))

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('selects an item by clicking on an option', () => {
    let key = ''
    let value = ''

    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={(newKey: string, newValue: string): void => {
          key = newKey
          value = newValue
        }}
      />
    )

    fireEvent.click(getByTestId('combo-box-toggle'))

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const firstItem = getByTestId('combo-box-option-list').firstChild!
    fireEvent.click(firstItem)

    expect(key).toEqual('favorite-fruit')
    expect(value).toEqual(fruitOptions[0].value)
  })

  describe('accessibility', () => {
    it('adds aria attributes to options', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      fireEvent.click(getByTestId('combo-box-input'))

      const list = getByTestId('combo-box-option-list')

      Object.values(list.children).forEach((node, index) => {
        if (index === 0) {
          expect(node).toHaveAttribute('tabindex', '0')
        } else {
          expect(node).toHaveAttribute('tabindex', '-1')
        }
        expect(node).toHaveAttribute('aria-selected', 'false')
        expect(node).toHaveAttribute('role', 'option')
      })
    })
  })
})
