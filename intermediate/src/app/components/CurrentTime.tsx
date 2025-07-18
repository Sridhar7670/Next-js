'use client';

import { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // This code runs only in the browser, after the initial render
    setTime(new Date().toLocaleTimeString());
  }, []); // The empty dependency array ensures this runs only once on mount

  return <span >{time}</span>;
}