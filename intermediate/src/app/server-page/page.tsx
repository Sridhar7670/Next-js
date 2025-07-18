// // src/app/server-page/page.jsx
// import dynamic from 'next/dynamic';


// const WindowWidthComponent = dynamic(
//   () => import('@/app/components/WindowWidth'), 
//   { ssr: false } // This is the key part
// );

// export default function SomePage() {
//   return (
//     <div>
//       <h1>My Page</h1>
//       <WindowWidthComponent />
//     </div>
//   );
// }

// src/app/server-page/page.tsx
// This file can now remain a Server Component

import ClientOnlyLoader from "../components/ClientOnlyLoader";

export default function ServerPage() {
  return (
    <div>
      <h1>This part is rendered on the server</h1>
      <p>Here we will render the client-only component:</p>
      <ClientOnlyLoader /> {/* Use the client component here */}
    </div>
  );
}