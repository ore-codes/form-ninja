import '@mantine/core/styles.css';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Mulish } from 'next/font/google';
import React, { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { Nav } from '@/chunks/nav/Nav';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { theme } from '@/config/theme';
import 'react-toastify/dist/ReactToastify.css';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Form Ninja',
  description: 'Create and share dynamic forms with ease.',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={mulish.variable}>
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <div className={mulish.variable}>
              <Nav />
              <Box m={16}>{props.children}</Box>
            </div>
          </MantineProvider>
          <ToastContainer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
