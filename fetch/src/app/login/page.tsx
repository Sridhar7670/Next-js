'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; 
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');  
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      // await login({ email, password ,username});
      await login({ email, password });

      router.push('/');
    } catch (err: any) {
      console.error('Sign-in failed:', err);
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    }
  };

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
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Log In</h1>
        <form onSubmit={handleSubmit}>
          {/* <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '6px',color:"black" }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          </div> */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '6px' ,color:"black"}}>Email:</label>
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
            <label style={{ display: 'block', marginBottom: '6px' ,color:"black"}}>Password:</label>
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
            Log In
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
