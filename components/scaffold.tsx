import styled from "styled-components";
import { MOBILE_MIN_WIDTH } from "../utils/constants";
import { motion } from "framer-motion";

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
