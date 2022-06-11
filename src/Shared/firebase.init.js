// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBn-Qs3QejPVm-Rop_dVnNR9Os8G2r440",
  authDomain: "jerin-parlour-2b589.firebaseapp.com",
  projectId: "jerin-parlour-2b589",
  storageBucket: "jerin-parlour-2b589.appspot.com",
  messagingSenderId: "1078959254217",
  appId: "1:1078959254217:web:29645cbe6d3df5a6537b18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth