import React, {
  KeyboardEvent,
  FocusEvent,
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

  const classes = classnames('usa-combo-box', className)

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
    const currentIndex = options.findIndex(
      (option) => option.value === focusedValue
    )
    if (currentIndex === -1) {
      const newOption = options[0]
      setFocusedValue(newOption.value)
    } else {
      const newIndex = currentIndex + change
      if (newIndex < 0) {
        setIsOpen(false)
        setFocusedValue(undefined)
        setFocusMode(FocusMode.Input)
      } else {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = options[newIndex]
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
    console.debug(event.relatedTarget)
    console.debug(event.target)
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
      setSelectedValue(undefined)
      setInputValue('')
      setFocusMode(FocusMode.Input)
    } else if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      changeFocus(Direction.Down)
    } else if (event.key == 'ArrowUp' || event.key == 'Up') {
      event.preventDefault()
      changeFocus(Direction.Up)
    }
  }

  const handleListItemClick = (value: string): void => {
    setSelectedValue(value)
    setInputValue(value)
    setIsOpen(false)
    setFocusMode(FocusMode.Input)
  }

  const handleArrowClick = (): void => {
    setFocusMode(FocusMode.Input)
    setIsOpen(!isOpen)
  }

  return (
    <div data-testid="combo-box" className={classes} id={id} ref={containerRef}>
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
          aria-label="Clear the select contents">
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
        tabIndex={-1}
        id={listID}
        className="usa-combo-box__list"
        role="listbox"
        hidden={!isOpen}>
        {options.map((option, index) => {
          const focused = option.value === focusedValue
          const selected = option.value === selectedValue
          const itemClasses = classnames('usa-combo-box__list-option', {
            'usa-combo-box__list-option--focused': focused,
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
              onClick={(): void => {
                handleListItemClick(option.value)
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
