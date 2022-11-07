import { createContext, useEffect } from "react";

import { useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null, authIsReady: false };
    case "signup":
      return { ...state, user: action.payload };
    case "authIsReady":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          dispatch({ type: "authIsReady", payload: user });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const [user, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  console.log(user);
  return (
    <AuthContext.Provider value={{ ...user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
