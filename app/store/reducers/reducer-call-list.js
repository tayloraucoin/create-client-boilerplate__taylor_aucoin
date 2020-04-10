export const callListInitialState = {};

export default (state = callListInitialState, action) => {
  switch (action.type) {
    case "CALL_LIST.ADD":
      const { name, timestamp } = action.payload;
      return {
        ...state,
        [name]: timestamp
      };
    case "CALL_LIST.ADD_MULTIPLE":
      const getNewState = () => {
        const newState = { ...state };
        action.payload.forEach(call => {
          newState[call.name] = call.timestamp;
        });
        return newState;
      };
      return getNewState();
  }
  return state;
};
