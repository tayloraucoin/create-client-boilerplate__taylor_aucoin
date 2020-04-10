import gql from "graphql-tag";

export default gql`
  query userById($id: UUID!) {
    userById(input: { id: $id }) {
      user {
        id
        email
        firstName
        isAdmin
        lastName
        profileImage
      }
    }
  }
`;
