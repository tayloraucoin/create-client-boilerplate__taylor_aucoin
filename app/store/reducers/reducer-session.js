export const sessionInitialState = {
  currentUser: {}, // TEMP
  isLoading: true,
  isLoggedIn: false,
  toReset: false
};

export default (state = sessionInitialState, action) => {
  switch (action.type) {
    case "SESSION.RESET":
      localStorage.removeItem("authToken");
      return {
        ...sessionInitialState,
        isLoading: false
      };
    case "SESSION.UPDATE":
      return {
        ...state,
        ...action.payload,
        currentUser: {
          ...state.currentUser,
          ...action.payload.currentUser
        }
      };
  }
  return state;
};
