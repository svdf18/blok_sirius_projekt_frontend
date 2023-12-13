// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbKfNglXowpQnDO-Evwk1HkBPUWOQZeRw",
  authDomain: "blok-auth-firebase.firebaseapp.com",
  projectId: "blok-auth-firebase",
  storageBucket: "blok-auth-firebase.appspot.com",
  messagingSenderId: "218474524786",
  appId: "1:218474524786:web:6a48a69b65be011a5052eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);