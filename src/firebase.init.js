// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wNwuJqK7grBhYLxCgQBvGMzVIG9Nt_c",
  authDomain: "todo-bb10f.firebaseapp.com",
  projectId: "todo-bb10f",
  storageBucket: "todo-bb10f.appspot.com",
  messagingSenderId: "998380875392",
  appId: "1:998380875392:web:19b1dd88d7b81362aec065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;