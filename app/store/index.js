import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import application, {
  applicationInitialState
} from "./reducers/reducer-application";
import callList, { callListInitialState } from "./reducers/reducer-call-list";
import session, { sessionInitialState } from "./reducers/reducer-session";

export const combineInitialStates = {
  application: applicationInitialState,
  callList: callListInitialState,
  session: sessionInitialState
};

export default createStore(
  combineReducers({
    application,
    callList,
    session
  }),
  combineInitialStates,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
