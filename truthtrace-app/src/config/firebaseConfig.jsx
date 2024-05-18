import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFrahdUFevNNQqSw-8-fF-BWRMe4f_u2Q",
  authDomain: "app-truthtrace.firebaseapp.com",
  projectId: "app-truthtrace",
  storageBucket: "app-truthtrace.appspot.com",
  messagingSenderId: "950951770877",
  appId: "1:950951770877:web:ee4098268b6f4c01a35c94"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();
const providerMicrosoft = new OAuthProvider('microsoft.com');

const HandleGoogleSignin =() => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });

};

const handleMicrosoftSignin =() => {
  const auth = getAuth();
  signInWithPopup(auth, providerMicrosoft)
    .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = OAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};

const App = () => {
  const app = initializeApp(firebaseConfig);
  return app;
}

export default {HandleGoogleSignin, handleMicrosoftSignin, App};