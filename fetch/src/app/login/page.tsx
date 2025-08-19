'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; 
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    // try {
    //   await login({ email, password });
    //   router.push('/');
    // } catch (err: any) {
    //   console.error('Sign-in failed:', err);
    //   setError(err.message || 'Failed to sign in. Please check your credentials.');
    // } finally {
    //   setIsLoading(false);
    // }
    // In your SignInPage component...
    try {
      await login({ email, password });
      router.push('/');
    } catch (err: any) {
      console.error('Sign-in failed:', err);

      const message =
        err?.response?.data?.message || 
        err?.message ||
        'Failed to sign in. Please check your credentials.';

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };
  

  if (isAuthenticated) {
    router.replace('/');
    return (
      <div className="fade-in" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: 'var(--foreground)',
      }}>
        You are already logged in. Redirecting...
      </div>
    );
  }

  return (
    <div className="fade-in" style={{
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
          Welcome Back
        </h1>
        
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
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
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          
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
          )}
          
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
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        
        <div style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          color: 'var(--muted-foreground)',
        }}>
          Don't have an account?{' '}
          <a
            href="/signup"
            style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
