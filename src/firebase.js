// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const getDB = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBbbbB_GQnT6RjAl5oEXwB5xjyhLcEzBhg",
        authDomain: "ai-journey-50521.firebaseapp.com",
        projectId: "ai-journey-50521",
        storageBucket: "ai-journey-50521.appspot.com",
        messagingSenderId: "560218933148",
        appId: "1:560218933148:web:10faa12bb3b081213a6a59",
        measurementId: "G-SFXG95BTBB"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      return db
}
