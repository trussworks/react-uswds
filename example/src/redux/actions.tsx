
import { OPEN_MODAL, CLOSE_MODAL } from "./types";

export function openModal( modalKey: string) {
  return {
    type: OPEN_MODAL,
    payload: modalKey
  };
}

export function closeModal(modalKey: string) {
  return {
    type: CLOSE_MODAL,
    payload: modalKey
  };
}
