export const MODAL_RENDER = "MODAL_RENDER";
export const MODAL_TOGGLE = "MODAL_TOGGLE";

export const renderModal = props => {
  return {
    type: MODAL_RENDER,
    payload: props
  };
};

export const setModalToggle = payload => {
  return {
    type: MODAL_TOGGLE,
    payload
  };
};
