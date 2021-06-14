import { useDarkMode } from "next-dark-mode";
import styled from "styled-components";

const LayoutWrapper = styled.main`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
`;

export default function Layout({ children }) {
  const { darkModeActive } = useDarkMode();
  return (
    <LayoutWrapper className={`${darkModeActive ? "dark" : "light"}`}>
      {children}
    </LayoutWrapper>
  );
}
