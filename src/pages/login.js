import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FirebaseContext from '../contexts/firebase';

const Login = () => {
  const navigate = useNavigate(); 
  const { firebase } = useContext(FirebaseContext);
  
  const [ emailAddress, setEmailAddress ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = (password === '' || emailAddress === '');
  
  const handleLogin = () => {
    
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);
  
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpeg" alt="iPhone background" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col tiems-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1>
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          { error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input arial-label="Enter your email address" type="text" placeholder="Email address" className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={(e) => setEmailAddress(e.target.value)}/>
            <input arial-label="Enter your password" type="password" placeholder="Password" className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={(e) => setPassword(e.target.value)}/>
            <button disable={isInvalid} type="submit" className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}`}>Log In</button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
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