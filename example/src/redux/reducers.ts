import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ModalActionTypes,
  AppState
} from "./types";

export const initialState: AppState = {
  modalState : {
    openModalKey: ''
  }
};

export function rootReducer (
  state = initialState,
  action: ModalActionTypes
): AppState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalState: {
          openModalKey: action.payload
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalState: {
          openModalKey: ''
        }
      }
    default:
      return state
  }
}