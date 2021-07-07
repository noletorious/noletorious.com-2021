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
  display: flex;
  flex: 1;flex-direction:column
}
`;

const InnerWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const JobTitleBase = styled(motion.h1)`
  margin: 0;

  line-height: 1;
  margin-left: -5px;
  position: relative;
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
  margin-top: -1em;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
  }
`;

const ImageWrap = styled.div`
  z-index: 2;
  position: relative;
`;

const MainSkills = styled(motion.p).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  font-family: monospace;
  position: relative;
`;

export default function HomeContent() {
  return (
    <Wrapper>
      <InnerWrap>
        <ImageWrap>
          <NoelImage />
        </ImageWrap>
        <JobTitle2>UI Designer</JobTitle2>
        <MainSkills>React / Motion / Prototyping</MainSkills>
      </InnerWrap>
    </Wrapper>
  );
}
