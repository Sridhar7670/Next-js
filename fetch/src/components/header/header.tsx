// 'use client';
// import { useAuth } from '@/context/AuthContext';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';


// export default function Header() {
//   const { isAuthenticated, logout } = useAuth();
//   const router = useRouter();

//   const handleLogout = () => {
//     logout();
//     router.replace('/'); // Redirect to home after logout without adding history entry
//   };

//   return (
//     <header
//       style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         padding: '20px',
//         background: '#eee',
//         color: 'black',
//       }}
//     >
//       <Link href="/">Home</Link>
//       <Link href="/reports">Reports</Link>

//       {isAuthenticated ? (
//         <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
//           Logout
//         </button>
        
//       ) : (
//         <div style={{ display: 'flex', gap: '20px' }}>
//           <Link href="/login" style={{ marginRight: '10px' }}>
//             Login
//           </Link>
//           <Link href="/signup">Sign Up</Link>
//         </div>
//       )}
//     </header>
//   );
// }

'use client';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useState } from 'react';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'var(--header-bg)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 2rem',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--primary)',
          textDecoration: 'none',
        }}>
          TaskManager
        </Link>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }} className="hidden md:flex">
          {isAuthenticated && (
            <>
              <Link href="/admin/reports" className="btn btn-secondary">
                Admin
              </Link>
              <Link href="/reports" className="btn btn-primary">
                Create Report
              </Link>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link href="/login" className="btn btn-secondary">
                Login
              </Link>
              <Link href="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}

          {isAuthenticated && (
            <button onClick={handleLogout} className="btn btn-secondary">
              Logout
            </button>
          )}

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: 'var(--foreground)',
              cursor: 'pointer',
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden slide-in" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderTop: 'none',
          padding: '1rem',
          boxShadow: '0 4px 6px -1px var(--shadow)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {isAuthenticated && (
              <>
                <Link href="/admin/reports" className="btn btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                  Admin
                </Link>
                <Link href="/reports" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Create Report
                </Link>
                <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="btn btn-secondary">
                  Logout
                </button>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Link href="/login" className="btn btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/signup" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}