// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNZ_47z9HPzTWkgeoVevfZmABuQ3aFJ_c",
    authDomain: "sales-tracking-f8904.firebaseapp.com",
    projectId: "sales-tracking-f8904",
    storageBucket: "sales-tracking-f8904.appspot.com",
    messagingSenderId: "1063346607472",
    appId: "1:1063346607472:web:821f6c63e6567c36162bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;