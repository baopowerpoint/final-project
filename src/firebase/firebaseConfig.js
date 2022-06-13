import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyFCNO64kJazmm0QZb12RsRnrjlHMGxs8",
  authDomain: "minh-hien-web.firebaseapp.com",
  projectId: "minh-hien-web",
  storageBucket: "minh-hien-web.appspot.com",
  messagingSenderId: "924667083214",
  appId: "1:924667083214:web:194bb0c2c9527999dc139f",
  measurementId: "G-JXM5CSB6YX",
};
//khởi tạo app để sử dụng các dịch vụ firebase ( bắt buộc)
export const app = initializeApp(firebaseConfig);
//khởi tạo dịch vụ xác thực tài khoản
export const auth = getAuth(app);
//khởi tạo dịch vụ database
export const db = getFirestore(app);
//khởi tạo dịch vụ lưu trữ firebase
export const storage = getStorage(app);
