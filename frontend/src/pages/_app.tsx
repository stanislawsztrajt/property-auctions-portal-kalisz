import type { AppProps } from "next/app";
import React from "react";
import "assets/styles/globals.css";
import "assets/styles/map.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
