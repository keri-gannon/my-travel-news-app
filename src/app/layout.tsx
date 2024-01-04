import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travel News App',
  description: 'Using NYTimes API to get travel news',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
