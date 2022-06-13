import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  //khởi tạo error và loading state
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "login", payload: res.user });
      await updateDoc(doc(db, "users", res.user.uid), {
        isOnline: true,
      });
      setIsPending(false);
    } catch (err) {
      setError(err);
      console.log(err.message);
      setIsPending(false);
    }
  };
  return { login, isPending, error };
};
