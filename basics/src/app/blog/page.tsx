// app/blog/page.tsx (Server Component)
import { Metadata } from "next";
import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

export default async function Blog() {
  await new Promise((r) => setTimeout(r, 2000));

  return (
    <>
      <h2>blog</h2>
      <ClientWrapper />
    </>
  );
}
