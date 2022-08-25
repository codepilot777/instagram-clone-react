import { collection, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { db, UserSignUpIwthEmailAndPassword } from '../lib/firebase';
import { doesUsernameExist } from '../services/firebase'

const Signup = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = (password === '' || emailAddress ==='');

  const handleSignUp = async (event) => {
    event.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (usernameExists) {
      setError('Username already exists');
    } else {
      try {
        const user = await UserSignUpIwthEmailAndPassword(emailAddress, password);
        await addDoc(collection(db, 'users'),{
          userId: user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        })
        navigate(ROUTES.DASHBOARD);
      } catch (err) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      }
    }
  }

  useEffect(() => {
    document.title = 'Sign Up - Instagram';
  }, []);

  return (
    <div className="container flex items-center h-screen max-w-screen-md mx-auto">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpeg" alt="iPhone background" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col p-4 mb-4 bg-white border rounded tiems-center border-gray-primary">
          <h1>
            <img src="/images/logo.png" alt="Instagram" className="w-6/12 mt-2 mb-4" />
          </h1>
          { error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <input arial-label="Enter your username" type="text" placeholder="Username" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input arial-label="Enter your fullname" type="text" placeholder="Fullname" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary" onChange={(e) => setFullName(e.target.value)} value={fullName} />
            <input arial-label="Enter your email address" type="text" placeholder="Email address" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
            <input arial-label="Enter your password" type="password" placeholder="Password" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded border-gray-primary" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button disable={isInvalid} type="submit" className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>Sign Up</button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 bg-white border rounded border-gray-primary">
          <p className="text-sm">
            Already have an account? {' '}
            <Link to="/login" className="font-bold text-blue-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup