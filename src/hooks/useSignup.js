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
  const signup = async (email, password, userName, fullName, phoneNumber) => {
    setError(null);
    setIsPending(true);
    //dùng try catch vì muốn lấy phần error để xử lý trong giao diện
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      await updateEmail(auth.currentUser, email);
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      dispatch({ type: "signup", payload: res.user });
      await setDoc(doc(db, "users", res.user.uid), {
        isOnline: true,
        isPurchased: false,
        displayName: userName,
        fullName,
        phoneNumber,
        email,
        ip: [""],
      });

      setIsPending(false);
    } catch (e) {
      setError(e);
      setIsPending(false);
    }
  };
  return { signup, error, isPending };
};
