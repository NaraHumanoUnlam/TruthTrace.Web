import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import microsoftImg from '../../assets/images/microsoft.png';
import firebase from '../../config/firebaseConfig';
import './alternateSignin.css';


const AlternateSignin = () => {
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    firebase.HandleGoogleSignin();
  };
  const handleMicrosoftSignin = () => {
    firebase.handleMicrosoftSignin();
  };

  return (
    <div className='alternate_signin'>
      <button className='alternate_signin_card' onClick={handleGoogleSignin}>
        <FcGoogle />
      </button>
      {/*<button className='alternate_signin_card' onClick={handleMicrosoftSignin}>
        <img src={microsoftImg} alt="Microsoft Signin" />
  </button>*/}
    </div>
  );
};

export default AlternateSignin;