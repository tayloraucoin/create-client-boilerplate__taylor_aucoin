import "./constants/styles/importer.scss";
import "react-notifications-component/dist/theme.css";

import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/_app";
import Verifier from "./pages/_verifier";
import apollo from "./apollo-client";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apollo}>
      <Verifier>
        <App />
      </Verifier>
    </ApolloProvider>
  </Provider>,
  document.getElementById("application")
);
