'use client';

import { useState } from 'react';
import { signUp } from '../services/api';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import './SignUpPage.css';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp({ email, password, username });
      await login({ email, password, username });
      router.push('/reports');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-title">Create an Account</h1>

        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="form-input"
        />

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="form-input"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="form-input"
        />

        <button type="submit" className="form-button">Sign Up</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}
