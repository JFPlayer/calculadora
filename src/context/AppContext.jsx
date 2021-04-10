import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import initialState from "./initialState";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;