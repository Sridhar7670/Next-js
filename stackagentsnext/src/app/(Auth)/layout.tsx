import React from 'react';
import './auth.css'; // or CSS Module if preferred

export const metadata = {
  title: 'Auth',
  description: 'Authentication pages',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
}
