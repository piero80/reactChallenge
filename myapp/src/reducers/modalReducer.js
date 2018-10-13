import { SHOW_MODAL, HIDE_MODAL } from "../actions/constants";

const initialState = {
  modalType: null,
  modalProps: {}
};

function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modal;
