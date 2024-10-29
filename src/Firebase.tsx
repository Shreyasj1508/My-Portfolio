import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3LjK1xMavWgyiv3fQnzSF-HdpgHj6pjw",
  authDomain: "portfolio-1574f.firebaseapp.com",
  projectId: "portfolio-1574f",
  storageBucket: "portfolio-1574f.appspot.com",
  messagingSenderId: "961509839126",
  appId: "1:961509839126:web:719a87b9087f5f9c27c037",
  measurementId: "G-3JZ9P9262H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);