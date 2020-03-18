/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import DashboardLayout from '../pages/_layouts/dashboard';
import FormLayout from '../pages/_layouts/form';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isList,
  ...rest
}) {
  const signed = useSelector(state => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    const page = localStorage.getItem('fastfeet:activePage');
    return <Redirect to={page || '/parcels'} />;
  }

  if (signed) {
    const Layout = isList ? DashboardLayout : FormLayout;

    const { path } = rest;
    localStorage.setItem('fastfeet:activePage', path);

    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isList: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isList: false,
};
