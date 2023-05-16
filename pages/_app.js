import React from "react";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./global.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    gray: {
      50: "#000",
      100: "#000",
      200: "#000",
      300: "#000204",
      400: "#0b121b",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Work</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
