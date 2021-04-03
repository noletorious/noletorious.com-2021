import * as Styled from "./styled";
import { useDarkMode } from "next-dark-mode";

export default function Layout({ children }) {
  const { darkModeActive } = useDarkMode();
  console.log(darkModeActive);
  return (
    <Styled.LayoutWrapper className={`${darkModeActive ? "dark" : "light"}`}>
      {children}
    </Styled.LayoutWrapper>
  );
}
