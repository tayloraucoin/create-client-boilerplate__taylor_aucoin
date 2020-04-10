import gql from "graphql-tag";

export default gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
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
