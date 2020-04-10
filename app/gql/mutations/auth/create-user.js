import gql from "graphql-tag";

export default gql`
  mutation register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      user {
        id
        email
        firstName
        isAdmin
        lastName
      }
      token
    }
  }
`;
