import "cross-fetch/polyfill";
import ApolloClient from "apollo-boost";

const pointProduction = true;

const apollo = new ApolloClient({
  uri: pointProduction
    ? "https://api.theagoranetwork.com/graphql"
    : "http://localhost:8349/graphql",
  fetchOptions: {
    credentials: "include"
  },
  defaultOptions: {
    watchQuery: {
      returnPartialData: true
    }
  },
  request: async operation => {
    const token = localStorage.getItem("authToken");
    if (token) {
      operation.setContext({
        headers: {
          authorization: token && token !== "undefined" ? `Bearer ${token}` : ""
        }
      });
    }
  }
});

export default apollo;
