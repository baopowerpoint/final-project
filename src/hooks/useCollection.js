import { db } from "../firebase/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useCollection = (collectionRef) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unSub = onSnapshot(
      collection(db, collectionRef),
      (snapshot) => {
        setDocuments(
          snapshot.docs.map((user) => {
            return { ...user.data(), id: user.id };
          })
        );
      },
      (error) => {
        setError(error);
      }
    );
    setIsPending(false);
    return () => unSub();
  }, [collectionRef]);
  return { documents, error, isPending };
};
