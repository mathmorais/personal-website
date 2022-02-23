import type { AppProps } from "next/app";
import { Global } from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
