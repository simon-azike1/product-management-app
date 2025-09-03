import React, { createContext } from "react";
import useDisplayLogic from "../hooks/useDisplayLogic";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const displayLogic = useDisplayLogic();
  return (
    <ItemsContext.Provider value={displayLogic}>
      {children}
    </ItemsContext.Provider>
  );
};
