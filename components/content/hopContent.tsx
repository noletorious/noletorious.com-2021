import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "../scaffold";
import { FADEINUPFADEEXIT } from "../../utils/constants";

const ImageHeader = styled(motion.div).attrs((props) => ({
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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export default function HopContent({ image }) {
  return (
    <Container>
      <ContentWrap>
        <ImageHeader image={image} />
      </ContentWrap>
    </Container>
  );
}
