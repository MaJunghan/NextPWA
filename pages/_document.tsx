import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="msapplication-TileColor" content="#FF98BA"></meta>
        <meta name="theme-color" content="#db5945"></meta>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/ipad_splash.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/ipadpro1_splash.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
        <link
          rel="apple-touch-startup-image"
          href="/splashscreens/ipadpro2_splash.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
