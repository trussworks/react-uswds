import React, {
  KeyboardEvent,
  FocusEvent,
  useEffect,
  useRef,
  useReducer,
} from 'react'
import classnames from 'classnames'

interface ComboBoxOption {
  id: string
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
  setFieldValue: (
    field: string,
    value: string,
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

export const ComboBox = (
  props: ComboBoxProps //& JSX.IntrinsicElements['select']
): React.ReactElement => {
  const {
    id,
    name,
    className,
    options,
    defaultValue,
    setFieldValue,
    assistiveHint,
    ...selectProps
  } = props

  let defaultLabel = ''
  if (defaultValue) {
    const defaultOption = options.find((opt: ComboBoxOption): boolean => {
      return opt.id === defaultValue
    })
    if (defaultOption) {
      defaultLabel = defaultOption.label
    }
  }

  interface State {
    isOpen: boolean
    selectedOption: ComboBoxOption | undefined
    focusedOption: ComboBoxOption | undefined
    focusMode: FocusMode
    filter: string | undefined
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
        filter: string
      }

  function reducer(state: State, action: Action): State {
    // console.debug(action)
    switch (action.type) {
      case 'SELECT_OPTION':
        props.setFieldValue(props.name, action.option.id)
        return {
          ...state,
          isOpen: false,
          selectedOption: action.option,
          focusMode: FocusMode.Input,
          inputValue: action.option.label,
        }
      case 'UPDATE_FILTER':
        return {
          ...state,
          isOpen: true,
          filter: action.filter,
          filteredOptions: options.filter(optionFilter(action.filter)),
          inputValue: action.filter,
        }
      case 'OPEN_LIST':
        return {
          ...state,
          isOpen: true,
          focusMode: FocusMode.Input,
          focusedOption: undefined,
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
          focusedOption: action.option,
          focusMode: FocusMode.Item,
        }
      case 'CLEAR':
        return {
          ...state,
          inputValue: '',
          selectedOption: undefined,
        }
      default:
        throw new Error()
    }
  }

  const initialState: State = {
    isOpen: false,
    selectedOption: undefined,
    focusedOption: undefined,
    focusMode: FocusMode.None,
    filteredOptions: props.options,
    filter: undefined,
    inputValue: defaultLabel,
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
    } else if (event.key === 'Tab' && state.inputValue !== '') {
      event.preventDefault()
      dispatch({ type: 'FOCUS_OPTION', option: state.filteredOptions[0] })
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
      } else {
        // eslint-disable-next-line security/detect-object-injection
        const newOption = state.filteredOptions[newIndex]
        dispatch({ type: 'FOCUS_OPTION', option: newOption })
      }
    }
  }

  const handleListItemKeyDown = (event: KeyboardEvent): void => {
    if (event.key == 'Escape') {
      return dispatch({ type: 'CLOSE_LIST' })
    }

    if (event.key == 'ArrowDown' || event.key == 'Down') {
      event.preventDefault()
      focusSibling(dispatch, state, Direction.Next)
    } else if (event.key == 'ArrowUp' || event.key == 'Up') {
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
        value={state.selectedOption?.id}
        {...selectProps}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <Input
        onChange={(e): void =>
          dispatch({ type: 'UPDATE_FILTER', filter: e.target.value })
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
      />
      <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
        <button
          type="button"
          className="usa-combo-box__clear-input"
          aria-label="Clear the select contents"
          onClick={(): void => dispatch({ type: 'CLEAR' })}>
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
              value={option.id}
              key={option.id}
              className={itemClasses}
              tabIndex={focused ? 0 : -1}
              role="option"
              aria-selected={selected}
              aria-setsize={64}
              aria-posinset={index + 1}
              id={listID + `--option-${index}`}
              onKeyDown={handleListItemKeyDown}
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
