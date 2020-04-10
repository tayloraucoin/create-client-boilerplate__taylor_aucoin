export default target => {
  const pathnameSplit = window.location.pathname.split("/");

  if (target === "second") {
    return pathnameSplit[pathnameSplit.length - 3];
  }

  if (target === "getLast") {
    return pathnameSplit[pathnameSplit.length - 1];
  }

  if (target === "withoutLast") {
    return pathnameSplit
      .map(item => {
        if (pathnameSplit.indexOf(item) !== pathnameSplit.length - 1) {
          return item;
        }
        return null;
      })
      .filter(item => item);
  }

  return pathnameSplit[pathnameSplit.length - 1];
};
