import { motion } from "framer-motion";
import styled from "styled-components";

const titleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Title = styled(motion.h2).attrs({
  variants: titleVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})``;

export default function AboutDetails() {
  return <Title>About details</Title>;
}
