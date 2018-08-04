import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired,
  user: PropTypes.object
};

export default AuthRoute;
