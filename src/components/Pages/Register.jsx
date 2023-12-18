import React,{useState} from 'react';

import './CSS/Register.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase.init';
import { Link } from 'react-router-dom';


  const auth = getAuth(app);

const Register = () => {
    const[error, setError] = useState('');
    const[success, setSuccess] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        setSuccess('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(email, password,name);

        // password validity 
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least two number');
            return
        }
        else if(password.length <6){
            setError('Please add at least 6 character in your password');
            return
        }
        // create use in firebase 
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');
            sendVerificationEmail(result.user)
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    // usign firebase for email verification 

    const sendVerificationEmail = (user) =>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(user);
            alert('Please Verify Your Email Address');
        })
    }
    
    return (
        <div className='register'>
            <div className="register-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="register-fields">
                        <input type="text" name='name' placeholder='Your Name' required/>
                        <input type="text" name='email' placeholder='Email Address' required/>
                        <input type="password" name='password' placeholder='Password' required/>
                    </div>
                    <button className='continue'>Continue</button>
                    <p className="register-login">
                    Already have an account? <Link className='login' to='/login'>Login Here</Link>
                    <div className="register-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing,I agree to the terms of use & privacy policy</p>
                    </div>
                    </p>
                </form>
                <div>
                    <p className='error'>{error}</p>
                    <p className='success'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;