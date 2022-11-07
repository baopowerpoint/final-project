import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";
import { useCollection } from "./useCollection";

export const useUpdateDoc = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { documents: users } = useCollection("users");

  const updateDocument = async (id) => {
    setError(null);
    setIsPending(true);

    try {
      if (users) {
        const user = users.find((user) => user.id === id);
        await updateDoc(doc(db, "users", id), {
          isPurchased: !user.isPurchased,
        });
      }
      setIsPending(false);
    } catch (e) {
      setError(e);
      setIsPending(false);
    }
  };
  return { updateDocument, error, isPending };
};
