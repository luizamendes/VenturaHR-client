import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  user: {
    name: localStorage.getItem("user") || "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      throw new Error(`No such type of ${action.type}`);
  }
}

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = [state, dispatch];

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
