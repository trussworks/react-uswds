import React from 'react'
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ComboBox } from './ComboBox'

import { fruits } from './fruits'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'

const fruitOptions = Object.entries(fruits).map(([value, key]) => ({
  id: value,
  label: key,
}))

describe('ComboBox component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )
    expect(getByTestId('combo-box')).toBeInTheDocument()
  })

  it('loads with default value if included', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
        defaultValue="apple"
      />
    )
    expect(getByTestId('combo-box-input')).toHaveValue('Apple')
    expect(getByTestId('combo-box-clear-button')).toBeVisible()
  })

  it('shows input on load', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )
    expect(getByTestId('combo-box-input')).toBeVisible()
  })

  it('hides options list on load', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('initalizes with custom selectProps', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
        selectProps={{ required: true, role: 'testing' }}
      />
    )

    expect(getByTestId('combo-box-select')).toHaveAttribute('required')
    expect(getByTestId('combo-box-select')).toHaveAttribute('role', 'testing')
  })

  it('initalizes with custom inputProps', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
        inputProps={{ required: true, role: 'testing' }}
      />
    )

    expect(getByTestId('combo-box-input')).toHaveAttribute('required')
    expect(getByTestId('combo-box-input')).toHaveAttribute('role', 'testing')
  })

  it('can be disabled (both select and input)', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
        disabled={true}
      />
    )

    expect(getByTestId('combo-box-input')).toBeDisabled()
    expect(getByTestId('combo-box-select')).toBeDisabled()
  })

  it('should show a clear button when the input has a selected value present', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    userEvent.type(getByTestId('combo-box-toggle'), 'app')

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const firstItem = getByTestId('combo-box-option-list').firstChild!
    fireEvent.click(firstItem)

    expect(getByTestId('combo-box-clear-button')).toBeVisible()
  })

  it('should clear the input when the clear button is clicked', () => {
    const setFieldValue = jest.fn()
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        defaultValue="apple"
        setFieldValue={setFieldValue}
      />
    )

    fireEvent.click(getByTestId('combo-box-clear-button'))

    expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
    expect(getByTestId('combo-box-input')).toHaveValue('')
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()

    expect(setFieldValue).toHaveBeenCalledWith('favorite-fruit', undefined)
  })

  describe('filtering', () => {
    it('shows that there are no results when there is no match', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zz')

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).not.toHaveFocus()
      expect(firstItem).not.toHaveAttribute('tabindex', '0')
      expect(firstItem).toHaveTextContent('No results found')
    })

    it('filters the list after a character is typed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: 'a' } })

      expect(getByTestId('combo-box-option-list').children.length).toEqual(43)
    })

    it('clears input when there is no match and enter is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })
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

    // TODO fix
    // expect(getByTestId('combo-box-input')).not.toHaveFocus()

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

  it('resets input value when an incomplete item is remaining on blur', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        setFieldValue={jest.fn()}
      />
    )

    fireEvent.focus(getByTestId('combo-box-input'))
    fireEvent.change(getByTestId('combo-box-input'), { target: { value: 'a' } })
    fireEvent.blur(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveValue('')
  })

  describe('keyboard actions', () => {
    it('focuses the first filtered option with tab', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveFocus()
      expect(firstItem).toHaveAttribute('tabindex', '0')
    })

    it('selects the focused option with tab', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveFocus()
      expect(firstItem).toHaveAttribute('tabindex', '0')
    })

    it.todo('selects the focused option with enter keypress')

    it.todo('focuses the next option when down arrow is pressed')
    it.todo('focuses the previous option when up arrow is pressed')
    it.todo(
      'does not change focus last option is focused and down arrow is pressed.'
    )

    it('selects an item by clicking on an option', () => {
      const setFieldValue = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={setFieldValue}
        />
      )

      fireEvent.click(getByTestId('combo-box-toggle'))

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const firstItem = getByTestId('combo-box-option-list').firstChild!
      fireEvent.click(firstItem)

      expect(setFieldValue).toHaveBeenCalledWith(
        'favorite-fruit',
        fruitOptions[0].id
      )
    })

    it('deselects option when pressing delete inside input', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue={'avocado'}
          setFieldValue={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, '{backspace}')

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)
    })
  })

  describe('accessibility', () => {
    it.skip('adds aria attributes to options', () => {
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

    it('allows the assistive hint to be customized', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          setFieldValue={jest.fn()}
          assistiveHint="Customized assistive hint"
        />
      )

      const node = getByTestId('combo-box-assistive-hint')
      expect(node).toHaveTextContent('Customized assistive hint')
    })
  })
})
