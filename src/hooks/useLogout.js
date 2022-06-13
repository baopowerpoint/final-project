import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await signOut(auth);
      dispatch({ type: "logout" });
      setIsPending(false);
    } catch (e) {
      setError(e);
    }
  };
  return { logout, isPending, error };
};
