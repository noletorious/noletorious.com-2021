import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode, MODE } from "next-dark-mode";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import { lightTheme, darkTheme } from "../utils/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp, { defaultMode: MODE.LIGHT });
