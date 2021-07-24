import styled from "styled-components";
import { motion } from "framer-motion";
import * as Styled from "../scaffold";
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
export default function AttensaContent({ image }) {
  return (
    <Styled.Container>
      <Styled.ContentWrap>
        <Styled.ImageHeader image={image} />
      </Styled.ContentWrap>
    </Styled.Container>
  );
}
