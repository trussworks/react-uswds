import { ActionTypes } from './constants.js';
import { FocusMode } from '../../../utils/constants.js';
import { ComboBoxOption, CustomizableFilter } from './ComboBox/ComboBox.js';
import { default as React } from 'react';

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
export interface FilterResults {
    closestMatch: ComboBoxOption;
    optionsToDisplay: ComboBoxOption[];
}
declare const useComboBox: (initialState: State, optionsList: ComboBoxOption[], disableFiltering: boolean, customizableFilter: CustomizableFilter) => [State, React.Dispatch<Action>];
export default useComboBox;
