// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevInsights - Modern Tech Blog',
  description: 'A modern blog built with Next.js and TypeScript, featuring articles on web development, design, and technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-primary text-brand-text`}>
        {children}
      </body>
    </html>
  );
}
