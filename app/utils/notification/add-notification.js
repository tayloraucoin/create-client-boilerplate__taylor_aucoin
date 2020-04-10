import { store } from "react-notifications-component";

import NOTIFICATION_TYPES from "../../constants/notification-types";

export default ({ dismiss, message, title, type }) => {
  const defaults = {
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true
    }
  };

  const fields = {
    ...defaults,
    ...NOTIFICATION_TYPES[type],
    message,
    type
  };

  if (dismiss) {
    fields.dismiss = {
      ...fields.dismiss,
      duration: dismiss
    };
  }
  if (title) fields.title = title;

  store.addNotification(fields);
};
