import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./init-firebase";

const firebase = getFirestore(app);

interface Comment {
  name: string;
  message: string;
}

export const createComment = async (comment: Comment) => {
  return await addDoc(collection(firebase, "client-02"), {
    ...comment,
  })
    .then(() => {
      return {
        status: 200,
        message: "Success to add Comment",
      };
    })
    .catch((e) => {
      return {
        status: 400,
        message: e.messsage,
      };
    });
};

export const getComments = async () => {
  const snapshot = await getDocs(collection(firebase, "client-02"));
  const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
  return { status: 200, data };
};
