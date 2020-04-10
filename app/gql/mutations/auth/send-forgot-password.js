import gql from "graphql-tag";

export default gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email })
  }
`;
