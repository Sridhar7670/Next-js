// src/components/ClientOnlyLoader.tsx

'use client'; // This is the crucial step

import dynamic from 'next/dynamic';

const WindowWidthComponent = dynamic(
  () => import('./WindowWidth'),
  { ssr: false }
);

export default function ClientOnlyLoader() {
  // This component's only purpose is to load and render
  // the other component without server-side rendering.
  return <WindowWidthComponent />;
}