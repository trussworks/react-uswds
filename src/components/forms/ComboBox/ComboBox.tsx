import React, { KeyboardEvent, useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

interface ComboBoxOption {
  value: string
  label?: string
}

enum Direction {
  Up = -1,
  Down = 1,
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

  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>()

  const classes = classnames('usa-combo-box', className)

  // TODO implement these
  const listID = ''
  const assistiveHintID = ''
  const selectID = ''

  const itemRef = useRef<HTMLLIElement>(null)
  useEffect(() => {
    if (selectedValue && itemRef.current) {
      itemRef.current.focus()
    }
  })

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!selectedValue && inputRef.current) {
      inputRef.current.focus()
    }
  })

  const moveSelection = (change: Direction): void => {
    const currentIndex = options.findIndex(
      (option) => option.value === selectedValue
    )
    if (currentIndex === -1) {
      const newOption = options[0]
      setSelectedValue(newOption.value)
    } else {
      const newIndex = currentIndex + change
      if (newIndex < 0) {
        setIsOpen(false)
        setSelectedValue(undefined)
      } else {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = options[newIndex]
        setSelectedValue(newOption.value)
      }
    }
  }

  const handleInputKeyDown = (event: KeyboardEvent): void => {
    if (event.key == 'Escape') {
      setIsOpen(false)
    } else if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      moveSelection(1)
      setIsOpen(true)
    }
  }

  const handleListItemKeyDown = (event: KeyboardEvent): void => {
    if (event.key == 'Escape') {
      setIsOpen(false)
      setSelectedValue(undefined)
      setInputValue('')
    } else if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      moveSelection(1)
    } else if (event.key == 'ArrowUp' || event.key == 'Up') {
      event.preventDefault()
      moveSelection(-1)
    }
  }

  return (
    <div data-testid="combo-box" className={classes} id={id}>
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
        onClick={(): void => setIsOpen(true)}
        ref={inputRef}
        // onBlur={(): void => setIsOpen(false)}
        onKeyDown={handleInputKeyDown}
        value={inputValue}
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
          aria-label="Toggle the dropdown list">
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
          const selected = option.value === selectedValue
          const itemClasses = classnames('usa-combo-box__list-option', {
            'usa-combo-box__list-option--focused': selected,
          })

          return (
            <li
              ref={selected ? itemRef : null}
              value={option.value}
              key={option.value}
              className={itemClasses}
              tabIndex={selected ? 0 : -1}
              role="option"
              aria-selected={selected}
              aria-setsize={64}
              aria-posinset={index + 1}
              id={listID + `--option-${index}`}
              onKeyDown={handleListItemKeyDown}>
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
