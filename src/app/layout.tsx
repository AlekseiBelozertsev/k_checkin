import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Jockey_One } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const jOne = Jockey_One({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Kika's Checkin",
  description: 'Find the places you have been to with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jOne.className}>{children}</body>
    </html>
  );
}
