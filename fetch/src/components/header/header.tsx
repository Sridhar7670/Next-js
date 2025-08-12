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

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header  style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        background: '#eee',
        color: 'black',
      }}>
      <Link href="/">Home</Link>
      <Link href="/reports">Create Report</Link>
      
      {isAuthenticated && <Link href="/admin/reports">Admin</Link>}

      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <Link href="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      )}
    </header>
  );
}