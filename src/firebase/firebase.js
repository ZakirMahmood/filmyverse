import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmyverse-45e9f.firebaseapp.com",
  projectId: "filmyverse-45e9f",
  storageBucket: "filmyverse-45e9f.appspot.com",
  messagingSenderId: "104524944358",
  appId: "1:104524944358:web:d06485e1506c3279ec7c27"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;