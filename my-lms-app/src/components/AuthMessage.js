import React, { useContext } from 'react';
import { AuthContext } from '../LoginForm';
import DisplayStatus from './DisplayStatus';

const AuthMessage = () => {
  const { authData } = useContext(AuthContext); 

  if (!authData.message) return null;

  return (
    <DisplayStatus type={authData.type} message={authData.message} />
  );
};

export default AuthMessage;
