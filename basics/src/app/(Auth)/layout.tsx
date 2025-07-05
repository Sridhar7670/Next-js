import { ReactNode } from "react";

export const metadata = {
  title: "Auth - My Demo",
  description: "Auth layout description",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <h3>Some specialized layout has occurred</h3>
    </>
  );
}
