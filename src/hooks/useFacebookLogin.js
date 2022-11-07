import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useFacebookLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();
  const provider = new FacebookAuthProvider();

  const facebookLogin = async () => {
    setIsPending(true);
    setError(null);

    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      dispatch({ type: "login", payload: res.user });
      await setDoc(doc(db, "users", res.user.uid), {
        isOnline: true,
        isPurchased: false,
        displayName: res.user.displayName,
        email: res.user.email,
      });
      setIsPending(false);
    } catch (e) {
      setError(e);
      console.log(e);
      setIsPending(false);
    }
  };
  return { facebookLogin, isPending, error };
};
