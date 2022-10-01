import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; This still uses the depreciated asyncstorage dependency from react-native
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

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

//Initialize Authentication (Allows more control, as seen in initializeAuth doc, than getAuth and allows us to use the not depreciated AsyncStorage)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };