import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryClientProviderWrapper from '../providers/queryclient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LooseApp',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
      </body>
    </html>
  );
}
