/** Modal Types */
export interface ModalState {
    // string is the key of the open modal. This only allows a single modal to be open in the app at any time.
    openModalKey: string
}

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export interface OpenModalAction {
    type: typeof OPEN_MODAL;
    payload: string;
}

export interface CloseModalAction {
    type: typeof CLOSE_MODAL;
    payload: string;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;

export interface AppState {
    modalState: ModalState
}