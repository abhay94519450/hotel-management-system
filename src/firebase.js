import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyAdMrcFDpKBsAE_mgMmzeuUcJHi1W4co1o",
  authDomain: "inifibackojj.firebaseapp.com",
  projectId: "inifibackojj",
  storageBucket: "inifibackojj.appspot.com",
  messagingSenderId: "317047502444",
  appId: "1:317047502444:web:087c5dac6d1a1b6c4dca49"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
