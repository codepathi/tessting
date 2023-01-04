import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";
import "../public/demo/css/style.css";
import "../src/styles/customstyles.css";
import "../src/styles/demo4features3.css";
import '../public/css/pricing.css'
import '../public/css/popup.css'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import Script from "next/script";
import * as gtag from "../lib/gtag";

import { CountryProvider } from "../src/context/countryContext";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setPreloader(false);
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <script
        src="//code.tidio.co/thsnwky6jcxrhfiafx9rtbshgmvqfrya.js"
        async
      ></script>

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>

      <CountryProvider>
      <VideoState>
        <Head>
          <title>RestroX | Restaurant Operating System </title>

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        {preloader && <PreLoader />}
        <Component {...pageProps} />
      </VideoState>
      </CountryProvider>
    </>
  );
}

export default MyApp;
