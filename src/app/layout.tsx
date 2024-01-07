import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { createTheme, MantineProvider, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';
import { ArticleProvider } from './_context/ArticleContext';

const theme = createTheme({
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
});

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
        <MantineProvider theme={theme}>
          <ArticleProvider>{children}</ArticleProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
