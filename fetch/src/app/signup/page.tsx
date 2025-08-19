"use client"
import { signUp } from '../services/api';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await signUp({ email, password, username });
      await login({email,password})
      router.push('/reports');
    }
    catch (err: any) {
    const message =
    err?.response?.data?.message || 
    err?.message ||
    'Something went wrong. Please try again.';
    
  setError({ message });
}
finally {
      setIsLoading(false);
    }
  };

  return ( <div className="fade-in" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      <div className="card" style={{
        width: '100%',
        maxWidth: '400px',
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'var(--foreground)',
          fontSize: '1.8rem',
          fontWeight: 'bold',
        }}>
          Create Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--foreground)',
              fontWeight: '500',
            }}>
              Username:
            </label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--foreground)',
              fontWeight: '500',
            }}>
              Email:
            </label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'var(--foreground)',
              fontWeight: '500',
            }}>
              Password:
            </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          {/* 
           {error && (
            <div style={{
              background: 'var(--destructive)',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
            }}>
              {error}
            </div>
          )} */}
          <div>
              {error?.message && (
          <div style={{
            background: 'var(--destructive)',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
          }}>
            {error.message}
          </div>
        )}

          </div>

          
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {isLoading && <div className="loading-spinner"></div>}
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <div style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          color: 'var(--muted-foreground)',
        }}>
          Already have an account?{' '}
          <a
            href="/login"
            style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Log in
          </a>
        </div>
      </div>
      </div>
  );
}