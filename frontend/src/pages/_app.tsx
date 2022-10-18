import type { AppProps } from "next/app";
import React from "react";
import "assets/styles/globals.css";
import { Header } from "@features/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
