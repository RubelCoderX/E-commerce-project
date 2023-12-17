import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';


const LoginSignup = () => {
    const[user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    const handleGithubSignIn =() =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name'/>
                    <input type="text" placeholder='Email Address' />
                    <input type="password" placeholder='Password'/>
                </div>
                <button className='continue'>Continue</button>
                <p className="loginsignup-login">
                   Already have an account? <span>Login here</span>
                   <hr /> 
                   <p>or use one of these options</p>
                   <hr />
                   <div className='other-btn'>
                      <button onClick={handleGoogleSingIn} className='google-icon'><FaGoogle  className='icon'/></button>
                      <button onClick={handleGithubSignIn} className='github-icon'><FaGithub  className='icon'/></button>
                   </div>
                   
                    <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing,I agree to the terms of use & privacy policy</p>
                   </div>
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;