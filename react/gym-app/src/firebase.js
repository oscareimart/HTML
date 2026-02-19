import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJVIcS5FWhMz49hscrnF8DweFIxsBiDjw",
  authDomain: "gym-manager-7c089.firebaseapp.com",
  projectId: "gym-manager-7c089",
  storageBucket: "gym-manager-7c089.firebasestorage.app",
  messagingSenderId: "1044258700487",
  appId: "1:1044258700487:web:14a3c33962a90a255c92e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
