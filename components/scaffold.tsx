import styled from "styled-components";
import {
  FADEINUPFADEEXIT,
  MOBILE_MIN_WIDTH,
  EASE,
  EASEOUT,
} from "../utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100vh;
  flex-direction: ${(props) =>
    props.direction === "column" ? "row" : "column"};
  overflow: auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;

export const ImageHeader = styled(motion.div).attrs((props) => ({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  position: relative;
  width: 100%;
  height: 50vh;
  border-radius: 0 0 0 1em;
  background-image: url(${(props) => props.image});
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 0 2em 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0 0 1em 0;
  }
`;
export const MediaWrap = styled(motion.div)`
  position: relative;
  max-width: 800px;
  display: flex;
  padding: 0 1em;
  border-radius: 1em;
  margin: 0 0 1em 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0;
  }
`;
export const PortraitMediaWrap = styled(motion.div)`
  position: relative;
  max-width: 500px;
  display: flex;
  padding: 0 1em;
  border-radius: 1em;
`;
export const CarouselMediaWrap = styled(motion.div)`
  position: relative;
  max-width: 600px;
  display: flex;
  margin: 0 auto 3em;
  padding: 0;
  border-radius: 1em;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0;
  }
`;

export const BadgeWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const Badge = styled.span`
  font-size: 0.5em;
  padding: 0.5em 1em;
  background: ${(props) => props.theme.accent1};
  color: ${(props) => props.theme.fontColorReverse};
`;

export const TextSection = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  margin: ${(props) => (props.first ? "0" : 0)} auto 4em auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: ${(props) => (props.first ? "-5em" : 0)} auto 6em auto;
  } ;
`;

export const Section = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  position: relative;
  margin: ${(props) => (props.first ? "-3em" : 0)} auto 4em auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: ${(props) => (props.first ? "-5em" : 0)} auto 6em auto;
  } ;
`;

export const SectionColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 4em;
    margin: 0;
  }
`;

export const TextAndLinksInnerLink = styled(Link)`
  display: inherit;
`;

export const SectionLinkWrap = styled.div`
  margin: 1em 0;
`;

export const SectionLink = styled(Link)`
  margin-top: 1em;
`;

export const TextsAndLinksLeft = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  line-height: 1.5;
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${(props) => (props.mobileReverse ? 0 : 1)};
  max-width: 500px;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: ${(props) => (props.mobileReverse ? 1 : -1)};
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const TextsAndLinksRight = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  line-height: 1.5;
  display: inline;
  flex-direction: column;
  margin: 0 1em;
  align-items: center;
  justify-content: center;
  order: 1;
  max-width: 500px;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: 1;
  }
`;

const jobDescVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: EASE,
      duration: 0.75,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      ease: EASEOUT,
      duration: 0.75,
      when: "afterChildren",
    },
  },
};

export const JobDescContainer = styled(motion.div).attrs({
  variants: jobDescVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color}; 
  background-color: ${(props) => props.transColor};
  flex-direction: column;
  border-radius: 0 0 0 1em;
  position;relative;
`;

export const JobDescription = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  color: #fff;
  font-size: 0.9em;
  text-align: center;
  padding: 0 2em;
`;

export const JobDescToggle = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1em;
  right: 1.25em;
  display: inline-flex;
  padding: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const ToggleWrapper = styled(motion.div)``;

export const JobTitle = styled(motion.h2).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  color: #fff;
`;

const colorBoxWrapVariants = {
  animate: {
    transition: { duration: 0.5, staggerChildren: 0.1, when: "afterChildren" },
  },
  exit: {
    transition: { duration: 0.5, staggerChildren: 0.1, when: "afterChildren" },
  },
};

export const ColorBoxWrap = styled(motion.div).attrs({
  variants: colorBoxWrapVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
`;

const colorBoxVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const ColorBox = styled(motion.div).attrs((props) => ({
  variants: colorBoxVariants,
}))`
  border: ${(props) =>
    props.transparent ? "1px dashed rgba(255, 255, 255, 0.5)" : "none"};
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  margin-right: 1em;
`;

export const CloseWrap = styled.div`
  display: flex;
  position: relative;
`;

export const TextAndLinksInner = styled.span`
  margin-bottom: 1em;
  opacity: 0.5;
`;

export const BoxRadius = styled.div`
  border-radius: 1em;
  overflow: hidden;
`;

export const CarouselImageWrap = styled(BoxRadius)`
  border-radius: 1em;
  overflow: hidden;
`;
export const ReactPlayerWrap = styled(BoxRadius)`
  border-radius: 1em;
  overflow: hidden;
`;

export const CarouselItem = styled.div`
  margin: 0 1em;
`;

export const ImageFooter = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  position: relative;
  width: 100%;
  height: 50vh;
  border-radius: 1em 0 0 0;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: 75%;
  background-repeat: no-repeat;
  background-color: #fff;
  margin: 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    background-size: 45%;
  }
`;

export const UnorderedList = styled.ul``;
export const OrderedList = styled.ol``;
export const ListItem = styled.li``;
