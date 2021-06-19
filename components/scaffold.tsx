import styled from "styled-components";
import { MOBILE_MIN_WIDTH } from "../utils/constants";

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100vh;
  background-color: ${(props) => props.theme.bg1};
  flex-direction: ${(props) =>
    props.direction === "column" ? "row" : "column"};
  overflow: auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;
