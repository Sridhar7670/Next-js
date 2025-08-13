
'use client';

import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

// --- Define navigation links in one place to avoid repetition ---
const guestLinks = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Sign Up' },
];

const authenticatedLinks = [
  { href: '/admin/reports', label: 'Admin' },
  { href: '/reports', label: 'Create Report' },
];

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = isAuthenticated ? authenticatedLinks : guestLinks;

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    router.push('/');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

//   return (
//     // The header padding is controlled by the container div below
//     <header className="sticky top-0 z-50  bg-[--header-bg] backdrop-blur-lg " style={{padding:"10px"}}>
//       {/* This div is the main container for your header content.
//         - `py-4`: Increased vertical padding for more breathing room.
//         - `px-4`: Base horizontal padding for mobile screens.
//         - `sm:px-6`: Increased horizontal padding for small screens and up.
//         - `lg:px-8`: More horizontal padding for large screens and up.
//       */}
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" style={{padding:"10px"}}>
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-[--primary] no-underline" onClick={closeMobileMenu}>
//           TaskManager
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-6 md:flex">
//           {navLinks.map((link, index) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               // It's often better to define padding directly on link/button elements
//               // `py-2 px-4` provides comfortable padding inside the button-like links.
//               className={index === navLinks.length - 1 ? 'btn btn-primary py-2 px-4' : 'btn btn-secondary py-2 px-4'}
//             >
//               {link.label}
//             </Link>
//           ))}
//           {isAuthenticated && (
//             <button onClick={handleLogout} className="btn btn-secondary py-2 px-4">
//               Logout
//             </button>
//           )}
//           <ThemeToggle />
//         </nav>

//         {/* Mobile Menu Button & Theme Toggle */}
//         <div className="flex items-center gap-4 md:hidden">
//           <ThemeToggle />
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="cursor-pointer border-none bg-transparent text-2xl text-[--foreground]"
//             aria-label="Toggle navigation menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             {isMobileMenuOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         // `p-6` gives the mobile dropdown more generous internal padding.
//         <div className="absolute left-0 top-full w-full bg-[--card-bg] p-6 shadow-lg md:hidden " >
//           <div className="flex flex-col gap-4" >
//             {navLinks.map((link, index) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={closeMobileMenu}
//                 // Centralizing padding here makes mobile links feel consistent and properly sized.
//                 className={index === navLinks.length - 1 ? 'btn btn-primary py-3 px-4 text-center' : 'btn btn-secondary py-3 px-4 text-center'}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             {isAuthenticated && (
//               <button onClick={handleLogout} className="btn btn-secondary py-3 px-4 text-center">
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
return (
<header className="sticky top-0 z-50 bg-[--header-bg] backdrop-blur-lg " style={{padding:"16px"}}>
  <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-4 sm:px-6 lg:px-8">
    {/* Logo */}
    <Link
      href="/"
      className="text-2xl font-bold text-[--primary] no-underline"
      onClick={closeMobileMenu}
    >
      TaskManager
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden items-start gap-6 md:flex">
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            index === navLinks.length - 1
              ? 'btn btn-primary py-2 px-4'
              : 'btn btn-secondary py-2 px-4'
          }
        >
          {link.label}
        </Link>
      ))}
      {isAuthenticated && (
        <button onClick={handleLogout} className="btn btn-secondary py-2 px-4">
          Logout
        </button>
      )}
      <ThemeToggle />
    </nav>

    {/* Mobile Menu Button & Theme Toggle */}
    <div className="flex items-start gap-4 md:hidden">
      <ThemeToggle />
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="cursor-pointer border-none bg-transparent text-2xl text-[--foreground]"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="absolute left-0 top-full w-full bg-[--card-bg] p-6 shadow-lg md:hidden">
      <div className="flex flex-col gap-4 backdrop-blur-sm">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobileMenu}
            className={
              index === navLinks.length - 1
                ? 'btn btn-primary py-3 px-4 text-center'
                : 'btn btn-secondary py-3 px-4 text-center'
            }
          >
            {link.label}
          </Link>
        ))}
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="btn btn-secondary py-3 px-4 text-center"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )}
</header>
)
}