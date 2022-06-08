// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFIJbyjNra01u3XCE8p8VqTrlCv2Be20U",
  authDomain: "twitter-clone-app-e5993.firebaseapp.com",
  projectId: "twitter-clone-app-e5993",
  storageBucket: "twitter-clone-app-e5993.appspot.com",
  messagingSenderId: "838781852425",
  appId: "1:838781852425:web:f6e462a7a7d5143f34d1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;