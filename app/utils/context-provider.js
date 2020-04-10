import React from "react";

export const ApplicationContext = React.createContext();

export const ApplicationContextProvider = props => {
  const contextValue = { ...props };
  delete contextValue.children;

  return (
    <ApplicationContext.Provider value={contextValue}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
