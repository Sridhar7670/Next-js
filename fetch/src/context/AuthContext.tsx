'use client';
import { LoggedIn } from '@/app/services/api';
// Corrected the import name to match the API service convention

import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (credentials: any) => {
    try {
      // Use the imported signIn function
      const data = await LoggedIn(credentials); 
      localStorage.setItem('jwt_token', data.access_token);
      setToken(data.access_token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};