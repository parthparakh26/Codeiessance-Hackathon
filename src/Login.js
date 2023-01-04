import React from 'react';
import './Login.css';
// import './logo.png' as logo
// import {auth, provider, db} from './firebase';
import {auth, provider} from './firebase';
// import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
// import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import logo from './logo.png';
import {Button} from '@mui/material';



function Login() {
    const signIn = () => {
      //  const auth = getAuth();
      //   console.log(`Hello World!`);
      //   console.log(provider)
      //   signInWithPopup(auth, provider).catch(error => alert(error.message));
      auth.signInWithPopup(provider).catch(error => alert(error.message));
    };
  return (
    <div className='login'>
        <div className="login__logo">
            <img src={logo} alt=""  />
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login