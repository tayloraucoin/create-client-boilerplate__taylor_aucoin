import gql from "graphql-tag";

export default gql`
  mutation updateUserProfileComplete(
    $deleteItemIds: [UUID]
    $dob: Datetime
    $firstName: String
    $id: UUID!
    $lastName: String
    $linkItems: [LinkItemInput]
    $origin: String
    $profileImage: String
    $residence: String
    $socialHandle: Boolean
    $socialHandleId: UUID
    $updateItemIds: [UUID]
  ) {
    updateUserProfileComplete(
      input: {
        id: $id
        deleteItemIds: $deleteItemIds
        dob: $dob
        firstName: $firstName
        lastName: $lastName
        linkItems: $linkItems
        origin: $origin
        profileImage: $profileImage
        residence: $residence
        socialHandle: $socialHandle
        socialHandleId: $socialHandleId
        updateItemIds: $updateItemIds
      }
    ) {
      user {
        id
        dob
        firstName
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
  }
`;
