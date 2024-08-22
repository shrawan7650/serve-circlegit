import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser(); // Call the LogoutUser function to clear token
  }, [LogoutUser]);

  return <Navigate to="/login" />; // Redirect to login after logout
};

export default Logout;
