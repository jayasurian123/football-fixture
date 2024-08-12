import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfitFont = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Football Tournament',
  description: 'Kombans tournament fixtures'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfitFont.className}>{children}</body>
    </html>
  );
}
