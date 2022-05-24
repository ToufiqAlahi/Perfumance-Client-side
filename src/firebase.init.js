// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBy-c7QVv6LFFU1GyxMjz7qH-CkNUzFfQ",
    authDomain: "assignment-11-b1240.firebaseapp.com",
    projectId: "assignment-11-b1240",
    storageBucket: "assignment-11-b1240.appspot.com",
    messagingSenderId: "67975398048",
    appId: "1:67975398048:web:b0a9b0b51347c7b8a2bfc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
