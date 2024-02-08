import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZZypuDsZFBVsSZCAekXZ83k_A9mnlX8",
  authDomain: "house-marketplace-app-87cff.firebaseapp.com",
  projectId: "house-marketplace-app-87cff",
  storageBucket: "house-marketplace-app-87cff.appspot.com",
  messagingSenderId: "233608167557",
  appId: "1:233608167557:web:f8315d33178f8c149569ec",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
