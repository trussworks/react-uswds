import React, {
  KeyboardEvent,
  FocusEvent,
  useEffect,
  useRef,
  useReducer,
} from 'react'
import classnames from 'classnames'

interface ComboBoxOption {
  value: string
  label: string
}

enum Direction {
  Previous = -1,
  Next = 1,
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
  defaultValue?: string
  assistiveHint?: string
  disabled?: boolean
  setFieldValue: (
    field: string,
    value?: string,
    shouldValidate?: boolean
  ) => void
  inputProps?: JSX.IntrinsicElements['input']
  selectProps?: JSX.IntrinsicElements['select']
}

const optionFilter = (needle: string): ((event: ComboBoxOption) => boolean) => {
  return (option: ComboBoxOption): boolean =>
    option.label.toLowerCase().indexOf(needle.toLowerCase()) != -1
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
      aria-autocomplete="list"
      aria-controls=""
      type="text"
      {...inputProps}
      autoCapitalize="off"
      autoComplete="off"
      ref={inputRef}
    />
  )
}

interface State {
  isOpen: boolean
  selectedOption?: ComboBoxOption
  focusedOption?: ComboBoxOption
  focusMode: FocusMode
  filter?: string
  filteredOptions: ComboBoxOption[]
  inputValue: string
}

type Action =
  | {
      type: 'SELECT_OPTION'
      option: ComboBoxOption
    }
  | {
      type: 'CLEAR'
    }
  | {
      type: 'OPEN_LIST'
    }
  | {
      type: 'CLOSE_LIST'
    }
  | {
      type: 'FOCUS_OPTION'
      option: ComboBoxOption
    }
  | {
      type: 'UPDATE_FILTER'
      value: string
    }

export const ComboBox = (props: ComboBoxProps): React.ReactElement => {
  const {
    id,
    name,
    className,
    options,
    defaultValue,
    disabled,
    setFieldValue,
    assistiveHint,
    selectProps,
    inputProps,
  } = props

  const isDisabled = !!disabled

  let defaultLabel = ''
  let selectedOption
  if (defaultValue) {
    const defaultOption = options.find((opt: ComboBoxOption): boolean => {
      return opt.value === defaultValue
    })
    if (defaultOption) {
      defaultLabel = defaultOption.label
      selectedOption = defaultOption
    }
  }

  const initialState: State = {
    isOpen: false,
    selectedOption: selectedOption,
    focusedOption: undefined,
    focusMode: FocusMode.None,
    filteredOptions: props.options,
    filter: undefined,
    inputValue: defaultLabel,
  }

  function reducer(state: State, action: Action): State {
    // console.debug(action)
    switch (action.type) {
      case 'SELECT_OPTION':
        props.setFieldValue(props.name, action.option.value)
        return {
          ...state,
          isOpen: false,
          selectedOption: action.option,
          focusMode: FocusMode.Input,
          inputValue: action.option.label,
        }
      case 'UPDATE_FILTER': {
        const newState = {
          ...state,
          isOpen: true,
          filter: action.value,
          filteredOptions: options.filter(optionFilter(action.value)),
          inputValue: action.value,
        }

        if (
          state.selectedOption &&
          state.selectedOption.label !== action.value
        ) {
          newState.selectedOption = undefined
        }

        return newState
      }
      case 'OPEN_LIST':
        return {
          ...state,
          isOpen: true,
          focusMode: FocusMode.Input,
          focusedOption: state.selectedOption,
        }
      case 'CLOSE_LIST':
        return {
          ...state,
          isOpen: false,
          focusMode: FocusMode.Input,
          focusedOption: undefined,
          inputValue: state.selectedOption ? state.selectedOption.label : '',
        }
      case 'FOCUS_OPTION':
        return {
          ...state,
          isOpen: true,
          focusedOption: action.option,
          focusMode: FocusMode.Item,
        }
      case 'CLEAR':
        props.setFieldValue(props.name, undefined)
        return {
          ...state,
          inputValue: '',
          selectedOption: undefined,
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const containerRef = useRef<HTMLDivElement>(null)

  // TODO implement these
  const listID = ''
  const assistiveHintID = ''
  const selectID = ''

  const itemRef = useRef<HTMLLIElement>(null)
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
      dispatch({ type: 'CLOSE_LIST' })
    } else if (event.key === 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      dispatch({ type: 'FOCUS_OPTION', option: state.filteredOptions[0] })
    } else if (event.key === 'Tab') {
      event.preventDefault()
      dispatch({ type: 'FOCUS_OPTION', option: state.filteredOptions[0] })
    } else if (event.key === 'Enter' && state.inputValue !== '') {
      event.preventDefault()
      dispatch({ type: 'CLOSE_LIST' })
    }
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const target = event.relatedTarget

    if (
      !target ||
      (target instanceof Node && !containerRef.current?.contains(event.target))
    ) {
      dispatch({ type: 'CLOSE_LIST' })
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
      dispatch({ type: 'FOCUS_OPTION', option: newOption })
    } else {
      const newIndex = currentIndex + change
      if (newIndex < 0) {
        dispatch({ type: 'CLOSE_LIST' })
      } else if (newIndex <= state.filteredOptions.length - 1) {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = state.filteredOptions[newIndex]
        dispatch({ type: 'FOCUS_OPTION', option: newOption })
      }
    }
  }

  const handleListItemKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      dispatch({ type: 'CLOSE_LIST' })
    } else if (event.key === 'Tab' || event.key === 'Enter') {
      event.preventDefault()
      if (state.focusedOption) {
        dispatch({ type: 'SELECT_OPTION', option: state.focusedOption })
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
          dispatch({ type: 'UPDATE_FILTER', value: e.target.value })
        }
        onClick={(): void => dispatch({ type: 'OPEN_LIST' })}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        value={state.inputValue}
        focused={state.focusMode === FocusMode.Input}
        role="combobox"
        id="TBD"
        className="usa-combo-box__input"
        aria-owns={listID}
        aria-describedby={assistiveHintID}
        aria-expanded={state.isOpen}
        data-testid="combo-box-input"
        disabled={isDisabled}
        {...inputProps}
      />
      <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
        <button
          type="button"
          className="usa-combo-box__clear-input"
          aria-label="Clear the select contents"
          onClick={(): void => dispatch({ type: 'CLEAR' })}
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
            dispatch({ type: state.isOpen ? 'CLOSE_LIST' : 'OPEN_LIST' })
          }>
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
                dispatch({ type: 'FOCUS_OPTION', option: option })
              }
              onClick={(): void => {
                dispatch({ type: 'SELECT_OPTION', option: option })
              }}>
              {option.label}
            </li>
          )
        })}
        {state.filteredOptions.length === 0 ? (
          <li className="usa-combo-box__list-option--no-results">
            No results found
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
