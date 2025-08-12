'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import styles from './HomePage.module.css'; 

export default function HomePage() {
  const { isAuthenticated,Username } = useAuth();
  
  const getGreetingMessage = () => {
    if (!isAuthenticated) return 'Manage your tasks and reports seamlessly. Log in to get started or sign up to join us.';
    if (Username?.trim()) return `Hi ${Username}`;
    return 'Hi User ';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>TASK</h1>

      <p className={styles.greetingText}>{getGreetingMessage()}</p>

      <nav className={styles.nav}>
        {isAuthenticated && (
          <>
            <StyledLink href="/reports" bgColor="#4CAF50">
              Create Report
            </StyledLink>

            <StyledLink href="/admin/reports" bgColor="#FF9800">
              Admin
            </StyledLink>
          </>
        )}

        {!isAuthenticated && (
          <>
            <StyledLink href="/signup" bgColor="#FF9800">
              Create Account
            </StyledLink>

            <StyledLink href="/login" bgColor="#2196F3">
              Login
            </StyledLink>
          </>
        )}
      </nav>
    </div>
  );
}

function StyledLink({ href, bgColor, children }: { href: string; bgColor: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={styles.styledLink}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </Link>
  );
}
