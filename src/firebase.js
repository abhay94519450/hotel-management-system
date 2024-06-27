import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyDNehgrb16DsamnzAn6WSnGikcOFVD7DEI",
    authDomain: "portfoliooi.firebaseapp.com",
    databaseURL: "https://portfoliooi-default-rtdb.firebaseio.com",
    projectId: "portfoliooi",
    storageBucket: "portfoliooi.appspot.com",
    messagingSenderId: "1035366543159",
    appId: "1:1035366543159:web:0038b1fc2d15a1e1e3b4b2",
    measurementId: "G-SZS3RQ6RJH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
