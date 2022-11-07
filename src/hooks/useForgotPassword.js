import { Auth } from "firebase/auth";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

export const useForgotPassword = () => {
  const [error, setError] = useState(null);
  const forgotPassword = async () => {};
};
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
