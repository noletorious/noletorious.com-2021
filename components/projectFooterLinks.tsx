import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADEINUPFADEEXIT } from "../utils/constants";
import FadeInWhenVisible from "./fadeInWhenVisible";

const NextLinks = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 2em;
`;

const ProjectFooterLinks = ({ nextLink, next }) => {
  return (
    <FadeInWhenVisible>
      <NextLinks>
        <Link href={"/"}>
          <a>← Home</a>
        </Link>
        <Link href={nextLink}>
          <a>{next} →</a>
        </Link>
      </NextLinks>
    </FadeInWhenVisible>
  );
};
export default ProjectFooterLinks;
