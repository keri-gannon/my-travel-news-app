// MantineProvider.js
import React from 'react';
import { MantineProvider } from '@mantine/core';

interface MantineThemeProviderProps {
  children: React.ReactNode;
}

const MantineThemeProvider: React.FC<MantineThemeProviderProps> = ({
  children,
}: MantineThemeProviderProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default MantineThemeProvider;
