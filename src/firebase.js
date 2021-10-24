// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import firebaseConfig from "./config.json"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Auth Routes  
const auth = getAuth();

export async function createUser(email, password) {
    const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
    return user;
}

export async function signInUser(email, password) {
    const user = (await signInWithEmailAndPassword(auth, email, password)).user;
    return user;
}



