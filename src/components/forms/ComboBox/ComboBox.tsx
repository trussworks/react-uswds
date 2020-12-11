import React, { KeyboardEvent, FocusEvent, useEffect, useRef } from 'react'
import classnames from 'classnames'

import { ActionTypes, Action, State, useCombobox } from './useCombobox'

/*  As per USWDS spec, ComboBox includes a HTML <select> with options AND a separate <input> and dropdown <ul> with items.
    The select is usa-sr-only and is always hidden via CSS. The input and dropdown list are the elements used for interaction.

    There is the ability to pass in custom props directly to the select and input.
    This should be using sparingly and not with existing Combobox props such as disabled, onChange, defaultValue. 
*/
export interface ComboBoxOption {
  value: string
  label: string
}

enum Direction {
  Previous = -1,
  Next = 1,
}

export enum FocusMode {
  None,
  Input,
  Item,
}

interface ComboBoxProps {
  id: string
  name: string
  className?: string
  options: ComboBoxOption[]
  defaultValue?: string
  disabled?: boolean
  onChange: (val?: string) => void
  assistiveHint?: string
  noResults?: string
  inputProps?: JSX.IntrinsicElements['input']
  selectProps?: JSX.IntrinsicElements['select']
}

interface InputProps {
  focused: boolean
}

const Input = (
  props: InputProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const { focused, ...inputProps } = props
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <input
      type="text"
      className="usa-combo-box__input"
      data-testid="combo-box-input"
      {...inputProps}
      autoCapitalize="off"
      autoComplete="off"
      ref={inputRef}
    />
  )
}

