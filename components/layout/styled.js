import styled from "styled-components";

export const LayoutWrapper = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  align-items: stretch;
  height: 100%;
  background: ${(props) => props.theme.bg};
`;
