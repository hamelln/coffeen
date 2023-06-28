import { RecoilRoot } from "recoil";
import GlobalStyle from "@/components/GlobalStyle";
import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/coffee_favicon.png"
            />
            <meta name="theme-color" content="#FFFFFF" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="viewport" content="width=device-width" />
            <meta charSet="utf-8" />
            <title>COFFEEN</title>
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="description" content="커피를 알립니다" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="COFFEEN" />
            <meta property="og:description" content="커피를 알립니다" />
            <meta property="og:image" content="/images/og.png" />
            <meta property="og:image:alt" content="COFFEEN Thumbnail" />
            <meta property="og:locale" content="ko_KR" />
            <meta property="og:site_name" content="COFFEEN" />
            <meta property="og:locale:alternate" content="ko_KR" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
