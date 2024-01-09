import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';
import { ArticleProvider } from '@/app/_context/ArticleContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'News App',
  description: 'Using NYTimes API to get news',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <ArticleProvider>{children}</ArticleProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
