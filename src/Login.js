import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const auth = getAuth();

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
  .then((auth) => {
    // Signed in 
    // const user = userCredential.user;
    // console.log(auth);
    navigate("/");
    // ...
  })
  .catch(error => alert(error.message));

        // fancy firebase sign in

    }

    const register = e => {
        e.preventDefault();

        // some firebase register stuff

        createUserWithEmailAndPassword(auth, email, password)
  .then((auth) => {
    // Signed in 
    // const user = userCredential.user;
    if (auth) {
        navigate("/");
    }
    // ...
  })
  .catch(error => alert(error.message));
    // ..
    };

    

  return (
    <div className='login'>
        <Link to="/">
            <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svh.png'
            />
        </Link>
        <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button 
            type='submit' onClick={signIn}
            className='login__signInButton'>Sign In</button>
        </form>

        <p>
        By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button 
        onClick={register}
        className='login__registerButton'>
            Create your Amazon Account
        </button>
    </div>
    </div>
    


  );
}

export default Login