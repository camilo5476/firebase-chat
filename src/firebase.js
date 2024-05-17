// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpXZIWhVTv6mfQx_KkfJw6f7_oZgf8ZA",
  authDomain: "chat-react-8a82d.firebaseapp.com",
  projectId: "chat-react-8a82d",
  storageBucket: "chat-react-8a82d.appspot.com",
  messagingSenderId: "903051329125",
  appId: "1:903051329125:web:26d459c73672fd9796508c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);