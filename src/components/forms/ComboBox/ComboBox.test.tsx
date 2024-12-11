import { createRef } from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { ComboBox, ComboBoxOption, ComboBoxRef } from './ComboBox'
import { TextInput } from '../TextInput/TextInput'
import { fruits, veggies } from './foods'

/*
  Source of truth for combo box behavior is USWDS storybook examples and tests. For more:
  - https://designsystem.digital.gov/form-controls/03-combo-box/
  - https://github.com/uswds/uswds/tree/7a89611fe649650922e4d431b78c39fed6a867e1/spec/unit/combo-box
*/

const fruitOptions: ComboBoxOption[] = Object.entries(fruits).map(
  ([value, key]) => ({
    value: value,
    label: key,
  })
)

const veggieOptions: ComboBoxOption[] = Object.entries(veggies).map(
  ([value, key]) => ({
    value: value,
    label: key,
  })
)

describe('ComboBox component', () => {
  it('renders the expected markup without errors', () => {
    render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={vi.fn()}
      />
    )

    const comboBoxContainer = screen.getByTestId('combo-box')
    expect(comboBoxContainer).toBeInTheDocument()
    expect(comboBoxContainer).toHaveClass('usa-combo-box')
    expect(comboBoxContainer).not.toHaveClass('usa-combo-box--pristine')
    expect(comboBoxContainer).toHaveAttribute('data-enhanced', 'true')

    const comboBoxSelect = screen.getByTestId('combo-box-select')
    expect(comboBoxSelect).toBeInstanceOf(HTMLSelectElement)
    expect(comboBoxSelect).toHaveAttribute('aria-hidden', 'true')
    expect(comboBoxSelect).toHaveClass(
      'usa-select usa-sr-only usa-combo-box__select'
    )

    const comboBoxInput = screen.getByRole('combobox')
    expect(comboBoxInput).toBeInTheDocument()
    expect(comboBoxInput).toBeInstanceOf(HTMLInputElement)
    expect(comboBoxInput).toHaveAttribute('aria-owns', 'favorite-fruit--list')
    expect(comboBoxInput).toHaveAttribute(
      'aria-controls',
      'favorite-fruit--list'
    )
    expect(comboBoxInput).toHaveAttribute('aria-autocomplete', 'list')
    expect(comboBoxInput).toHaveAttribute(
      'aria-describedby',
      'favorite-fruit--assistiveHint'
    )
    expect(comboBoxInput).toHaveAttribute('aria-expanded', 'false')
    expect(comboBoxInput).toHaveAttribute('autocapitalize', 'off')
    expect(comboBoxInput).toHaveAttribute('autocomplete', 'off')
    expect(comboBoxInput).toHaveAttribute('type', 'text')

    const comboBoxList = screen.getByTestId('combo-box-option-list')
    expect(comboBoxList).toBeInstanceOf(HTMLUListElement)
    expect(comboBoxList).toHaveAttribute('id', 'favorite-fruit--list')
    expect(comboBoxList).toHaveAttribute('role', 'listbox')
    expect(comboBoxList).not.toBeVisible()
  })

  it('renders the expected markup with a default value', () => {
    render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={vi.fn()}
        defaultValue="avocado"
      />
    )

    const comboBoxContainer = screen.getByTestId('combo-box')
    expect(comboBoxContainer).toHaveClass('usa-combo-box--pristine')

    const comboBoxSelect = screen.getByTestId('combo-box-select')
    expect(comboBoxSelect).toHaveValue('avocado')

    const comboBoxInput = screen.getByRole('combobox')
    expect(comboBoxInput).toHaveValue('Avocado')
  })

  it('updates options when prop changes', async () => {
    const Wrapper = (props: { options: ComboBoxOption[] }) => {
      return (
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={props.options}
          onChange={vi.fn()}
        />
      )
    }
    const { rerender } = render(<Wrapper options={fruitOptions} />)
    const comboBoxSelect = screen.getByTestId('combo-box-select')
    expect(comboBoxSelect).toHaveValue(fruitOptions[0].value)
    rerender(<Wrapper options={veggieOptions} />)
    expect(comboBoxSelect).toHaveValue(veggieOptions[0].value)
  })

  describe('toggling the list', () => {
    it('renders all options when the list is open', async () => {
      const fruitAbridged = fruitOptions.slice(0, 3)

      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitAbridged}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-toggle'))
      expect(screen.getAllByRole('option')).toHaveLength(fruitAbridged.length)

      fruitAbridged.forEach((item, index) => {
        const optionEl = screen.getByRole('option', { name: item.label })
        expect(optionEl).toBeInTheDocument()
        expect(optionEl).toHaveAttribute('value', item.value)
        expect(optionEl).toHaveAttribute(
          'aria-setsize',
          `${fruitAbridged.length}`
        )
        expect(optionEl).toHaveAttribute('aria-posinset', `${index + 1}`)
        expect(optionEl).toHaveAttribute(
          'id',
          `favorite-fruit--list--option-${index}`
        )
      })
    })

    it('shows options list when input toggle clicked', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

    it('shows list when input is clicked', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

    it('shows list when input is typed into', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'b')
      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

    it('highlights the first option when opening the menu, when no default value exists', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const firstItem = getByTestId('combo-box-option-list').children[0]
      const inputEl = getByTestId('combo-box-input')

      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(firstItem).toBeVisible()
      expect(firstItem).not.toHaveFocus()
      expect(firstItem).toHaveClass('usa-combo-box__list-option--focused')
      expect(inputEl).toHaveAttribute('aria-activedescendant', firstItem.id)
    })

    it('highlights the default value when opening the menu, when one exists', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          defaultValue="avocado"
        />
      )

      await userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-avocado')).toHaveAttribute(
        'aria-selected',
        'true'
      )
    })
  })

  it('can be disabled', () => {
    render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={[]}
        onChange={vi.fn()}
        disabled={true}
      />
    )

    expect(screen.getByLabelText('Clear the select contents')).toBeDisabled()
    expect(screen.getByLabelText('Clear the select contents')).not.toBeVisible()

    expect(screen.getByRole('combobox')).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Toggle the dropdown list' })
    ).toBeDisabled()

    expect(screen.getByTestId('combo-box-select')).not.toBeDisabled()
  })

  it('does not show the list when clicking the disabled component', async () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={vi.fn()}
        disabled={true}
      />
    )
    await userEvent.click(getByTestId('combo-box-toggle'))

    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  it('renders input with default value if passed in', () => {
    const { getByTestId } = render(
      <ComboBox
        id="favorite-fruit"
        name="favorite-fruit"
        options={fruitOptions}
        onChange={vi.fn()}
        defaultValue="apple"
      />
    )
    expect(getByTestId('combo-box-input')).toHaveValue('Apple')
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  describe('with custom props', () => {
    it('renders select with custom props if passed in', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
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
          onChange={vi.fn()}
          inputProps={{ required: true, type: 'url' }}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      expect(comboBoxInput).toHaveAttribute('required')
      expect(comboBoxInput).toHaveAttribute('type', 'url')
    })

    it('allows a custom input onChange handler to be called', async () => {
      const mockOnInputChange = vi.fn()

      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          inputProps={{ onChange: mockOnInputChange }}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'x')
      expect(mockOnInputChange).toHaveBeenCalled()
    })

    it('renders list with custom props if passed in', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          ulProps={{ 'aria-labelledby': 'test-label-id' }}
        />
      )

      const comboBoxOptionList = getByTestId('combo-box-option-list')
      expect(comboBoxOptionList).toHaveAttribute(
        'aria-labelledby',
        'test-label-id'
      )
    })
  })

  describe('scrolling to a focused option', () => {
    it('scrolls options list to the very top when the menu opens if nothing is selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const listEl = getByTestId('combo-box-option-list')
      vi.spyOn(listEl, 'offsetHeight', 'get').mockReturnValue(205)
      listEl.scrollTop = 2000 // Scroll list 2000px down

      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(listEl.scrollTop).toEqual(0)
    })

    it('scrolls down to the selected option when the list is opened', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          defaultValue={'mango'}
        />
      )

      const mango = getByTestId('combo-box-option-mango')
      const listEl = getByTestId('combo-box-option-list')

      vi.spyOn(mango, 'offsetTop', 'get').mockReturnValue(1365)
      vi.spyOn(mango, 'offsetHeight', 'get').mockReturnValue(39)
      vi.spyOn(listEl, 'offsetHeight', 'get').mockReturnValue(205)
      listEl.scrollTop = 0 // Scroll list to the top

      await userEvent.click(getByTestId('combo-box-toggle'))
      expect(mango).toHaveClass(
        'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
      )

      expect(listEl.scrollTop).toEqual(1199)
    })

    it('scrolls up to the selected option when the list is opened', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          defaultValue={'mango'}
        />
      )

      const mango = getByTestId('combo-box-option-mango')
      const listEl = getByTestId('combo-box-option-list')

      vi.spyOn(mango, 'offsetTop', 'get').mockReturnValue(1365)
      vi.spyOn(mango, 'offsetHeight', 'get').mockReturnValue(39)
      vi.spyOn(listEl, 'offsetHeight', 'get').mockReturnValue(205)
      listEl.scrollTop = 2292 // Scroll list 2292px down

      await userEvent.click(getByTestId('combo-box-toggle'))
      expect(mango).toHaveClass(
        'usa-combo-box__list-option--focused usa-combo-box__list-option--selected'
      )

      expect(listEl.scrollTop).toEqual(1365)
    })
  })

  describe('filtering', () => {
    it('shows all options on initial load when no default value exists', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('shows all options on initial load when a default value exists', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('filters the options list after a character is typed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'a')

      expect(getByTestId('combo-box-option-list').children.length).toEqual(43)
    })

    it('persists filter options if dropdown is closed and open without selection', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'yu')
      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)

      await userEvent.click(getByTestId('combo-box-toggle'))
      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)
    })

    it('clears filter when item selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'yu')
      await userEvent.click(getByTestId('combo-box-option-yuzu'))

      expect(getByTestId('combo-box-option-list').children.length).toEqual(
        fruitOptions.length
      )
    })

    it('clears filters when ComboBox is un-focused and no option was selected (implicitly clearing the ComboBox)', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      const list = getByTestId('combo-box-option-list')
      const input = getByTestId('combo-box-input')

      // Filter the list
      await userEvent.type(input, 'Av')
      expect(list.children.length).toEqual(2) // Avocado and Guava

      // Click somewhere else
      await userEvent.click(getByTestId('outside'))
      expect(input).toHaveTextContent('')
      expect(list.children.length).toEqual(fruitOptions.length)

      // Return the combo box
      await userEvent.click(input)
      expect(input).toHaveTextContent('')
      expect(list.children.length).toEqual(fruitOptions.length)
      expect(list.children[0]).toHaveClass(
        'usa-combo-box__list-option--focused'
      )
    })

    it('shows no results message when there is no match', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'zz')

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).not.toHaveFocus()
      expect(firstItem).not.toHaveAttribute('tabindex', '0')
      expect(firstItem).toHaveTextContent('No results found')
    })

    it('shows all results when typed value is cleared', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'apple')
      await userEvent.clear(input)
      expect(getByTestId('combo-box-option-list').children.length).toEqual(
        fruitOptions.length
      )
    })

    it('resets the list of items if filtered then blurred without selecting an element', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      const input = getByTestId('combo-box-input')
      const optionsList = getByTestId('combo-box-option-list')

      await userEvent.type(input, 'apple')
      expect(optionsList.children.length).toBeLessThan(fruitOptions.length)

      await userEvent.click(getByTestId('outside'))
      expect(input).toHaveTextContent('')
      expect(optionsList.children.length).toEqual(fruitOptions.length)
    })

    it('does not hide items when disableFiltering is selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          disableFiltering
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.click(input)
      await userEvent.type(input, 'zzzzzzzzzz')

      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })
  })

  describe('clear button', () => {
    it('is visible when input has content', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'app')
      await userEvent.click(getByTestId('combo-box-option-apple'))

      expect(getByTestId('combo-box-clear-button')).toBeVisible()
    })

    it('resets the filter on click', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'b')
      await userEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toBe(
        fruitOptions.length
      )
    })

    it('calls onChange prop with undefined on click', async () => {
      const onChange = vi.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      await userEvent.click(getByTestId('combo-box-clear-button'))

      expect(onChange).toHaveBeenCalledWith(undefined)
    })

    it('clears the input on click', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'b')
      await userEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')
    })

    it('works as expected when input is loaded with default value', async () => {
      const onChange = vi.fn()
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

      await userEvent.click(getByTestId('combo-box-clear-button'))

      expect(getByTestId('combo-box-clear-button')).not.toBeVisible()
      expect(getByTestId('combo-box-input')).toHaveValue('')

      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))
      expect(onChange).toHaveBeenNthCalledWith(2, undefined)

      const comboBoxOptionList = getByTestId('combo-box-option-list')
      expect(comboBoxOptionList).not.toBeVisible()
      expect(comboBoxOptionList.children.length).toBe(fruitOptions.length)
    })

    it('remains focused on the input after click', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'b')
      expect(getByTestId('combo-box-input')).toHaveFocus()

      await userEvent.click(getByTestId('combo-box-clear-button'))
      expect(getByTestId('combo-box-input')).toHaveFocus()
    })

    it('focuses the input after clearing when the when FocusMode is None', async () => {
      const { getByTestId } = render(
        <>
          <button type="button" data-testid="outside">
            Testing
          </button>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      await userEvent.type(getByTestId('combo-box-input'), 'b')
      await userEvent.click(getByTestId('outside'))
      await userEvent.click(getByTestId('combo-box-clear-button'))

      await waitFor(() => {
        expect(getByTestId('combo-box-input')).toHaveFocus()
      })
    })
  })

  it('clears input value and closes list when an incomplete item is remaining on blur', async () => {
    const { getByTestId } = render(
      <>
        <div data-testid="outside" />

        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      </>
    )

    await userEvent.type(getByTestId('combo-box-input'), 'a')
    await userEvent.click(getByTestId('outside'))

    expect(getByTestId('combo-box-input')).toHaveValue('')
    expect(getByTestId('combo-box-input')).toHaveAttribute(
      'aria-activedescendant',
      ''
    )
    expect(getByTestId('combo-box-option-list')).not.toBeVisible()
  })

  describe('keyboard actions', () => {
    it('clears input when there is no match and enter is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')

      const comboBoxInput = getByTestId('combo-box-input')
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(comboBoxInput).toHaveValue('')
      expect(comboBoxInput).toHaveFocus()
    })

    it('clears filter when there is no match and enter is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'zzz{enter}')
      const comboBoxOptionList = getByTestId('combo-box-option-list')
      expect(comboBoxOptionList).not.toBeVisible()
      expect(comboBoxOptionList.children.length).toBe(fruitOptions.length)
    })

    it('reverts to the selected option when there is not an exact match and enter is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="avocado"
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')

      await userEvent.type(input, 'zzz{enter}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(input).toHaveValue('Avocado')
      expect(input).toHaveFocus()
      expect(getByTestId('combo-box-clear-button')).toBeVisible()
    })

    it('selects the exactly matching option when an item was previously selected and enter is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="avocado"
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')

      for (let i = 0; i < 'avocado'.length; i++) {
        await userEvent.type(input, '{backspace}')
      }

      await userEvent.type(input, 'Banana{enter}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(input).toHaveValue('Banana')
      expect(input).toHaveFocus()
      expect(getByTestId('combo-box-clear-button')).toBeVisible()
    })

    it('focuses the first filtered option with tab', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'a')
      await userEvent.tab()

      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveFocus()
      expect(firstItem).toHaveAttribute('tabindex', '0')
    })

    it('focuses the first option with tab', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-input')) // open menu
      await userEvent.tab()

      const appleOption = getByTestId('combo-box-option-apple')
      expect(appleOption).toHaveFocus()
      expect(appleOption).toHaveAttribute('tabindex', '0')
    })

    it('selects the focused option with tab', async () => {
      const onChange = vi.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )
      // focus mango
      await userEvent.type(getByTestId('combo-box-input'), 'mang')
      await userEvent.tab()

      // select mango
      await userEvent.tab()

      expect(getByTestId('combo-box-input')).toHaveValue('Mango')
      expect(onChange).toHaveBeenLastCalledWith('mango')
    })

    it('switches focus when there are no filtered options', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.type(comboBoxInput, 'zzz')
      await userEvent.tab()

      expect(comboBoxInput).not.toHaveFocus()
    })

    it('selects the focused option with enter', async () => {
      const onChange = vi.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.type(comboBoxInput, 'apri')
      await userEvent.tab()
      await userEvent.type(getByTestId('combo-box-option-apricot'), '{enter}')

      expect(comboBoxInput).toHaveValue('Apricot')
      expect(onChange).toHaveBeenLastCalledWith('apricot')
    })

    it('focuses the next option when down arrow is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'a')
      await userEvent.tab()
      await userEvent.keyboard('{ArrowDown}')

      const focusedOption = getByTestId('combo-box-option-apricot')
      expect(focusedOption).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-activedescendant',
        focusedOption.id
      )
    })

    it('focuses the previous option when up arrow is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.type(getByTestId('combo-box-input'), 'a')
      await userEvent.tab()
      await userEvent.keyboard('{ArrowDown}')
      await userEvent.keyboard('{ArrowDown}')
      await userEvent.keyboard('{ArrowUp}')

      const focusedOption = getByTestId('combo-box-option-apricot')
      expect(focusedOption).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-activedescendant',
        focusedOption.id
      )
    })

    it('opens the menu and focuses on the selected option when down arrow is pressed in the input', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          defaultValue="watermelon"
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.click(comboBoxInput)
      await userEvent.keyboard('{ArrowDown}')

      expect(getByTestId('combo-box-option-list')).toBeVisible()
      const focusedOption = getByTestId('combo-box-option-watermelon')
      expect(focusedOption).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-activedescendant',
        focusedOption.id
      )
    })

    it('opens the menu when down arrow is pressed in the input', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.click(comboBoxInput)
      await userEvent.keyboard('{ArrowDown}')

      expect(getByTestId('combo-box-option-list')).toBeVisible()
      const focusedOption = getByTestId('combo-box-option-apple')
      expect(focusedOption).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-activedescendant',
        focusedOption.id
      )
    })

    it('closes the menu when the first option is focused and arrow up is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.click(comboBoxInput)
      await userEvent.keyboard('{ArrowDown}')

      await userEvent.keyboard('{ArrowUp}')

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(comboBoxInput).toHaveFocus()
      expect(comboBoxInput).toHaveAttribute('aria-activedescendant', '')
    })

    it('does not change focus when last option is focused and down arrow is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const yuzuOption = getByTestId('combo-box-option-yuzu')
      await userEvent.click(getByTestId('combo-box-input'))
      await userEvent.hover(yuzuOption)
      await userEvent.keyboard('{ArrowDown}')

      expect(yuzuOption).toHaveFocus()
    })

    it('pressing tab once in the input with a selected option focuses the clear button', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={vi.fn()}
        />
      )
      // first tab goes to input
      await userEvent.tab()

      await userEvent.tab()

      expect(getByTestId('combo-box-clear-button')).toHaveFocus()
    })

    it('pressing tab twice in an input with a default value, when options list is open, focuses the selected option', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="banana"
          onChange={vi.fn()}
        />
      )
      await userEvent.click(getByTestId('combo-box-input'))

      await userEvent.tab()
      expect(getByTestId('combo-box-clear-button')).toHaveFocus()

      await userEvent.tab()

      expect(getByTestId('combo-box-option-banana')).toHaveFocus()
    })

    it('focuses the next option when an option is selected and down arrow is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          defaultValue="mango"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.click(getByTestId('combo-box-input'))
      // This one moves focus from the input to the options
      await userEvent.keyboard('{ArrowDown}')
      // This one moves to the next option
      await userEvent.keyboard('{ArrowDown}')

      await waitFor(() =>
        expect(getByTestId('combo-box-option-mangosteen')).toHaveFocus()
      )
    })

    it('closes the menu when an option is selected and the first option is focused and up arrow is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          defaultValue="apricot"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      // Apple is the item at top of list
      const appleOption = getByTestId('combo-box-option-apple')
      await userEvent.hover(appleOption)
      await userEvent.keyboard('{ArrowUp}')

      expect(getByTestId('combo-box-input')).toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
    })

    it('hides the clear button when typing in the input, but does not clear the selection', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            defaultValue="avocado"
            onChange={vi.fn()}
          />
        </>
      )

      const input = getByTestId('combo-box-input')
      const clearButton = getByTestId('combo-box-clear-button')
      await userEvent.type(input, '{backspace}')

      expect(clearButton).not.toBeVisible()
      expect(getByTestId('combo-box-option-list').children.length).toEqual(1)

      await userEvent.click(getByTestId('outside'))

      expect(input).toHaveValue('Avocado')
      expect(clearButton).toBeVisible()
    })

    it('does not hijack focus while tabbing when another field has focus', async () => {
      const { getByTestId } = render(
        <>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
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
      await userEvent.type(comboBoxInput, 'Apple{enter}')

      // Tab to next field (Text Input)
      await userEvent.tab()

      // Fill text input
      await userEvent.type(textInput, 'Test 123')

      expect(textInput).toHaveValue('Test 123')
    })

    it('clears out the input when options list is closed and no matching options is selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.type(comboBoxInput, 'a{enter}')
      expect(comboBoxInput).toHaveValue('')
    })

    it('selected option if the input matches 100% of the label characters (case insensitive)', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const comboBoxInput = getByTestId('combo-box-input')
      await userEvent.type(comboBoxInput, 'aPpLe{enter}')
      await waitFor(() => expect(comboBoxInput).toHaveValue('Apple'))
    })

    it('focuses the input when an option is focused and shift-tab is pressed', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )
      const input = getByTestId('combo-box-input')
      const apricotOption = getByTestId('combo-box-option-apricot')

      await userEvent.tab()
      await userEvent.hover(apricotOption)
      await userEvent.tab({ shift: true })

      expect(input).toHaveFocus()
    })
  })

  describe('mouse actions', () => {
    it('displays options list when input is clicked', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )
      const input = getByTestId('combo-box-input')
      const optionList = getByTestId('combo-box-option-list')

      await userEvent.click(input)

      expect(input).toHaveAttribute('aria-expanded', 'true')
      expect(optionList).toBeVisible()
      expect(optionList.childElementCount).toEqual(fruitOptions.length)
    })

    it('displays options list when input is clicked twice', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      await userEvent.dblClick(getByTestId('combo-box-input'))

      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-expanded',
        'true'
      )
      expect(getByTestId('combo-box-option-list')).toBeVisible()
    })

    it('hides options list when clicking away and input has focus', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      const input = getByTestId('combo-box-input')
      await userEvent.click(input)
      await userEvent.click(getByTestId('outside'))

      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(input).toHaveAttribute('aria-activedescendant', '')
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
    })

    it('hides options list when clicking away and a specific option has focus', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      const input = getByTestId('combo-box-input')
      const blackberryOption = getByTestId('combo-box-option-blackberry')

      await userEvent.click(input)

      await userEvent.hover(blackberryOption)
      await userEvent.click(getByTestId('outside'))

      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(input).toHaveAttribute('aria-activedescendant', '')
      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
    })

    it('shows and hides options list when toggle is clicked', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      const optionList = getByTestId('combo-box-option-list')
      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(input).toHaveAttribute('aria-expanded', 'true')
      expect(optionList).toBeVisible()

      await userEvent.click(getByTestId('combo-box-toggle'))

      expect(input).toHaveAttribute('aria-expanded', 'false')
      expect(input).toHaveAttribute('aria-activedescendant', '')
      expect(optionList).not.toBeVisible()
    })

    it('selects an item by clicking on an option', async () => {
      const onChange = vi.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.click(getByTestId('combo-box-toggle'))
      await userEvent.click(getByTestId('combo-box-option-apple'))

      expect(onChange).toHaveBeenLastCalledWith('apple')
      expect(input).toHaveDisplayValue('Apple')
      expect(input).toHaveValue('Apple')
    })

    it('persists input text when items list is blurred', async () => {
      const onChange = vi.fn()
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
      await userEvent.click(getByTestId('combo-box-toggle'))
      await userEvent.click(getByTestId('combo-box-option-apple'))
      // effectively, blur
      await userEvent.click(getByTestId('outside'))

      expect(onChange).toHaveBeenLastCalledWith('apple')
      expect(input).toHaveDisplayValue('Apple')
      expect(input).toHaveValue('Apple')
    })

    it('persists input text if dropdown is closed and open without selection', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const input = getByTestId('combo-box-input')
      const toggle = getByTestId('combo-box-toggle')
      await userEvent.type(input, 'yu')

      await userEvent.click(toggle)
      expect(input).toHaveValue('yu')

      await userEvent.click(toggle)
      expect(input).toHaveValue('yu')
    })

    it('updates input with item selected on click', async () => {
      const onChange = vi.fn()
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={onChange}
        />
      )

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'yu')
      await userEvent.click(getByTestId('combo-box-option-yuzu'))

      expect(input).toHaveValue('Yuzu')
      expect(onChange).toHaveBeenLastCalledWith('yuzu')
    })

    it('focuses an option on hover', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const yuzuOption = getByTestId('combo-box-option-yuzu')
      const blackberryOption = getByTestId('combo-box-option-blackberry')
      const inputEl = getByTestId('combo-box-input')

      await userEvent.click(getByTestId('combo-box-toggle'))
      await userEvent.hover(blackberryOption)

      expect(blackberryOption).toHaveClass(
        'usa-combo-box__list-option--focused'
      )
      expect(blackberryOption).toHaveFocus()
      expect(inputEl).toHaveAttribute(
        'aria-activedescendant',
        blackberryOption.id
      )

      await userEvent.hover(yuzuOption)
      expect(blackberryOption).not.toHaveClass(
        'usa-combo-box__list-option--focused'
      )
      expect(yuzuOption).toHaveClass('usa-combo-box__list-option--focused')
      expect(yuzuOption).toHaveFocus()
      expect(inputEl).toHaveAttribute('aria-activedescendant', yuzuOption.id)
    })

    it('clears focus when clicking outside of the component', async () => {
      const { getByTestId } = render(
        <>
          <button type="button" data-testid="outside">
            Testing
          </button>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      await userEvent.click(getByTestId('combo-box-toggle'))
      await userEvent.click(getByTestId('outside'))

      expect(getByTestId('combo-box-input')).not.toHaveFocus()
      expect(getByTestId('combo-box-input')).toHaveAttribute(
        'aria-activedescendant',
        ''
      )
    })
  })

  describe('accessibility and internationalization', () => {
    it('adds correct aria attributes to options when no item selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )
      const list = getByTestId('combo-box-option-list')

      // open options list
      await userEvent.click(getByTestId('combo-box-input'))

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

    it('adds correct aria attributes on options when an item is selected', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          defaultValue="apricot"
          onChange={vi.fn()}
        />
      )
      const list = getByTestId('combo-box-option-list')

      // open options list
      await userEvent.click(getByTestId('combo-box-input'))

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

    it('updates the status text when the list is opened with options', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const status = screen.getByRole('status')

      // open options list
      await userEvent.click(getByTestId('combo-box-input'))

      expect(status).toHaveTextContent(
        `${fruitOptions.length} results available.`
      )
    })

    it('updates the status text when the list is opened with filtered options', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const status = screen.getByRole('status')

      const input = getByTestId('combo-box-input')
      await userEvent.type(input, 'a')

      expect(status).toHaveTextContent(`43 results available.`)
    })

    it('updates the status text when the list is opened with no options', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={[]}
          onChange={vi.fn()}
        />
      )

      const status = screen.getByRole('status')

      // open options list
      await userEvent.click(getByTestId('combo-box-input'))

      expect(status).toHaveTextContent(`No results.`)
    })

    it('updates the status text when the list is closed', async () => {
      const { getByTestId } = render(
        <>
          <div data-testid="outside" />

          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={vi.fn()}
          />
        </>
      )

      const status = screen.getByRole('status')

      // open options list
      await userEvent.click(getByTestId('combo-box-input'))

      expect(status).toHaveTextContent(
        `${fruitOptions.length} results available.`
      )

      await userEvent.click(getByTestId('outside'))

      expect(getByTestId('combo-box-option-list')).not.toBeVisible()
      expect(status).toBeEmptyDOMElement()
    })

    it('updates the status text when an option is selected', async () => {
      const { getByTestId, getByRole } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
        />
      )

      const status = getByRole('status')

      await waitFor(() =>
        expect(getByTestId('combo-box-select').children.length).toBeGreaterThan(
          0
        )
      )

      await userEvent.type(getByTestId('combo-box-input'), 'Banana')

      await waitFor(() =>
        expect(getByTestId('combo-box-input')).toHaveValue('Banana')
      )

      await waitFor(() =>
        expect(status).toHaveTextContent(`1 result available.`)
      )

      await userEvent.type(getByTestId('combo-box-input'), '{enter}')

      expect(status).toBeEmptyDOMElement()
    })

    it('allows the assistive hint to be customized', () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          assistiveHint="Customized assistive hint"
        />
      )

      const node = getByTestId('combo-box-assistive-hint')
      expect(node).toHaveTextContent('Customized assistive hint')
    })

    it('allows no results message to be customized', async () => {
      const { getByTestId } = render(
        <ComboBox
          id="favorite-fruit"
          name="favorite-fruit"
          options={fruitOptions}
          onChange={vi.fn()}
          noResults="NOTHING"
        />
      )
      await userEvent.type(getByTestId('combo-box-input'), 'zzz')
      const firstItem = getByTestId('combo-box-option-list').children[0]
      expect(firstItem).toHaveTextContent('NOTHING')
    })
  })

  describe('exposed ref', () => {
    it('can be used to focus on the text input', async () => {
      const comboRef = createRef<ComboBoxRef>()
      const onChange = vi.fn()
      const handleFocus = (): void => comboRef.current?.focus()

      const { getByTestId } = render(
        <>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={onChange}
            ref={comboRef}
          />
          <button data-testid="focus-button" onClick={handleFocus}>
            Focus
          </button>
        </>
      )

      const input = getByTestId('combo-box-input')
      await waitFor(() => expect(input).not.toHaveFocus())

      await userEvent.click(getByTestId('focus-button'))
      await waitFor(() => expect(input).toHaveFocus())
    })

    it('can be used to clear the selected value', async () => {
      const comboRef = createRef<ComboBoxRef>()
      const onChange = vi.fn()
      const handleClearSelection = (): void =>
        comboRef.current?.clearSelection()

      const { getByTestId } = render(
        <>
          <ComboBox
            id="favorite-fruit"
            name="favorite-fruit"
            options={fruitOptions}
            onChange={onChange}
            ref={comboRef}
          />
          <button data-testid="clear-button" onClick={handleClearSelection}>
            Clear
          </button>
        </>
      )

      const input = getByTestId('combo-box-input')

      await userEvent.click(getByTestId('combo-box-toggle'))
      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
      await userEvent.click(getByTestId('combo-box-option-apple'))
      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(2))

      //This check is flaky and sometimes returns 'banana'.
      expect(onChange).toHaveBeenLastCalledWith('apple')
      expect(input).toHaveDisplayValue('Apple')
      expect(input).toHaveValue('Apple')

      await userEvent.click(getByTestId('clear-button'))
      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(3))

      expect(onChange).toHaveBeenLastCalledWith(undefined)
      expect(input).toHaveDisplayValue('')
      expect(input).toHaveValue('')
    })
  })
})
