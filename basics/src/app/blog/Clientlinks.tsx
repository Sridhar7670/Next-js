// app/blog/ClientLinks.tsx (Client Component)
"use client";

import Link from "next/link";

export default function ClientLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <br />
      <Link href="/login">Login</Link>
    </>
  );
}
