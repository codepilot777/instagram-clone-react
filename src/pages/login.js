import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../contexts/firebase';


const Login = () => {
  const navigate = useNavigate(); 
  const { firebase } = useContext(FirebaseContext);
  
  const [ emailAddress, setEmailAddress ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  
  const handleLogin = () => {
    
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
        <h1>
          <img src="/images/logo.png" alt="Instagram" className="w-6/12 mt-2 mb-4" />
        </h1>
        { error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
        <form onSubmit={handleLogin} method="POST">
          <input arial-label="Enter your email address" type="text" placeholder="Email address" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary" onChange={() => {}}/>
          <input arial-label="Enter your password" type="password" placeholder="Password" className="w-full h-2 px-4 py-5 mb-2 mr-3 text-sm border rounded text-gray-base border-gray-primary" onChange={() => {}}/>
          <button disable={isInvalid} type="submit" className="text-white bg-blue-medium">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login