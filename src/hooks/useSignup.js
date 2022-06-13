import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { updateProfile, updateEmail } from "firebase/auth";

export const useSignup = () => {
  //khởi tạo error, pending
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user, dispatch } = useAuthContext();

  //hàm signup
  const signup = async (email, password, userName) => {
    setError(null);
    setIsPending(true);
    //dùng try catch vì muốn lấy phần error để xử lý trong giao diện
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "signup", payload: res.user });
      await updateEmail(auth.currentUser, email);
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        isOnline: true,
        isPurchased: false,
        displayName: userName,
        email,
      });

      setIsPending(false);
    } catch (e) {
      setError(e);
      setIsPending(false);
    }
  };
  return { signup, error, isPending };
};
