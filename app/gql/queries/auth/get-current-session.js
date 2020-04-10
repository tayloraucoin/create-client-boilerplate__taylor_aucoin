import gql from "graphql-tag";

export default gql`
  {
    session @client {
      currentUser {
        id
        bio
        dob
        email
        firstName
        lastName
        location
      }
      isAdmin
      isLoading
      isLoggedIn
      toReset
    }
  }
`;
