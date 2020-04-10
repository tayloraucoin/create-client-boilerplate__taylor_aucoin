import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

import { updateSession } from "../store/actions/actions-session";
import FETCH_USER from "../gql/queries/auth/fetch-user";
import queryApollo from "../utils/apollo/query-apollo";

const fetchUser = async (jwtCredentials, updateSession) => {
  const { data, error, loading } = await queryApollo(FETCH_USER, {
    id: jwtCredentials.user_id
  });

  if (error) console.log("fetch user error", error);

  if (!loading && data && Object.keys(data).length) {
    const { user } = data.userById;
    const currentUser = { ...user };

    updateSession({ currentUser, isLoading: false, isLoggedIn: true });
  }
};

const Verifier = ({ children, updateSession }) => {
  const [jwtCredentials, setjwtCredentials] = useState();

  /* Grab authToken from localStorage */
  const authToken = localStorage.getItem("authToken");

  /* Perform quick verification req to get jwtCredentials */
  if (authToken && !jwtCredentials) {
    axios
      .get("https://api.example.com/verify", {
        // TO CHANGE
        headers: {
          "auth-bearer": authToken
        }
      })
      .then(res => {
        setjwtCredentials(res.data.verifiedJwt || "unrecognized");
      })
      .catch(err => {
        console.log("jwt verifification err", err);
      });
  } else if (!jwtCredentials) {
    setjwtCredentials("unrecognized");
  }

  /* Fetch user if jwtCredentials are valid */
  if (jwtCredentials === "unrecognized") {
    updateSession({ isLoading: false });
  } else if (jwtCredentials) {
    fetchUser(jwtCredentials, updateSession);
  }

  return <>{children}</>;
};

const mapDispatchToProps = dispatch => ({
  updateSession: session => {
    dispatch(updateSession(session));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Verifier);
