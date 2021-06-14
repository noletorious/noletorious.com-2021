import { Container } from "../components/scaffold";
import styled from "styled-components";
import { motion } from "framer-motion";

const comingSoonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const CenterContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function ComingSoon() {
  return (
    <Container>
      <CenterContent>
        <motion.p
          variants={comingSoonVariants}
          initial="initial"
          animate="animate"
        >
          Portfolio coming soon...
        </motion.p>
      </CenterContent>
    </Container>
  );
}
