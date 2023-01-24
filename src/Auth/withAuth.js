import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const withAuth = (Component) => {
  return (props) => {

    const { isAuthenticated, user, isLoading } = useAuth0();
    console.log(isAuthenticated, user);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
      return <Navigate to={{ pathname: '/login' }} />;
    }

    return <Component {...props} />;
  };
};