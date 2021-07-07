import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DESKTOP_MIN_WIDTH,
  MOBILE_MIN_WIDTH,
  XLDESKTOP_MIN_WIDTH,
  FADEINUPFADEEXIT,
  EASE,
} from "../../utils/constants";
import NoelImage from "../noelImage";

const Wrapper = styled(motion.div)`
  display: none;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    display: flex;
    flex: 1;
    align-items: center;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  flex: 1;
  margin: -50% 0 0 14%;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: -50% 0 0 18%;
  }
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    margin: -34% 0 0 11%;
  }
  @media (min-width: ${XLDESKTOP_MIN_WIDTH}) {
    margin: -34% 0 0 20%;
  }
`;

const JobTitleBase = styled(motion.h1)`
  margin: 0;
  font-size: 5em;
  line-height: 1;

  margin-left: -5px;
  position: absolute;
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    font-size: 8em;
  }
`;

const JobTitle1 = styled(JobTitleBase).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  z-index: 1;
  margin-bottom: 1em;
`;

const JobTitle2Variant = {
  ...FADEINUPFADEEXIT,
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: 0.25 },
  },
};

const JobTitle2 = styled(JobTitleBase).attrs({
  variants: JobTitle2Variant,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  z-index: 3;
  margin-top: 1em;
`;

const ImageWrap = styled.div`
  z-index: 2;
  position: absolute;
  margin-left: 4.5em;
  margin-top: -3em;
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    margin-left: 7em;
    margin-top: -2em;
  } ;
`;

const MainSkills = styled(motion.p).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  font-family: monospace;
  position: absolute;
  margin-top: 13em;
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    margin-top: 20em;
  } ;
`;

export default function HomeContent() {
  return (
    <Wrapper>
      <InnerWrap>
        <JobTitle1>UI</JobTitle1>
        <ImageWrap>
          <NoelImage />
        </ImageWrap>
        <JobTitle2>Designer</JobTitle2>
        <MainSkills>React / Motion / Prototyping</MainSkills>
      </InnerWrap>
    </Wrapper>
  );
}
