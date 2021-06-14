import { useEffect } from "react";
import { Container } from "../scaffold";
import styled from "styled-components";
import { motion } from "framer-motion";
import { EASE, EASEIN } from ".././constants";

const CenterContent = styled(motion.div)`
  background-color: ${(props) => props.theme.bg1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  overflow: hidden;
`;
const bannerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: EASE,
      duration: 1,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      ease: EASE,
      duration: 0.5,
    },
  },
};

const AnimatedLettersWrap = styled(motion.div).attrs({
  variants: bannerVariants,
  animate: "animate",
  initial: "initial",
  exit: "exit",
})`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;
const AnimatedLetter = styled(motion.div).attrs({
  variants: letterAni,
})`
  display: flex;
`;

const topBorderVariants = {
  initial: {
    width: "0%",
    height: "15px",
  },
  animate: {
    y: 0,
    width: "100%",
    scaleY: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: { scaleY: 0, y: -20, transition: { duration: 1, ease: EASE } },
};

const TopBorder = styled(motion.div).attrs({
  variants: topBorderVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  background-color: ${(props) => props.theme.accent1};
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
`;
const rightBorderVariants = {
  initial: { width: "15px", height: "0%" },
  animate: {
    x: 0,
    height: "100%",
    scaleX: 1,
    transition: { delay: 0.5, duration: 1, ease: EASE },
  },
  exit: { scaleX: 0, x: 20, transition: { duration: 1, ease: EASE } },
};

const RightBorder = styled(motion.div).attrs({
  variants: rightBorderVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  background-color: ${(props) => props.theme.accent1};
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
`;

const bottomBorderVariants = {
  initial: {
    width: "0%",
    height: "15px",
  },
  animate: {
    y: 0,
    width: "100%",
    scaleY: 1,
    transition: { delay: 1, duration: 0.5, ease: EASE },
  },
  exit: { scaleY: 0, y: 20, transition: { duration: 1, ease: EASE } },
};
const BottomBorder = styled(motion.div).attrs({
  variants: bottomBorderVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  background-color: ${(props) => props.theme.accent1};
  display: flex;
  flex: 1;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const leftBorderVariants = {
  initial: { width: "15px", height: "0%" },
  animate: {
    x: 0,
    height: "100%",
    scaleX: 1,
    transition: { delay: 1.5, duration: 1, ease: EASE },
  },
  exit: { scaleX: 0, x: -20, transition: { duration: 1, ease: EASE } },
};
const LeftBorder = styled(motion.div).attrs({
  variants: leftBorderVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  background-color: ${(props) => props.theme.accent1};
  display: flex;
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const AnimatedLetters = ({ title }) => (
  <AnimatedLettersWrap>
    {[...title].map((letter, idx) => (
      <AnimatedLetter key={idx}>{letter}</AnimatedLetter>
    ))}
  </AnimatedLettersWrap>
);

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container direction="column">
      <CenterContent>
        <TopBorder />
        <RightBorder />
        <BottomBorder />
        <LeftBorder />
        <AnimatedLetters title={`loading...`} />
      </CenterContent>
    </Container>
  );
}
