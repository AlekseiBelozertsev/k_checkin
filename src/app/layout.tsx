import './styles/globals.scss';
import type { Metadata } from 'next';
import { Jockey_One } from 'next/font/google';
import Template from './template';

const jOne = Jockey_One({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Checkin App',
  description: 'Another pet project',
  creator: 'AlexeiB',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jOne.className}>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
