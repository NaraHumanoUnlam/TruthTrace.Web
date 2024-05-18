import React, { useState } from 'react';
import { signInWithPopup } from '../firebaseConfig.js';

const ValidateEmailWithVerification = (user) => {
    const [user, setUser] = useState('');

    console.log('user: ' + user);
    sendEmailVerification(user).then(() => {
        console.log('se envio el mail de verificacion')
        return user;
    }).catch((error) => {   
        console.log(error);
    });
};

const auth = getAuth();
const AlternativeGoogleSignin = (auth, provider) => {
    const [auth, setAuth] = useState('');
    const [provider, setProvider] = useState('');

};

export default ValidateEmailWithVerification;