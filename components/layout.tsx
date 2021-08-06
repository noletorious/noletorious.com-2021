import { useDarkMode } from "next-dark-mode";
import styled from "styled-components";

const LayoutWrapper = styled.main`
  background-color: ${(props) => props.theme.bg};
  display: flex;
`;

const LayoutWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  margin: 0 auto;
  max-width: ${(props) => (props.loading ? "100%" : "1920px")};
  color: ${(props) => props.theme.fontColor};

}
`;

export default function Layout({ children, loading }) {
  const { darkModeActive } = useDarkMode();
  return (
    <LayoutWrapper className={`${darkModeActive ? "dark" : "light"}`}>
      <LayoutWrapperInner loading={loading}>{children}</LayoutWrapperInner>
    </LayoutWrapper>
  );
}
