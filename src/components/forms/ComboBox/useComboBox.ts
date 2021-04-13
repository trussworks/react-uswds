import React, { useReducer } from 'react'
import type { ComboBoxOption } from './ComboBox'
import { FocusMode } from './ComboBox'

export enum ActionTypes {
  SELECT_OPTION,
  CLEAR,
  OPEN_LIST,
  CLOSE_LIST,
  FOCUS_OPTION,
  UPDATE_FILTER,
  BLUR,
}

export type Action =
  | {
      type: ActionTypes.SELECT_OPTION
      option: ComboBoxOption
    }
  | {
      type: ActionTypes.CLEAR
    }
  | {
      type: ActionTypes.OPEN_LIST
    }
  | {
      type: ActionTypes.CLOSE_LIST
    }
  | {
      type: ActionTypes.FOCUS_OPTION
      option: ComboBoxOption
    }
  | {
      type: ActionTypes.UPDATE_FILTER
      value: string
    }
  | {
      type: ActionTypes.BLUR
    }
export interface State {
  isOpen: boolean
  selectedOption?: ComboBoxOption
  focusedOption?: ComboBoxOption
  focusMode: FocusMode
  filter?: string
  filteredOptions: ComboBoxOption[]
  inputValue: string
}

export const useComboBox = (
  initialState: State,
  optionsList: ComboBoxOption[],
  disableFiltering = false
): [State, React.Dispatch<Action>] => {
  const isPartialMatch = (
    needle: string
  ): ((event: ComboBoxOption) => boolean) => {
    return (option: ComboBoxOption): boolean =>
      option.label.toLowerCase().includes(needle.toLowerCase())
  }

  const filterOptions = (needle: string): ComboBoxOption[] =>
    disableFiltering ? optionsList : optionsList.filter(isPartialMatch(needle))

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionTypes.SELECT_OPTION:
        return {
          ...state,
          isOpen: false,
          selectedOption: action.option,
          focusMode: FocusMode.Input,
          inputValue: action.option.label,
          filter: undefined,
          filteredOptions: optionsList,
        }
      case ActionTypes.UPDATE_FILTER: {
        const newState = {
          ...state,
          isOpen: true,
          filter: action.value,
          filteredOptions: filterOptions(action.value),
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
      case ActionTypes.OPEN_LIST:
        return {
          ...state,
          isOpen: true,
          focusMode: FocusMode.Input,
          focusedOption: state.selectedOption,
        }
      case ActionTypes.CLOSE_LIST: {
        const newState = {
          ...state,
          isOpen: false,
          focusMode: FocusMode.Input,
          focusedOption: undefined,
        }

        if (state.filteredOptions.length === 0) {
          newState.filteredOptions = optionsList
          newState.inputValue = ''
        }

        if (state.selectedOption) {
          newState.inputValue = state.selectedOption.label
        }

        return newState
      }

      case ActionTypes.FOCUS_OPTION:
        return {
          ...state,
          isOpen: true,
          focusedOption: action.option,
          focusMode: FocusMode.Item,
        }
      case ActionTypes.CLEAR:
        return {
          ...state,
          inputValue: '',
          isOpen: false,
          focusMode: FocusMode.Input,
          selectedOption: undefined,
          filter: undefined,
          filteredOptions: optionsList,
        }
      case ActionTypes.BLUR: {
        const newState = {
          ...state,
          isOpen: false,
          focusMode: FocusMode.None,
          focusedOption: undefined,
        }

        if (state.filteredOptions.length === 0) {
          newState.filteredOptions = optionsList
        }

        if (!state.selectedOption) {
          newState.inputValue = ''
        }

        return newState
      }
      default:
        throw new Error()
    }
  }

  return useReducer(reducer, initialState)
}
