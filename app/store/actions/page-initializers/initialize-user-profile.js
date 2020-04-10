import { addMultipleToCallList } from "../actions-call-list";
import INITIALIZE_USER_PROFILE_PAGE from "../../../gql/queries/page-initializers/initialize-user-profile-page";
import queryApollo from "../../../utils/apollo/query-apollo";

const setUserProfile = payload => ({
  type: "SESSION.UPDATE",
  payload
});

export const requestUserProfile = async (dispatch, store) => {
  if (!store.callList.initializeUserProfile && store.session.currentUser) {
    const { currentUser } = store.session;
    const userProfileReturn = await queryApollo(INITIALIZE_USER_PROFILE_PAGE, {
      id: currentUser.id
    });

    dispatch(
      addMultipleToCallList([
        {
          name: "initializeUserProfile",
          timestamp: Date.now()
        },
        {
          name: "currentUserFull",
          timestamp: Date.now()
        }
      ])
    );

    dispatch(setUserProfile({ currentUser: userProfileReturn.data.userById }));
  }
};
