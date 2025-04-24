// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAse0mNoon_2LvTW5Ut_aCsAQ0Q9RHYoMM",
  authDomain: "jaildb.firebaseapp.com",
  projectId: "jaildb",
  storageBucket: "jaildb.firebasestorage.app",
  messagingSenderId: "518676198034",
  appId: "1:518676198034:web:81d4fe1ed2994759e16c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };