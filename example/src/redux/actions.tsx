
import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export function openModalAction( modalKey: string) {
  return {
    type: OPEN_MODAL,
    payload: modalKey
  };
}

export function closeModalAction(modalKey: string) {
  return {
    type: CLOSE_MODAL,
    payload: modalKey
  };
}
