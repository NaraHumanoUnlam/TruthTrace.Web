import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import microsoftImg from '../../assets/images/microsoft.png';
import './alternateSignin.css';

// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFrahdUFevNNQqSw-8-fF-BWRMe4f_u2Q",
  authDomain: "app-truthtrace.firebaseapp.com",
  projectId: "app-truthtrace",
  storageBucket: "app-truthtrace.appspot.com",
  messagingSenderId: "950951770877",
  appId: "1:950951770877:web:ee4098268b6f4c01a35c94"
};


const AlternateSignin = () => {
  const app = initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Este objeto contiene información del usuario autenticado
      const user = result.user;
      console.log('Google Signin successful', user);
      // Navegar a la página deseada después de iniciar sesión
      navigate('/dashboard'); // Cambia '/dashboard' por la ruta a la que quieres navegar
    } catch (error) {
      console.error('Error during Google Signin', error);
    }
  };

  const handleMicrosoftSignin = () => {
    console.log('Microsoft Signin');
    //navigate('/auth/microsoft');
  };

  return (
    <div className='alternate_signin'>
      <button className='alternate_signin_card' onClick={handleGoogleSignin}>
        <FcGoogle />
      </button>
      <button className='alternate_signin_card' onClick={handleMicrosoftSignin}>
        <img src={microsoftImg} alt="Microsoft Signin" />
      </button>
    </div>
  );
};

export default AlternateSignin;