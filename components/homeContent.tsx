import NoelImage from "./noelImage";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MOBILE_MIN_WIDTH, DESKTOP_MIN_WIDTH } from "../utils/constants";

const MainPosition1 = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  margin-top: -1em;
  margin-left: -3px;
  font-size: 4em;
  line-height: 1;
  margin-right: 15px;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    font-size: 4em;
    line-height: 0.9;
    margin-right: 0;
  }
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    font-size: 8em;
    line-height: 0.8;
  }
  font-weight: bold;
  z-index: 1;
`;
const MainPosition2 = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  margin-left: -3px;
  font-size: 4em;
  line-height: 1;
  text-align: center;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    font-size: 4em;
    line-height: 0.9;
  }
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    font-size: 8em;
    line-height: 0.8;
  }
  font-weight: bold;
  z-index: 3;
`;

const PositionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    align-items: start;
    flex-direction: column;
  }
`;

const NameAndSkills = styled(motion.span).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  font-size: 1em;
  font-family: monospace;
`;

export default function HomeContent() {
  return (
    <>
      <NoelImage />
      <PositionsWrap>
        <MainPosition1>UI</MainPosition1>
        <MainPosition2>Designer</MainPosition2>
      </PositionsWrap>
      <NameAndSkills>Product / Motion / Reactjs</NameAndSkills>
    </>
  );
}
