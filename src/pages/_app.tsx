import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
//react-router-dom
import { BrowserRouter } from "react-router-dom"

export default function App({ Component, pageProps }: AppProps) {
  if (typeof document !== "undefined") {
    return (
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    );
  } else {
    return null;
  }
}
