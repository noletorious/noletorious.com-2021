import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode, MODE } from "next-dark-mode";
import Layout from "../components/layout";
import { lightTheme, darkTheme } from "../utils/theme";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Loader from "../components/loader";
import "../styles/globals.css";
// import Cursor from "../components/cursor";
import styled from "styled-components";

const Cursor = styled(motion.div).attrs((props) => {
  animate: {
    x: props.posX;
    y: props.posY;
  }
})`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px;
  background-color: red;
  border-radius: 50%;
`;

function MyApp({ Component, pageProps, router }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;
  const boxRef = useRef();
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  function getRelativeCoordinates(event, referenceElement) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX:
        (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY:
        (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    };
  }

  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            <motion.div ref={boxRef} onMouseMove={(e) => handleMouseMove(e)}>
              <motion.div
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  display: "flex",
                  margin: "-1em 0 0 -.5em",
                  position: "absolute",
                  zIndex: 500,
                }}
              />
              {loading ? (
                <Loader setLoading={setLoading} />
              ) : (
                <Component {...pageProps} key={router.route} />
              )}
            </motion.div>
          </AnimatePresence>
        </AnimateSharedLayout>
      </Layout>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp, { defaultMode: MODE.DARK });