export const ComboBox = (props: ComboBoxProps): React.ReactElement => {
  const {
    id,
    name,
    className,
    options,
    defaultValue,
    disabled,
    onChange,
    assistiveHint,
    noResults,
    selectProps,
    inputProps,
  } = props

  const isDisabled = !!disabled

  let defaultOption
  if (defaultValue) {
    defaultOption = options.find((opt: ComboBoxOption): boolean => {
      return opt.value === defaultValue
    })
  }

  const initialState: State = {
    isOpen: false,
    selectedOption: defaultOption ? defaultOption : undefined,
    focusedOption: undefined,
    focusMode: FocusMode.None,
    filteredOptions: options,
    filter: undefined,
    inputValue: defaultOption ? defaultOption.label : '',
  }

  const [state, dispatch] = useCombobox(initialState, options)

  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    onChange && onChange(state.selectedOption?.value || undefined)
  }, [state.selectedOption])

  useEffect(() => {
    if (
      state.focusMode === FocusMode.Item &&
      state.focusedOption &&
      itemRef.current
    ) {
      itemRef.current.focus()
    }
  })

  const handleInputKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      dispatch({ type: ActionTypes.CLOSE_LIST })
    } else if (event.key === 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      dispatch({
        type: ActionTypes.FOCUS_OPTION,
        option: state.filteredOptions[0],
      })
    } else if (event.key === 'Tab') {
      event.preventDefault()
      dispatch({
        type: ActionTypes.FOCUS_OPTION,
        option: state.filteredOptions[0],
      })
    } else if (event.key === 'Enter' && state.inputValue !== '') {
      event.preventDefault()
      dispatch({ type: ActionTypes.CLOSE_LIST })
    }
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
    if (state.selectedOption?.value) return
    const target = event.relatedTarget

    if (
      !target ||
      (target instanceof Node && !containerRef.current?.contains(event.target))
    ) {
      dispatch({ type: ActionTypes.CLEAR })
    }
  }

  const focusSibling = (
    dispatch: React.Dispatch<Action>,
    state: State,
    change: Direction
  ): void => {
    const currentIndex = state.focusedOption
      ? state.filteredOptions.indexOf(state.focusedOption)
      : -1
    if (currentIndex === -1) {
      const newOption = state.filteredOptions[0]
      dispatch({ type: ActionTypes.FOCUS_OPTION, option: newOption })
    } else {
      const newIndex = currentIndex + change
      if (newIndex < 0) {
        dispatch({ type: ActionTypes.CLOSE_LIST })
      } else if (newIndex <= state.filteredOptions.length - 1) {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = state.filteredOptions[newIndex]
        dispatch({ type: ActionTypes.FOCUS_OPTION, option: newOption })
      }
    }
  }

  const handleListItemKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      dispatch({ type: ActionTypes.CLOSE_LIST })
    } else if (event.key === 'Tab' || event.key === 'Enter') {
      event.preventDefault()
      if (state.focusedOption) {
        dispatch({
          type: ActionTypes.SELECT_OPTION,
          option: state.focusedOption,
        })
      }
    } else if (event.key === 'ArrowDown' || event.key === 'Down') {
      event.preventDefault()
      focusSibling(dispatch, state, Direction.Next)
    } else if (event.key === 'ArrowUp' || event.key === 'Up') {
      event.preventDefault()
      focusSibling(dispatch, state, Direction.Previous)
    }
  }

  const containerClasses = classnames('usa-combo-box', className, {
    'usa-combo-box--pristine': state.selectedOption,
  })
  const listID = `combobox-${name}-list`
  const assistiveHintID = `combobox-${name}-assistive-hint`

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
        defaultValue={state.selectedOption?.value}
        data-testid="combo-box-select"
        disabled={isDisabled}
        {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Input
        onChange={(e): void =>
          dispatch({ type: ActionTypes.UPDATE_FILTER, value: e.target.value })
        }
        onClick={(): void => dispatch({ type: ActionTypes.OPEN_LIST })}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        value={state.inputValue}
        focused={state.focusMode === FocusMode.Input}
        role="combobox"
        aria-owns={listID}
        aria-describedby={assistiveHintID}
        aria-expanded={state.isOpen}
        disabled={isDisabled}
        {...inputProps}
      />
      <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
        <button
          type="button"
          className="usa-combo-box__clear-input"
          aria-label="Clear the select contents"
          onClick={(): void => dispatch({ type: ActionTypes.CLEAR })}
          data-testid="combo-box-clear-button"
          hidden={!state.selectedOption}>
          &nbsp;
        </button>
      </span>
      <span className="usa-combo-box__input-button-separator">&nbsp;</span>
      <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
        <button
          data-testid="combo-box-toggle"
          type="button"
          tabIndex={-1}
          className="usa-combo-box__toggle-list"
          aria-label="Toggle the dropdown list"
          onClick={(): void =>
            dispatch({
              type: state.isOpen
                ? ActionTypes.CLOSE_LIST
                : ActionTypes.OPEN_LIST,
            })
          }
          disabled={isDisabled}>
          &nbsp;
        </button>
      </span>
      <ul
        data-testid="combo-box-option-list"
        tabIndex={-1}
        id={listID}
        className="usa-combo-box__list"
        role="listbox"
        hidden={!state.isOpen}>
        {state.filteredOptions.map((option, index) => {
          const focused = option === state.focusedOption
          const selected = option === state.selectedOption
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
              data-testid={`combo-box-option-${option.value}`}
              onMouseMove={(): void =>
                dispatch({ type: ActionTypes.FOCUS_OPTION, option: option })
              }
              onClick={(): void => {
                dispatch({ type: ActionTypes.SELECT_OPTION, option: option })
              }}>
              {option.label}
            </li>
          )
        })}
        {state.filteredOptions.length === 0 ? (
          <li className="usa-combo-box__list-option--no-results">
            {noResults || 'No results found'}
          </li>
        ) : null}
      </ul>

      <div className="usa-combo-box__status usa-sr-only" role="status"></div>
      <span
        id={assistiveHintID}
        className="usa-sr-only"
        data-testid="combo-box-assistive-hint">
        {assistiveHint ||
          `When autocomplete results are available use up and down arrows to review
           and enter to select. Touch device users, explore by touch or with swipe
           gestures.`}
      </span>
    </div>
  )
}

export default ComboBox
