import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCO5pzJmYcKvwTo1CaUf44YPfmBMTQEzkQ",
    authDomain: "oxe-tech-react.firebaseapp.com",
    projectId: "oxe-tech-react",
    storageBucket: "oxe-tech-react.appspot.com",
    messagingSenderId: "175983398500",
    appId: "1:175983398500:web:4889ce6e4c3680bf049971"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)