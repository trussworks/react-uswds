import React from 'react';
import type { ComboBoxOption, CustomizableFilter } from './ComboBox';
import { FocusMode } from './ComboBox';
export declare enum ActionTypes {
    SELECT_OPTION = 0,
    CLEAR = 1,
    OPEN_LIST = 2,
    CLOSE_LIST = 3,
    FOCUS_OPTION = 4,
    UPDATE_FILTER = 5,
    BLUR = 6,
    CLEAR_SELECTION = 7,
    FOCUS_INPUT = 8
}
export type Action = {
    type: ActionTypes.SELECT_OPTION;
    option: ComboBoxOption;
} | {
    type: ActionTypes.CLEAR;
} | {
    type: ActionTypes.OPEN_LIST;
} | {
    type: ActionTypes.CLOSE_LIST;
} | {
    type: ActionTypes.FOCUS_OPTION;
    option: ComboBoxOption;
} | {
    type: ActionTypes.UPDATE_FILTER;
    value: string;
} | {
    type: ActionTypes.BLUR;
} | {
    type: ActionTypes.CLEAR_SELECTION;
} | {
    type: ActionTypes.FOCUS_INPUT;
};
export interface State {
    isOpen: boolean;
    selectedOption?: ComboBoxOption;
    focusedOption?: ComboBoxOption;
    focusMode: FocusMode;
    filteredOptions: ComboBoxOption[];
    inputValue: string;
    statusText: string;
}
export declare const useComboBox: (initialState: State, optionsList: ComboBoxOption[], disableFiltering: boolean, customizableFilter: CustomizableFilter) => [State, React.Dispatch<Action>];
