import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';

const isBrowser = typeof window !== "undefined";

export default function Document() {

  useEffect(() => {
    if(isBrowser) {
      const Modal = require('react-modal');
      Modal.setAppElement('#__next');
    }
  }, []);


  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
