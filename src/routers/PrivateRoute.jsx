import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types'

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  console.log(rest.location.pathname)
  localStorage.setItem('path',rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
 
export default PrivateRoute

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
