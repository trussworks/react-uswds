import React, {
  KeyboardEvent,
  FocusEvent,
  MouseEvent,
  useState,
  useEffect,
  useRef,
} from 'react'
import classnames from 'classnames'

interface ComboBoxOption {
  value: string
  label?: string
}

enum Direction {
  Up = -1,
  Down = 1,
}

enum FocusMode {
  None,
  Input, // The textfield
  Item, // One of the list items
}

interface ComboBoxProps {
  id: string
  name: string
  className?: string
  options: ComboBoxOption[]
}

const optionFilter = (needle: string): ((event: ComboBoxOption) => boolean) => {
  return (option: ComboBoxOption): boolean =>
    option.label?.toLowerCase().indexOf(needle) != -1
}

export const ComboBox = (
  props: ComboBoxProps & JSX.IntrinsicElements['select']
): React.ReactElement => {
  const { id, name, className, options, ...selectProps } = props

  const [inputValue, setInputValue] = useState('') // value entered into textfield
  const [isOpen, setIsOpen] = useState(false) // if the list of options is shown
  const [selectedValue, setSelectedValue] = useState<string>() // currently selected value
  const [focusedValue, setFocusedValue] = useState<string>() // which item is focused
  const [focusMode, setFocusMode] = useState<FocusMode>(FocusMode.None)

  const containerRef = useRef<HTMLDivElement>(null)

  const filteredOptions =
    inputValue !== '' ? options.filter(optionFilter(inputValue)) : options

  // TODO implement these
  const listID = ''
  const assistiveHintID = ''
  const selectID = ''

  const itemRef = useRef<HTMLLIElement>(null)
  useEffect(() => {
    if (focusMode === FocusMode.Item && focusedValue && itemRef.current) {
      itemRef.current.focus()
    }
  })

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focusMode === FocusMode.Input && inputRef.current) {
      inputRef.current.focus()
    }
  })

  const changeFocus = (change: Direction): void => {
    const currentIndex = filteredOptions.findIndex(
      (option) => option.value === focusedValue
    )
    if (currentIndex === -1) {
      const newOption = filteredOptions[0]
      setFocusedValue(newOption.value)
    } else {
      const newIndex = currentIndex + change
      if (newIndex < 0) {
        setIsOpen(false)
        setFocusedValue(undefined)
        setFocusMode(FocusMode.Input)
      } else {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = filteredOptions[newIndex]
        setFocusedValue(newOption.value)
      }
    }
  }

  const handleInputKeyDown = (event: KeyboardEvent): void => {
    if (event.key == 'Escape') {
      setIsOpen(false)
    } else if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      setIsOpen(true)
      changeFocus(Direction.Down)
      setFocusMode(FocusMode.Item)
    }
  }

  const handleInputClick = (): void => {
    setFocusMode(FocusMode.Input)
    setIsOpen(true)
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const target = event.relatedTarget

    if (
      !target ||
      (target instanceof Node && !containerRef.current?.contains(event.target))
    ) {
      setFocusMode(FocusMode.None)
      setIsOpen(false)
    }
  }

  const handleListItemKeyDown = (event: KeyboardEvent): void => {
    if (event.key == 'Escape') {
      setIsOpen(false)
      if (!selectedValue) {
        setInputValue('')
      }
      setFocusedValue(undefined)
      setFocusMode(FocusMode.Input)
    } else if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      changeFocus(Direction.Down)
    } else if (event.key == 'ArrowUp' || event.key == 'Up') {
      event.preventDefault()
      changeFocus(Direction.Up)
    }
  }

  const handleListItemClick = (option: ComboBoxOption): void => {
    setSelectedValue(option.value)
    setInputValue(option.label || option.value)
    setIsOpen(false)
    setFocusMode(FocusMode.Input)
  }

  const handleListItemMouseMove = (option: ComboBoxOption): void => {
    if (focusedValue !== option.value) {
      setFocusedValue(option.value)
      setFocusMode(FocusMode.Item)
    }
  }

  const handleArrowClick = (): void => {
    if (isOpen) {
      setFocusMode(FocusMode.Input)
      setIsOpen(false)
    } else {
      if (selectedValue) {
        setFocusMode(FocusMode.Item)
      }
      setIsOpen(true)
    }
  }

  const handleClearClick = (): void => {
    setInputValue('')
    setSelectedValue(undefined)
    setFocusMode(FocusMode.Input)
  }

  const containerClasses = classnames('usa-combo-box', className, {
    'usa-combo-box--pristine': selectedValue,
  })

  return (
    <div
      data-testid="combo-box"
      className={containerClasses}
      id={id}
      ref={containerRef}>
      <select
        className="usa-select usa-sr-only usa-combo-box__select"
        name={name}
        aria-hidden
        tabIndex={-1}
        value={selectedValue}
        {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>
      <input
        data-testid="combo-box-input"
        aria-owns={listID}
        aria-autocomplete="list"
        aria-describedby={assistiveHintID}
        aria-expanded={isOpen}
        aria-controls=""
        id={selectID}
        className="usa-combo-box__input"
        type="text"
        role="combobox"
        ref={inputRef}
        value={inputValue}
        onBlur={handleInputBlur}
        onClick={handleInputClick}
        onKeyDown={handleInputKeyDown}
        onChange={(e): void => setInputValue(e.target.value)}
        // these do not type check:
        // autocapitalize="off"
        // autocomplete="off"
      />
      <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
        <button
          type="button"
          className="usa-combo-box__clear-input"
          aria-label="Clear the select contents"
          onClick={handleClearClick}>
          &nbsp;
        </button>
      </span>
      <span className="usa-combo-box__input-button-separator">&nbsp;</span>
      <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
        <button
          type="button"
          tabIndex={-1}
          className="usa-combo-box__toggle-list"
          aria-label="Toggle the dropdown list"
          onClick={handleArrowClick}>
          &nbsp;
        </button>
      </span>
      <ul
        data-testid="combo-box-option-list"
        tabIndex={-1}
        id={listID}
        className="usa-combo-box__list"
        role="listbox"
        hidden={!isOpen}>
        {filteredOptions.map((option, index) => {
          const focused = option.value === focusedValue
          const selected = option.value === selectedValue
          const itemClasses = classnames('usa-combo-box__list-option', {
            'usa-combo-box__list-option--focused': focused,
            'usa-combo-box__list-option--selected': selected,
          })

          return (
            <li
              ref={focused ? itemRef : null}
              value={option.value}
              key={option.value}
              className={itemClasses}
              tabIndex={focused ? 0 : -1}
              role="option"
              aria-selected={selected}
              aria-setsize={64}
              aria-posinset={index + 1}
              id={listID + `--option-${index}`}
              onKeyDown={handleListItemKeyDown}
              onMouseMove={(): void => handleListItemMouseMove(option)}
              onClick={(): void => {
                handleListItemClick(option)
              }}>
              {option.label || option.value}
            </li>
          )
        })}
      </ul>

      <div className="usa-combo-box__status usa-sr-only" role="status"></div>
      <span id={assistiveHintID} className="usa-sr-only">
        When autocomplete results are available use up and down arrows to review
        and enter to select. Touch device users, explore by touch or with swipe
        gestures.
      </span>
    </div>
  )
}

export default ComboBox
