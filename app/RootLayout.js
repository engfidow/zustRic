
// components/RootLayout.js

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import '../app/globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>zust RIC</title>
      </Head>
      <body className="">
        <Navbar />
        {children}
       
      </body>
    </html>
  );
}
