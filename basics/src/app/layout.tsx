// app/layout.tsx
import { ReactNode } from "react";
import './global.css';
export const metadata = {
  title: {
    default:"home page",
    template:"%s | template"
  },
  description: "main layout description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
