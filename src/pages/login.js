import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FirebaseContext from '../contexts/firebase';
import * as ROUTES from '../constants/routes';

import { UserSignInWithEmailAndPassword } from '../lib/firebase';

const Login = () => {
  const navigate = useNavigate(); 
  const { firebase } = useContext(FirebaseContext);
  
  const [ emailAddress, setEmailAddress ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = (password === '' || emailAddress === '');
  
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await UserSignInWithEmailAndPassword(emailAddress, password);
      console.log(user)
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      setEmailAddress('');
      setPassword('');
      setError(err.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
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
          <form onSubmit={handleLogin} method="POST">
            <input arial-label="Enter your email address" type="text" placeholder="Email address" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary" onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
            <input arial-label="Enter your password" type="password" placeholder="Password" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button disable={isInvalid} type="submit" className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>Log In</button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 bg-white border rounded border-gray-primary">
          <p className="text-sm">
            Don't have an account? {' '}
            <Link to="/signup" className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Login