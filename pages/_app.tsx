import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode, MODE } from "next-dark-mode";
import Layout from "../components/layout";
import { lightTheme, darkTheme } from "../utils/theme";
import Sparkles from "../components/sparkles";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Loader from "../components/loader";
import "../styles/globals.css";
// import Cursor from "../components/cursor";
import styled from "styled-components";

const Cursor = styled(motion.div).attrs((props) => ({
  initial: { scale: 5 },
  animate: {
    scale: props.mouseStyle === "pointer" ? 0.5 : 1,
    x: props.posX,
    y: props.posY,
    transition: { type: "spring", damping: 20 },
  },
}))`
  width: 2em;
  height: 2em;
  border: 2px solid ${(props) => props.theme.accent1};
  border-radius: 50%;
  display: flex;
  margin: -1em 0 0 -1em;
  position: absolute;
  z-index: 500;
  pointer-events: none;
`;

const SparklesWrap = styled.div`
  z-index: 500;
`;

const SparkleInner = styled.div`
  z-index: 500;
`;

function MyApp({ Component, pageProps, router }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;
  const boxRef = useRef();
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [mouseStyle, setMouseStyle] = useState("");

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const getRelativeCoordinates = (event, referenceElement) => {
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
  };

  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  const handleMouseHover = (e) => {
    const mouseStyle = e.target;
    const computed = window.getComputedStyle(mouseStyle)["cursor"];
    setMouseStyle(computed);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              ref={boxRef}
              onMouseMove={(e) => {
                handleMouseMove(e);
                handleMouseHover(e);
              }}
            >
              <Cursor
                theme={theme}
                mouseStyle={mouseStyle}
                posY={mousePosition.y}
                posX={mousePosition.x}
              ></Cursor>
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
