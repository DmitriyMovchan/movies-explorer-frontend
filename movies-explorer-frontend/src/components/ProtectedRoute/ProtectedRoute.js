import React from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProtectedRoute = ({ loggedIn, children, path, exact }) => {
  const location = useLocation();
  // console.debug('loggedIn = ', loggedIn);
  return (
      <Route exact={exact} path={path}>
        <Header 
          email={'Регистрация'}
          loggedIn={loggedIn}
         />
          {loggedIn ? children : <Redirect to="/signin"/>}
        {location.pathname === '/profile' ? '' : <Footer />}
      </Route>
  );
}

export default ProtectedRoute;