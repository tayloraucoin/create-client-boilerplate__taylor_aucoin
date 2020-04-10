import { requestUserProfile } from "./page-initializers/initialize-user-profile";
import getLastFromPathname from "../../utils/get-last-from-pathname";

export default async ({ dispatch, pathname, store }) => {
  const triggers = {
    "/create-profile": () => {},
    "/edit-profile": requestUserProfile
  };

  const pathnameSplit = pathname.split("/");

  let call =
    triggers[pathname] ||
    (pathnameSplit.length > 2
      ? triggers[`/${getLastFromPathname("withoutLast").join("/")}`]
      : null);
  if (!call && pathname.indexOf("/photo/") > -1) call = triggers["/photo"];
  if (call) call(dispatch, store);
};
