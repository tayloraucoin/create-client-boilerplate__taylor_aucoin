import gql from "graphql-tag";

export default gql`
  query initializeUserProfile($id: UUID!) {
    userById(id: $id) {
      id
      bio
      dob
      email
      firstName
      gender
      isAdmin
      lastName
      origin
      profileImage
      residence
      socialHandle {
        id
        linkItems {
          nodes {
            id
            type
            url
          }
        }
      }
    }
  }
`;

/*
social_handle_id
*/
