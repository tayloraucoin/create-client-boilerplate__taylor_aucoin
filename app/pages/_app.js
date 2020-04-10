import { Router } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";

import {
  ApplicationContextProvider,
  ApplicationContext
} from "../utils/context-provider";
import { CssBody } from "../constants/styles/global";
import Modal from "../components/layout/Modal/Modal";
import Page from "../components/layout/Page/Page";
import Routing from "./_routing";
import dispatcher from "../store/actions/dispatcher";

export const history = createBrowserHistory();

const App = ({ dispatch, store }) => {
  const [pathHistory, setPathHistory] = useState([window.location.pathname]);

  /*
    Listens for changes in history. Sets hook state pathname in order to keep
    props fresh and avoid multiple triggers for a single route change.
  */
  history.listen(({ pathname }) => {
    setPathHistory([pathname, ...pathHistory]);
  });

  /* Triggers callDispatcher on valid pathname changes */
  useEffect(() => {
    if (pathHistory[0] !== pathHistory[1]) {
      dispatcher({
        dispatch,
        pathname: pathHistory[0],
        store
      });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [pathHistory, store.session]);

  return (
    <Router history={history}>
      <CssBody />
      <ApplicationContextProvider history={history} session={store.session}>
        <ApplicationContext.Consumer>
          {context => (
            <Page {...context}>
              <Routing context={context} />
            </Page>
          )}
        </ApplicationContext.Consumer>
      </ApplicationContextProvider>
      <Modal />
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch
});
const mapStateToProps = store => ({
  store
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
