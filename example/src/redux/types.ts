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

/** this represents what the state object will look like */
/** Assume each modal has a unique key, open modals is an array of keys for modals, or have a single one open at a time */
export interface AppState {
    modalState: ModalState
}