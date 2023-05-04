import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password,photo)

        
         if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name,photo);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }   

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, 
            photoURL: photo
        })
            .then(() => {
                console.log('user name and photo updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' type="text" name="name" id="name" placeholder='Your Name' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2' type="text" name="photo" id="photo" placeholder='Your photo url' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2'  type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='w-50 mb-4 rounded ps-2'  type="password" name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p><small>Already have an account? Please <Link to="/login">Login</Link> </small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;