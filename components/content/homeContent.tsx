import styled from "styled-components";
import { motion } from "framer-motion";
import { DESKTOP_MIN_WIDTH, FADEINUPFADEEXIT } from "../../utils/constants";
import NoelImage from "../noelImage";

const Wrapper = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})``;

const JobTitle = styled(motion.h1)`
  margin: 0;
  font-size: 5em;
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    font-size: 8em;
  }
`;

const JobTitle2 = styled(motion.h1)`
  margin: 0;
  font-size: 5em;
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    font-size: 8em;
  }
`;
export default function HomeContent() {
  return (
    <Wrapper>
      <NoelImage />
      <JobTitle>UI </JobTitle>
      <JobTitle2>Designer</JobTitle2>
    </Wrapper>
  );
}
