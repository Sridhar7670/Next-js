import { ReactNode } from "react";
import { Header } from "../_lib/Header";
import { Footer } from "../_lib/Footer";


export const metadata = {
  title: "Main Site - My Demo",
  description: "Main layout description",
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
