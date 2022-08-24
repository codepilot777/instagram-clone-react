import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense} from 'react'
import * as ROUTES from './constants/routes'
import Signup from './pages/signup';
import Dashbaord from './pages/dashboard';

const Login = React.lazy(() => import('./pages/login'))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashbaord />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
