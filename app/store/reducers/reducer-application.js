import { MODAL_RENDER, MODAL_TOGGLE } from "../actions/actions-application";

export const applicationInitialState = {
  modal: {
    children: null,
    visible: false
  }
};

export default (state = applicationInitialState, action) => {
  switch (action.type) {
    case MODAL_RENDER:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          visible: true
        }
      };
    case MODAL_TOGGLE:
      return {
        ...state,
        modal: {
          ...state.modal,
          visible: action.payload
        }
      };
  }
  return state;
};
