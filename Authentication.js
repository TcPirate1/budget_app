// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvc4t8jFRDuBp96dzuWmI9ZLaXbTkc6pA",
  authDomain: "budgetapp-3c941.firebaseapp.com",
  projectId: "budgetapp-3c941",
  storageBucket: "budgetapp-3c941.appspot.com",
  messagingSenderId: "377544935520",
  appId: "1:377544935520:web:c7e7f9cda020d7f6c25b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);