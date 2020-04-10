export const logoutUser = () => ({
  type: "SESSION.RESET"
});

export const updateSession = payload => ({
  type: "SESSION.UPDATE",
  payload
});
