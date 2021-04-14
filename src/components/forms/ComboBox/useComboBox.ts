import React, { useReducer } from 'react'
import type { ComboBoxOption, CustomizableFilter } from './ComboBox'
import { FocusMode } from './ComboBox'
import { generateDynamicRegExp } from './utils'

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
  filteredOptions: ComboBoxOption[]
  inputValue: string
  closestMatch?: ComboBoxOption
}

interface FilterResults {
  closestMatch: ComboBoxOption
  optionsToDisplay: ComboBoxOption[]
}

export const useComboBox = (
  initialState: State,
  optionsList: ComboBoxOption[],
  disableFiltering: boolean,
  customizableFilter: CustomizableFilter
): [State, React.Dispatch<Action>] => {
  const getPotentialMatches = (needle: string): FilterResults => {
    const regex = generateDynamicRegExp(
      customizableFilter.filter,
      needle,
      customizableFilter.extras
    )
    const filteredOptions = optionsList.filter((option) =>
      regex.test(option.label.toLowerCase())
    )

    return {
      closestMatch: filteredOptions[0],
      optionsToDisplay: disableFiltering ? optionsList : filteredOptions,
    }
  }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case ActionTypes.SELECT_OPTION:
        return {
          ...state,
          isOpen: false,
          selectedOption: action.option,
          focusMode: FocusMode.Input,
          inputValue: action.option.label,
          filteredOptions: optionsList,
          closestMatch: action.option,
        }
      case ActionTypes.UPDATE_FILTER: {
        const { closestMatch, optionsToDisplay } = getPotentialMatches(
          action.value
        )

        const newState = {
          ...state,
          isOpen: true,
          filteredOptions: optionsToDisplay,
          inputValue: action.value,
        }

        if (disableFiltering || !state.selectedOption) {
          newState.closestMatch = closestMatch
        } else if (state.selectedOption) {
          newState.closestMatch = state.selectedOption
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
          closestMatch: action.option,
        }
      case ActionTypes.CLEAR:
        return {
          ...state,
          inputValue: '',
          isOpen: false,
          focusMode: FocusMode.Input,
          selectedOption: undefined,
          filteredOptions: optionsList,
          closestMatch: undefined,
        }
      case ActionTypes.BLUR: {
        const newState = {
          ...state,
          isOpen: false,
          focusMode: FocusMode.None,
          focusedOption: undefined,
          filteredOptions: optionsList,
        }

        if (!state.selectedOption) {
          newState.inputValue = ''
          newState.closestMatch = optionsList[0]
        } else {
          newState.inputValue = state.selectedOption.label
          newState.closestMatch = state.selectedOption
        }

        return newState
      }
      default:
        throw new Error()
    }
  }

  return useReducer(reducer, initialState)
}
