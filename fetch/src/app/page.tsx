'use client';

import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import styles from './HomePage.module.css'; 

export default function HomePage() {
  const { isAuthenticated, Username } = useAuth();
  const { theme } = useTheme();
  
  const getGreetingMessage = () => {
    if (!isAuthenticated) return 'Manage your tasks and reports seamlessly. Log in to get started or sign up to join us.';
    if (Username?.trim()) return `Hi ${Username}`;
    return 'Hi User ';
  };

  return (
    <div className="fade-in" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
        }}>
          TASK
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: 'var(--muted-foreground)',
          marginBottom: '3rem',
          lineHeight: 1.6,
        }}>
          {getGreetingMessage()}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {isAuthenticated && (
            <>
              <Link href="/reports" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                borderRadius: '12px',
              }}>
                📝 Create Report
              </Link>

              <Link href="/admin/reports" className="btn btn-secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                borderRadius: '12px',
              }}>
                ⚙️ Admin Panel
              </Link>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link href="/signup" className="btn btn-primary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                borderRadius: '12px',
              }}>
                🚀 Create Account
              </Link>

              <Link href="/login" className="btn btn-secondary" style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                borderRadius: '12px',
              }}>
                🔑 Login
              </Link>
            </>
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{
          marginTop: '4rem',
        }}>
          <div className="card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>Analytics</h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
              Track your progress with detailed analytics and insights
            </p>
          </div>

          <div className="card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>Secure</h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
              Your data is protected with enterprise-grade security
            </p>
          </div>

          <div className="card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>Fast</h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>
              Lightning-fast performance for seamless productivity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

