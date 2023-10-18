// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdpRDmH1zN5EYrrLVb0zBDne43r-VIto",
  authDomain: "brand-shop-e3704.firebaseapp.com",
  projectId: "brand-shop-e3704",
  storageBucket: "brand-shop-e3704.appspot.com",
  messagingSenderId: "169331222905",
  appId: "1:169331222905:web:dbf9a2f00a2bc0c77767a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);