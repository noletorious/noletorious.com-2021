import { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "next-dark-mode";
import DarkModeToggle from "./darkModeToggle";
import Logo from "./icons/logo";
import Link from "next/link";
import { motion } from "framer-motion";
import Sparkles from "./sparkles";
import ChevronDropDown from "./chevronDropDown";

const Nav = styled.nav`
  display: flex;
  z-index: 100;
  width: 100%;
  background-color: ${(props) => props.theme.bg1};
`;
const NavItem = styled.div`
  margin: 1em;
`;

const DarkModeWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const homeButtonVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 },
};

const HomeButton = styled(motion.div).attrs({
  initial: "initial",
  variants: homeButtonVariants,
})`
  margin-left: 0.5em;
  z-index: 200;
  &:hover {
    cursor: pointer;
  }
`;

export default function Navigation() {
  const darkModeActive = useDarkMode();
  const [hoverHomeButton, isHoveringHomeButton] = useState(false);
  const [homeClick, homeClicked] = useState(1);

  return (
    <Nav>
      <NavItem>
        <Link href="/">
          <HomeButton
            onHoverStart={() => {
              isHoveringHomeButton(true);
            }}
            onHoverEnd={() => {
              isHoveringHomeButton(false);
            }}
            onClick={() => {
              homeClicked(homeClick + 1);
            }}
          >
            {hoverHomeButton ? (
              <Sparkles>
                <Logo size={16} mode={darkModeActive} />
              </Sparkles>
            ) : (
              <Logo size={16} mode={darkModeActive} />
            )}
          </HomeButton>
        </Link>
      </NavItem>
      <NavItem>
        <ChevronDropDown homeClicked={homeClick} />
      </NavItem>
      <NavItem>
        <DarkModeWrapper>
          <DarkModeToggle />
        </DarkModeWrapper>
      </NavItem>
    </Nav>
  );
}
