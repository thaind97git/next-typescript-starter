import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

import { wrapper } from '@/store';

import '@/helpers/axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lottery web3</title>
        <meta name="description" content="Lottery web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
