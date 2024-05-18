// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAFrahdUFevNNQqSw-8-fF-BWRMe4f_u2Q",
  authDomain: "app-truthtrace.firebaseapp.com",
  projectId: "app-truthtrace",
  storageBucket: "app-truthtrace.appspot.com",
  messagingSenderId: "950951770877",
  appId: "1:950951770877:web:ee4098268b6f4c01a35c94"
};

const app = initializeApp(firebaseConfig);

export default app;