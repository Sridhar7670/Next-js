// app/blog/ClientWrapper.tsx (Client Component)
"use client";

import dynamic from "next/dynamic";

const Some = dynamic(() => import("./Clientlinks"), { ssr: false });

export default function ClientWrapper() {
  return <Some />;
}
