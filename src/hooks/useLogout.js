import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { user, dispatch } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        isOnline: false,
      });
      await signOut(auth);
      dispatch({ type: "logout" });

      setIsPending(false);
    } catch (e) {
      setError(e);
    }
  };
  return { logout, isPending, error };
};
