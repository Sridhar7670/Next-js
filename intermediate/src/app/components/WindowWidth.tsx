// src/components/WindowWidth.jsx
'use client'; // It still needs to be a client component
import { useState, useEffect } from 'react';

export default function WindowWidth() {
  // This component needs the 'window' object, which only exists in the browser
  const [width, setWidth] = useState(window.innerWidth);

  // ... logic to update on resize
  
  return <p>Current window width: {width}px</p>;
}
