'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Corrected path
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth(); // Use the login function from context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      // Call the login function from the context
      await login({ email, password });
      // On success, redirect to the home page
      router.push('/');
    } catch (err: any) {
      console.error('Sign-in failed:', err);
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  // If the user is already logged in, redirect them away from the login page
  if (isAuthenticated) {
    router.replace('/');
    return <div>You are already logged in. Redirecting...</div>;
  }

  return (
    <div
      className="login-container"
      style={{
        backgroundColor: 'whitesmoke',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          minWidth: '400px',
          margin: '50px auto',
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                color: 'black',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '6px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                color: 'black',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Sign In
          </button>
        </form>
        {error && (
          <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>
            Error: {error}
          </p>
        )}
      </div>
    </div>
  );
}