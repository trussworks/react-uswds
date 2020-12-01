import React from 'react'
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ComboBox } from './ComboBox'

import { fruits } from './fruits'

const fruitOptions = Object.entries(fruits).map(([value, key]) => ({
  value: value,
  label: key,
}))

describe('ComboBox component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
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
        onChange={jest.fn()}
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
        onChange={jest.fn()}
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
        onChange={jest.fn()}
      />
    )

    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('initializes with custom selectProps', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        selectProps={{ required: true, role: 'testing' }}
      />
    )

    expect(getByTestId('combo-box-select')).toHaveAttribute('required')
    expect(getByTestId('combo-box-select')).toHaveAttribute('role', 'testing')
  })

  it('initializes with custom inputProps', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
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
        onChange={jest.fn()}
        disabled={true}
      />
    )

    expect(getByTestId('combo-box-input')).toBeDisabled()
    expect(getByTestId('combo-box-select')).toBeDisabled()
  })

  it.todo(
    'scrolls options list to the very top when the menu opens if nothing is selected'
  )

  fdescribe('filtering', () => {
    it('shows all options on initial load without default value', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      fireEvent.focus(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('shows all options on initial load with a default value', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={jest.fn()}
        />
      )

      fireEvent.focus(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('filters the options list after a character is typed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: 'a' } })

      expect(getByTestId('combo-box-option-list').children.length).toEqual(43)
    })

    it('shows no results message when there is no match', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zz')

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).not.toHaveFocus()
      expect(firstItem).not.toHaveAttribute('tabindex', '0')
      expect(firstItem).toHaveTextContent('No results found')
    })
  })

  fdescribe('clear button', () => {
    it('is visible when input has content', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-toggle'), 'app')

      // We are sure the first child exists
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const firstItem = getByTestId('combo-box-option-list').firstChild!
      fireEvent.click(firstItem)

      expect(getByTestId('combo-box-clear-button')).toBeVisible()
    })

    it('resets the filter on click', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'b')
      userEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('calls onChange prop with undefined on click', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      fireEvent.click(getByTestId('combo-box-clear-button'))

      expect(onChange).toHaveBeenCalledWith(undefined)
    })

    it('clears the input on click', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'b')
      userEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')
    })

    it('works as expected when input is loaded with default value', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="apple"
          onChange={onChange}
        />
      )
      expect(getByTestId('combo-box-clear-button')).toBeVisible()

      fireEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')
      expect(onChange).toHaveBeenNthCalledWith(2, undefined)
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('remains focused on the input after click', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'b')
      expect(getByTestId('combo-box-input')).toHaveFocus()

      userEvent.click(getByTestId('combo-box-clear-button'))
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })
  })

  it('resets input value when an incomplete item is remaining on blur', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    fireEvent.focus(getByTestId('combo-box-input'))
    fireEvent.change(getByTestId('combo-box-input'), { target: { value: 'a' } })
    fireEvent.blur(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-input')).toHaveValue('')
  })

  describe('keyboard actions', () => {
    it('clears input when there is no match and enter is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })

    xit('clears filter when there is no match and enter is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })
    it('focuses the first filtered option with tab', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveFocus()
      expect(firstItem).toHaveAttribute('tabindex', '0')
    })

    it('focuses the first option with tab', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a{del}') // open menu
      userEvent.tab()

      expect(getByTestId('combo-box-option-apple')).toHaveFocus()
      expect(getByTestId('combo-box-option-apple')).toHaveAttribute(
        'tabindex',
        '0'
      )
    })

    it('selects the focused option with tab', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()
      userEvent.tab()

      expect(getByTestId('combo-box-input')).toHaveValue('Apple')
      expect(onChange).toHaveBeenCalledWith('favorite-fruit', 'apple')
    })

    it('selects the focused option with enter', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()
      userEvent.type(getByTestId('combo-box-option-apple'), '{enter}')

      expect(getByTestId('combo-box-input')).toHaveValue('Apple')
      expect(onChange).toHaveBeenCalledWith('apple')
    })

    it('focuses the next option when down arrow is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()
      fireEvent.keyDown(getByTestId('combo-box-option-apple'), {
        key: 'ArrowDown',
      })

      expect(getByTestId('combo-box-option-apricot')).toHaveFocus()
    })

    it('focuses the previous option when up arrow is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'a')
      userEvent.tab()
      fireEvent.keyDown(getByTestId('combo-box-option-apple'), {
        key: 'ArrowDown',
      })
      fireEvent.keyDown(getByTestId('combo-box-option-apricot'), {
        key: 'ArrowDown',
      })
      fireEvent.keyDown(getByTestId('combo-box-option-avocado'), {
        key: 'ArrowUp',
      })

      expect(getByTestId('combo-box-option-apricot')).toHaveFocus()
    })

    it('opens the menu when down arrow is pressed in the input', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      fireEvent.focus(getByTestId('combo-box-input'))
      fireEvent.keyDown(getByTestId('combo-box-input'), {
        key: 'ArrowDown',
      })

      expect(getByTestId('combo-box-option-list')).toBeVisible()
      expect(getByTestId('combo-box-option-apple')).toHaveFocus()
    })

    it('closes the menu when the first option is focused and arrow up is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      fireEvent.focus(getByTestId('combo-box-input'))
      fireEvent.keyDown(getByTestId('combo-box-input'), {
        key: 'ArrowDown',
      })
      fireEvent.keyDown(getByTestId('combo-box-option-apple'), {
        key: 'ArrowUp',
      })

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })

    it.todo(
      'does not change focus last option is focused and down arrow is pressed'
    )

    it.todo(
      'clicking on toggle and pressing tab twice focuses the selected option'
    )

    it.todo(
      'pressing tab in the input with a selected option focuses the clear button'
    )

    it('highlights the current value when opening the menu with a selected option', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
          defaultValue="avocado"
        />
      )

      userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-avocado')).toHaveAttribute(
        'aria-selected',
        'true'
      )
    })

    it.todo(
      'focuses the input when an option is focused and shift-tab is pressed'
    )
    it.todo(
      'focuses the next option when an option is selected and down arrow is pressed'
    )

    it.todo(
      'does not close menu when an option is selected and the first option is focused and up arrow is pressed'
    )

    it('deselects option when pressing delete inside input', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue={'avocado'}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, '{backspace}')

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)
    })
  })

  describe('mouse actions', () => {
    it('displays options list when input is clicked', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
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
          onChange={jest.fn()}
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
          onChange={jest.fn()}
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
          onChange={jest.fn()}
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
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      fireEvent.click(getByTestId('combo-box-toggle'))
      fireEvent.click(getByTestId('combo-box-option-apple'))

      expect(onChange).toHaveBeenCalledWith(
        'favorite-fruit',
        fruitOptions[0].value
      )
    })

    it.todo('focuses an option on hover')
  })

  describe('accessibility', () => {
    it.skip('adds aria attributes to options', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
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
          onChange={jest.fn()}
          assistiveHint="Customized assistive hint"
        />
      )

      const node = getByTestId('combo-box-assistive-hint')
      expect(node).toHaveTextContent('Customized assistive hint')
    })
  })
})
