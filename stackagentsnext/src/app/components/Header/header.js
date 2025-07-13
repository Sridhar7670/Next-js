"use client"
import  { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import './Header.css';
import Link from 'next/link';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleClick = () => {
  //   throw new Error('Manual client error triggered!');
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <Link className="logo" href="/">Stack Agents</Link>

      <nav className="nav">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        
        {/* <button onClick={handleClick}>Trigger Error</button> */}
      </nav>

      <div className="user-actions">
        <button className="login-btn" onClick={() => router.push("/login")}>Login</button>
        <button className="signup-btn" onClick={() => router.push('/register')}>Sign Up</button>
      </div>

      <button onClick={toggleMobileMenu} className="mobile-menu-toggle">
        {isOpen ? (
          <i className="fas fa-times close-icon" style={{ fontSize: 24 }}></i>
        ) : (
          <i className="fas fa-bars hamburger-icon" style={{ fontSize: 24 }}></i>
        )}
      </button>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="mobile-user-actions">
          <button className="login-btn" onClick={() => router.push("/login")}>Login</button>
          <button className="signup-btn" onClick={() => router.push('/register')}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}


export default Header;
