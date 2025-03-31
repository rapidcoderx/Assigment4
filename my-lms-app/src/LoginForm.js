import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginFormComponent from './components/LoginFormComponent';
import AuthMessage from './components/AuthMessage';

export const AuthContext = createContext();

const LoginForm = () => {
  const [authData, setAuthData] = useState({
    type: '',
    message: ''
  });

  return (
    <div>
      <Header />
      <AuthContext.Provider value={{ authData, setAuthData }}>
        <LoginFormComponent />
        <AuthMessage />
      </AuthContext.Provider>
      <Footer />
    </div>
  );
};

export default LoginForm;
