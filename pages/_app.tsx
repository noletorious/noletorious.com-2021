import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode, MODE } from "next-dark-mode";
import Layout from "../components/layout";
import { lightTheme, darkTheme } from "../utils/theme";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Loader from "../components/loader/";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            {loading ? (
              <Loader setLoading={setLoading} />
            ) : (
              <Component {...pageProps} key={router.route} />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Layout>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp, { defaultMode: MODE.LIGHT });
