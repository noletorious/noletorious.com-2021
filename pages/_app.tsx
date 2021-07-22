import { useState, useEffect, useRef, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import withDarkMode, { useDarkMode, MODE } from "next-dark-mode";
import Layout from "../components/layout";
import { lightTheme, darkTheme } from "../utils/theme";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Loader from "../components/loader";
import "../styles/globals.css";
import styled from "styled-components";
import { EASE } from "../utils/constants";

const Cursor = styled(motion.div).attrs((props) => ({
  initial: { scale: 0.8, opacity: 0, x: -25 },
  animate: {
    scale: props.mouseClick
      ? 0.7
      : props.mouseStyle === "pointer"
      ? [0.8, 0.9, 0.8]
      : 0.8,
    x: props.posX,
    y: props.posY,
    // rotate: props.mouseClick ? 180 : 0,
    borderRadius: "50%",
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 500,
      ease: EASE,
      scale: {
        repeat: props.mouseClick
          ? null
          : props.mouseStyle === "pointer"
          ? Infinity
          : null,
        repeatType: props.mouseClick
          ? null
          : props.mouseStyle === "pointer"
          ? "loop"
          : null,
      },
    },
    opacity: 1,
  },
}))`
  width: 2em;
  height: 2em;
  border: 2px solid ${(props) => props.theme.accent1};
  display: flex;
  margin: -1em 0 0 -1em;
  position: absolute;
  z-index: 1000;
  pointer-events: none;
`;

function MyApp({ Component, pageProps, router }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;
  const boxRef = useRef();
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [mouseStyle, setMouseStyle] = useState("");
  const [mouseClick, setMouseClick] = useState(false);

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
      <Layout loading={loading.toString()}>
        <AnimateSharedLayout type="crossfade">
          <motion.div
            ref={boxRef}
            onMouseDown={(e) => {
              setMouseClick(true);
            }}
            onMouseUp={(e) => {
              setMouseClick(false);
              handleMouseHover(e);
            }}
            onMouseMove={(e) => {
              handleMouseMove(e);
              handleMouseHover(e);
            }}
          >
            <Cursor
              mouseClick={mouseClick}
              theme={theme}
              mouseStyle={mouseStyle}
              posY={mousePosition.y}
              posX={mousePosition.x}
            >
              {mouseClick}
            </Cursor>
            <AnimatePresence exitBeforeEnter>
              {loading ? (
                <Loader setLoading={setLoading} />
              ) : (
                <Component {...pageProps} key={router.route} />
              )}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </Layout>
    </ThemeProvider>
  );
}

export default withDarkMode(MyApp, { defaultMode: MODE.DARK });
