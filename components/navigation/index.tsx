import { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "next-dark-mode";
import DarkModeToggle from "../darkModeToggle";
import Logo from "../logo";
import Link from "next/link";
import { motion } from "framer-motion";
import Sparkles from "../sparkles";
import ChevronDropDown from "../chevronDropDown";

const Nav = styled.nav`
  display: flex;
`;
const NavItem = styled.div`
  margin: 1em;
`;

const DarkModeWrapper = styled.a`
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
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export default function Navigation({ currentPage, navigateTo }) {
  const darkModeActive = useDarkMode();
  const [hoverHomeButton, isHoveringHomeButton] = useState(false);
  const [homeClick, homeClicked] = useState(1);

  return (
    <Nav>
      <NavItem>
        <Link href="/">
          <HomeButton
            onHoverStart={(e) => {
              isHoveringHomeButton(true);
            }}
            onHoverEnd={(e) => {
              isHoveringHomeButton(false);
            }}
            onClick={() => {
              homeClicked(homeClick + 1);
              navigateTo("/");
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
        <ChevronDropDown homeClicked={homeClick} navigateTo={navigateTo} />
      </NavItem>
      <NavItem>
        <DarkModeWrapper>
          <DarkModeToggle />
        </DarkModeWrapper>
      </NavItem>
    </Nav>
  );
}
