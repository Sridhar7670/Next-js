'use client';
import { LoggedIn } from '@/app/services/api';
import {jwtDecode as jwt_decode} from 'jwt-decode';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  token: string | null;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  Username:string|null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [Username,setUsername]=useState<string|null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (credentials: any) => {
    try {
      // Use the imported LoggedIn function to get the token
      const data = await LoggedIn(credentials); 
      console.log(data);

      // Decode the JWT token to extract user details
      const decoded: { username: string; email?: string; sub?: string } = jwt_decode(data.access_token);
      console.log(decoded.username,decoded.email,decoded.sub);

      setUsername(decoded.username);

      localStorage.setItem('jwt_token', data.access_token);
      setToken(data.access_token);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token ,Username}}>
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
