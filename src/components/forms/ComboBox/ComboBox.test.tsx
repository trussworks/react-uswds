import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ComboBox } from './ComboBox'
import { TextInput } from '../TextInput/TextInput'
import { fruits } from './fruits'

/*
  Source of truth for combo box behavior is USWDS storybook examples and tests. For more:
  - https://designsystem.digital.gov/form-controls/03-combo-box/
  - https://github.com/uswds/uswds/tree/7a89611fe649650922e4d431b78c39fed6a867e1/spec/unit/combo-box
*/

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

  it('renders hidden select element on load', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        defaultValue="apple"
      />
    )
    const comboBoxSelect = getByTestId('combo-box-select')
    expect(comboBoxSelect).toBeInstanceOf(HTMLSelectElement)
    expect(comboBoxSelect).toHaveAttribute('aria-hidden', 'true')
    expect(comboBoxSelect).toHaveClass('usa-sr-only')
  })

  it('renders input element', () => {
    const { getByRole } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    const comboBox = getByRole('combobox')
    expect(comboBox).toBeInTheDocument()
    expect(comboBox).toBeInstanceOf(HTMLInputElement)
  })

  it('renders hidden options list on load', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )
    expect(getByTestId('combo-box-option-list')).toBeInstanceOf(
      HTMLUListElement
    )
    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('shows options list when input toggle clicked', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    userEvent.click(getByTestId('combo-box-toggle'))

    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })

  it('shows list when input is clicked', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    userEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })

  it('shows list when input is typed into', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    userEvent.type(getByTestId('combo-box-input'), 'b')

    expect(getByTestId('combo-box-option-list')).toBeVisible()
  })

  xit('highlights the first option when opening the menu, when no default value exists', () => {
    // TODO: 🐛 right now highlights nothing
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    userEvent.click(getByTestId('combo-box-input'))

    expect(getByTestId('combo-box-option-apple')).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('highlights the default value when opening the menu, when one exists', () => {
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

  it('can be disabled', () => {
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

  it('does not show the list when clicking the disabled component', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        disabled={true}
      />
    )
    userEvent.click(getByTestId('combo-box-toggle'))

    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('renders input with default value if passed in', () => {
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
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('renders select with custom props if passed in', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        selectProps={{ required: true, role: 'testing' }}
      />
    )
    const comboBoxSelect = getByTestId('combo-box-select')
    expect(comboBoxSelect).toHaveAttribute('required')
    expect(comboBoxSelect).toHaveAttribute('role', 'testing')
  })

  it('renders input with custom props if passed in', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        inputProps={{ required: true, role: 'testing' }}
      />
    )

    const comboBoxInput = getByTestId('combo-box-input')
    expect(comboBoxInput).toHaveAttribute('required')
    expect(comboBoxInput).toHaveAttribute('role', 'testing')
  })

  it('renders input with custom props if passed in', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
        ulProps={{ 'aria-labelledby': 'test-label-id' }}
      />
    )

    const comboBoxOptionList = getByTestId('combo-box-option-list')
    expect(comboBoxOptionList).toHaveAttribute(
      'aria-labelledby',
      'test-label-id'
    )
  })

  // TODO: ❓ Don't know how to test this
  it.todo(
    'scrolls options list to the very top when the menu opens if nothing is selected'
  )

  describe('filtering', () => {
    it('shows all options on initial load when no default value exists', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('shows all options on initial load when a default value exists', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={jest.fn()}
        />
      )

      userEvent.click(getByTestId('combo-box-input'))

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
      userEvent.type(input, 'a')

      expect(getByTestId('combo-box-option-list').children.length).toEqual(43)
    })

    it('persists filter options if dropdown is closed and open without selection', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, 'yu')
      userEvent.click(getByTestId('combo-box-toggle'))

      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)

      userEvent.click(getByTestId('combo-box-toggle'))
      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)
    })

    it('clears filter when item selected', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, 'yu')
      userEvent.click(getByTestId('combo-box-option-yuzu'))

      expect(getByTestId('combo-box-option-list').children.length).toEqual(
        fruitOptions.length
      )
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

    it('shows all results when typed value is cleared', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, 'apple')
      userEvent.clear(input)
      expect(getByTestId('combo-box-option-list').children.length).toEqual(
        fruitOptions.length
      )
    })
  })

  describe('clear button', () => {
    it('is visible when input has content', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'app')

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
      const comboBoxOptionList = getByTestId('combo-box-option-list')
      expect(comboBoxOptionList).not.toBeVisible()
      expect(comboBoxOptionList.children.length).toBe(fruitOptions.length)
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
      fireEvent.blur(getByTestId('combo-box-clear-button'))
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })

    it('focuses the input after clearing when the when FocusMode is None', () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={jest.fn()}
          />
        </>
      )

      userEvent.type(getByTestId('combo-box-input'), 'b')
      userEvent.click(getByTestId('outside'))
      userEvent.click(getByTestId('combo-box-clear-button'))
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })
  })

  it('clears input value and closes list when an incomplete item is remaining on blur', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={jest.fn()}
      />
    )

    userEvent.type(getByTestId('combo-box-input'), 'a')
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

      const comboBoxInput = getByTestId('combo-box-input')
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(comboBoxInput).toHaveValue('')
      expect(comboBoxInput).toHaveFocus()
    })

    it('clears filter when there is no match and enter is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')
      const comboBoxOptionList = getByTestId('combo-box-option-list')
      expect(comboBoxOptionList).not.toBeVisible()
      expect(comboBoxOptionList.children.length).toBe(fruitOptions.length)
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

      userEvent.click(getByTestId('combo-box-input')) // open menu
      userEvent.tab()

      const appleOption = getByTestId('combo-box-option-apple')
      expect(appleOption).toHaveFocus()
      expect(appleOption).toHaveAttribute('tabindex', '0')
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
      // focus mango
      userEvent.type(getByTestId('combo-box-input'), 'mang')
      userEvent.tab()

      // select mango
      userEvent.tab()

      expect(getByTestId('combo-box-input')).toHaveValue('Mango')
      expect(onChange).toHaveBeenLastCalledWith('mango')
    })

    it('switches focus when there are no filtered options', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.type(comboBoxInput, 'zzz')
      userEvent.tab()

      expect(comboBoxInput).not.toHaveFocus()
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

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.type(comboBoxInput, 'apri')
      userEvent.tab()
      userEvent.type(getByTestId('combo-box-option-apricot'), '{enter}')

      expect(comboBoxInput).toHaveValue('Apricot')
      expect(onChange).toHaveBeenLastCalledWith('apricot')
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

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.click(comboBoxInput)
      fireEvent.keyDown(comboBoxInput, {
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

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.click(comboBoxInput)
      fireEvent.keyDown(comboBoxInput, {
        key: 'ArrowDown',
      })
      fireEvent.keyDown(getByTestId('combo-box-option-apple'), {
        key: 'ArrowUp',
      })

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(comboBoxInput).toHaveFocus()
    })

    it('does not change focus when last option is focused and down arrow is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const yuzuOption = getByTestId('combo-box-option-yuzu')
      fireEvent.click(getByTestId('combo-box-input'))
      userEvent.hover(yuzuOption)
      fireEvent.keyDown(yuzuOption, {
        key: 'ArrowDown',
      })

      expect(yuzuOption).toHaveFocus()
    })

    it('pressing tab once in the input with a selected option focuses the clear button', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={jest.fn()}
        />
      )
      // first tab goes to input
      userEvent.tab()

      userEvent.tab()

      expect(getByTestId('combo-box-clear-button')).toHaveFocus()
    })

    it('pressing tab twice in an input with a default value, when options list is open, focuses the selected option', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={jest.fn()}
        />
      )
      userEvent.click(getByTestId('combo-box-input'))

      userEvent.tab()
      expect(getByTestId('combo-box-clear-button')).toHaveFocus()

      userEvent.tab()

      expect(getByTestId('combo-box-option-banana')).toHaveFocus()
    })

    it('focuses the next option when an option is selected and down arrow is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          defaultValue="mango"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      userEvent.click(getByTestId('combo-box-input'))
      fireEvent.keyDown(getByTestId('combo-box-option-mango'), {
        key: 'ArrowDown',
      })

      expect(getByTestId('combo-box-option-mangosteen')).toHaveFocus()
    })

    it('does not close menu when an option is selected and the first option is focused and up arrow is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          defaultValue="apricot"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      // Apple is the item at top of list
      const appleOption = getByTestId('combo-box-option-apple')
      userEvent.hover(appleOption)
      fireEvent.keyDown(appleOption, {
        key: 'ArrowUp',
      })

      expect(appleOption).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-expanded',
        'true'
      )
      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

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

    it('does not hijack focus while tabbing when another field has focus', () => {
      const { getByTestId } = render(
        <>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={jest.fn()}
          />
          <TextInput
            id="input-Text"
            name="input-Text"
            type="text"
            data-testid="input-Text"
          />
        </>
      )
      const comboBoxInput = getByTestId('combo-box-input')
      const textInput = getByTestId('input-Text')

      // Fill ComboBox
      userEvent.type(comboBoxInput, 'Apple{enter}')

      // Tab to next field (Text Input)
      userEvent.tab()

      // Fill text input
      userEvent.type(textInput, 'Test 123')

      expect(textInput).toHaveValue('Test 123')
    })

    it('clears out the input when options list is closed and no matching options is selected', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.type(comboBoxInput, 'a{enter}')
      expect(comboBoxInput).toHaveValue('')
    })

    it('selected option if the input matches 100% of the label characters (case insensitive)', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      userEvent.type(comboBoxInput, 'aPpLe{enter}')
      expect(comboBoxInput).toHaveValue('Apple')
    })

    xit('focuses the input when an option is focused and shift-tab is pressed', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )
      const input = getByTestId('combo-box-input')
      const apricotOption = getByTestId('combo-box-option-apricot')

      userEvent.tab()
      userEvent.hover(apricotOption)
      fireEvent.keyDown(apricotOption, {
        key: 'tab',
        keyCode: 9,
        shiftKey: true,
      })

      expect(input).toHaveFocus()
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
      const input = getByTestId('combo-box-input')
      const optionList = getByTestId('combo-box-option-list')

      fireEvent.click(input)

      expect(input).toHaveAttribute('aria-expanded', 'true')
      expect(optionList).toBeVisible()
      expect(optionList.childElementCount).toEqual(fruitOptions.length)
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

      userEvent.dblClick(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-expanded',
        'true'
      )
      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

    it('hides options list when clicking away and input has focus', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      fireEvent.click(input)
      fireEvent.blur(input)

      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
    })

    it('hides options list when clicking away and a specific option has focus', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      const blackberryOption = getByTestId('combo-box-option-blackberry')

      fireEvent.click(input)

      userEvent.hover(blackberryOption)
      fireEvent.blur(blackberryOption)

      expect(input).toHaveAttribute('aria-expanded', 'false')
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

      const input = getByTestId('combo-box-input')
      const optionList = getByTestId('combo-box-option-list')
      fireEvent.click(getByTestId('combo-box-toggle'))

      expect(input).toHaveAttribute('aria-expanded', 'true')
      expect(optionList).toBeVisible()

      fireEvent.click(getByTestId('combo-box-toggle'))

      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(optionList).not.toBeVisible()
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

      const input = getByTestId('combo-box-input')
      fireEvent.click(getByTestId('combo-box-toggle'))
      fireEvent.click(getByTestId('combo-box-option-apple'))

      expect(onChange).toHaveBeenLastCalledWith('apple')
      expect(input).toHaveDisplayValue('Apple')
      expect(input).toHaveValue('Apple')
    })

    it('persists input text when items list is blurred', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={onChange}
          />
        </>
      )

      const input = getByTestId('combo-box-input')
      userEvent.click(getByTestId('combo-box-toggle'))
      userEvent.click(getByTestId('combo-box-option-apple'))
      fireEvent.blur(input)

      expect(onChange).toHaveBeenLastCalledWith('apple')
      expect(input).toHaveDisplayValue('Apple')
      expect(input).toHaveValue('Apple')
    })

    it('persists input text if dropdown is closed and open without selection', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      const toggle = getByTestId('combo-box-toggle')
      userEvent.type(input, 'yu')

      userEvent.click(toggle)
      expect(input).toHaveValue('yu')

      userEvent.click(toggle)
      expect(input).toHaveValue('yu')
    })

    it('updates input with item selected on click', () => {
      const onChange = jest.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      const input = getByTestId('combo-box-input')
      userEvent.type(input, 'yu')
      fireEvent.click(getByTestId('combo-box-option-yuzu'))

      expect(input).toHaveValue('Yuzu')
      expect(onChange).toHaveBeenLastCalledWith('yuzu')
    })

    it('focuses an option on hover', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )

      const yuzuOption = getByTestId('combo-box-option-yuzu')
      const blackberryOption = getByTestId('combo-box-option-blackberry')

      userEvent.click(getByTestId('combo-box-toggle'))
      userEvent.hover(blackberryOption)

      expect(blackberryOption).toHaveClass(
        'usa-combo-box__list-option--focused'
      )

      userEvent.hover(yuzuOption)
      expect(blackberryOption).not.toHaveClass(
        'usa-combo-box__list-option--focused'
      )
      expect(yuzuOption).toHaveClass('usa-combo-box__list-option--focused')
    })

    it('clears focus when clicking outside of the component', () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={jest.fn()}
          />
        </>
      )

      userEvent.click(getByTestId('combo-box-toggle'))
      userEvent.click(getByTestId('outside'))
      expect(getByTestId('combo-box-input')).not.toHaveFocus()
    })
  })

  describe('accessibility and internationalization', () => {
    xit('adds correct aria attributes to options when no item selected', () => {
      // TODO: 🐛 Currently no item focused, should highlighting first item in list in this case
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
        />
      )
      const list = getByTestId('combo-box-option-list')

      // open options list
      fireEvent.click(getByTestId('combo-box-input'))

      Object.values(list.children).forEach((node, index) => {
        if (index == 0) {
          expect(node).toHaveAttribute('tabindex', '0')
        } else {
          expect(node).toHaveAttribute('tabindex', '-1')
        }
        expect(node).toHaveAttribute('aria-selected', 'false')
        expect(node).toHaveAttribute('role', 'option')
      })
    })

    it('adds correct aria attributes on options when an item is selected', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="apricot"
          onChange={jest.fn()}
        />
      )
      const list = getByTestId('combo-box-option-list')

      // open options list
      fireEvent.click(getByTestId('combo-box-input'))

      Object.values(list.children).forEach((node) => {
        if (node === getByTestId('combo-box-option-apricot')) {
          expect(node).toHaveAttribute('tabindex', '0')
          expect(node).toHaveAttribute('aria-selected', 'true')
        } else {
          expect(node).toHaveAttribute('tabindex', '-1')
          expect(node).toHaveAttribute('aria-selected', 'false')
        }
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

    it('allows no results message to be customized', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={jest.fn()}
          noResults="NOTHING"
        />
      )
      userEvent.type(getByTestId('combo-box-input'), 'zzz')
      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveTextContent('NOTHING')
    })
  })
})
