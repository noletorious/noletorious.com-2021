import { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "next-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "../darkModeToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import Nlogo from "../nLogo";
import Sparkles from "../sparkles";

const Nav = styled.nav`
  display: flex;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-directtion: row;
  padding-left: 10px;
`;

const DarkModeWrapper = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const chevronInitialVariants = {
  initial: { rotate: 0, y: "0" },
  animate: { rotate: 180 },
  ontap: { y: "2px" },
};

const ChevronWrapper = styled(motion.div).attrs(({ listOpened, current }) => ({
  variants: chevronInitialVariants,
  initial: current === "/" ? "initial" : "animate",
  animate: listOpened ? "animate" : "initial",
  whileTap: "ontap",
}))`
  &:hover {
    cursor: pointer;
  }
`;

const homeButtonVariants = {
  initial: { opacity: 1 },
  hover: { scale: 1.1 },
};

const HomeButton = styled(motion.div).attrs({
  initial: "initial",

  variants: homeButtonVariants,
})`
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  margin: 1em;
`;

const bubbleVisibleVariants = {
  initial: { y: "-10px", opacity: 0 },
  animate: { y: "0", opacity: 1 },
};
const bubbleHiddenVariants = {
  initial: { y: "0px", opacity: 1 },
  animate: { y: "-10px", opacity: 0 },
};

const BubbleLinks = styled(motion.div).attrs((props) => ({
  variants: props.listOpened ? bubbleVisibleVariants : bubbleHiddenVariants,
  initial: "initial",
  animate: "animate",
  exit: "initial",
}))`
  display: flex;
  flex: 1;
  position: absolute;
  background: #fff;
  border-radius: 10px;
  color: ${(props) => props.theme.black};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
`;

const BubbleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const BlogLi = styled.li`
  color: #999;
  text-decoration: ${(props) =>
    props.currentPage === "/" ? "underline" : "none"};
  margin: 10px 0;
  padding: 0 15px;
  &:hover {
    cursor: default;
  }
`;
const AboutLi = styled.li`
  text-decoration: ${(props) =>
    props.currentPage === "/about" ? "underline" : "none"};
  margin: 10px 0;
  padding: 0 15px;
`;

export default function Navigation({ currentPage }) {
  const [pageList, setPageList] = useState(false);
  const [hoverHomeButton, isHoveringHomeButton] = useState(false);
  const { darkModeActive } = useDarkMode();

  return (
    <Nav>
      <InnerWrapper>
        <NavItem>
          <Link href="/">
            <HomeButton
              onHoverStart={(e) => {
                isHoveringHomeButton(true);
              }}
              onHoverEnd={(e) => isHoveringHomeButton(false)}
            >
              {hoverHomeButton ? (
                <Sparkles>
                  <Nlogo size={14} mode={darkModeActive} />
                </Sparkles>
              ) : (
                <Nlogo size={14} mode={darkModeActive} />
              )}
            </HomeButton>
          </Link>
        </NavItem>
        <NavItem>
          <ChevronWrapper
            onClick={() => {
              setPageList(!pageList);
            }}
            listOpened={pageList}
            current={currentPage}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </ChevronWrapper>
          {pageList && (
            <BubbleLinks listOpened={pageList}>
              <BubbleUl>
                <AboutLi current={currentPage}>
                  <Link href="/about">About</Link>
                </AboutLi>
                <BlogLi current={currentPage}>Blog</BlogLi>
              </BubbleUl>
            </BubbleLinks>
          )}
        </NavItem>
        <NavItem>
          <DarkModeWrapper>
            <DarkModeToggle />
          </DarkModeWrapper>
        </NavItem>
      </InnerWrapper>
    </Nav>
  );
}
