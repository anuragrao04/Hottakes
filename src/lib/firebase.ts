import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA34rJzg3d64UWmR3UtxXVpqBDxBulVSg",
  authDomain: "hottakes-2d02e.firebaseapp.com",
  projectId: "hottakes-2d02e",
  storageBucket: "hottakes-2d02e.appspot.com",
  messagingSenderId: "302901816742",
  appId: "1:302901816742:web:7f3bb5109f3ad22de9b367",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
