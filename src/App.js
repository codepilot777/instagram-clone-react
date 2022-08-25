import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense} from 'react'
import * as ROUTES from './constants/routes' 

const Dashbaord = React.lazy(() => import('./pages/dashboard'));
const Login = React.lazy(() => import('./pages/login'));
const Signup = React.lazy(() => import('./pages/signup'));
const NotFound = React.lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashbaord />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
