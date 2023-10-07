// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxafMYXqdIKjTfqd2hNPxyJ50MeT5Aghs",
  authDomain: "gaming-event-react.firebaseapp.com",
  projectId: "gaming-event-react",
  storageBucket: "gaming-event-react.appspot.com",
  messagingSenderId: "46003746128",
  appId: "1:46003746128:web:010a82f43a415b0ee9e855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;