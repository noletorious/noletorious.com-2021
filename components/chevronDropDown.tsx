import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EASE } from "../utils/constants";
import Sparkles from "./sparkles";

const chevronWrapperVariants = {
  initial: { rotate: 0, transition: { ease: EASE } },
  animate: { rotate: 180, y: 0, transition: { ease: EASE } },
  ontap: { y: 2 },
};

const ChevronWrapper = styled(motion.div).attrs(({ listOpened }) => ({
  variants: chevronWrapperVariants,
  initial: "initial",
  animate: listOpened ? "animate" : "initial",
  whileTap: "ontap",
}))`
  &:hover {
    cursor: pointer;
  }
`;

const BubbleLinks = styled(motion.div).attrs({
  initial: { opacity: 0, y: -10, transition: { ease: EASE }, x: -17 },
  animate: { opacity: 1, y: 0, transition: { ease: EASE } },
  exit: { opacity: 0, y: 10, transition: { ease: EASE, duration: 1 } },
})`
  margin: 10px 0;
  background: ${(props) => props.theme.bg1reverse};
  border-radius: 0.5em;
  position: absolute;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 13px;
    border-bottom: 11px solid ${(props) => props.theme.bg1reverse};
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
  }
`;

const BubbleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5em 1em;
`;

const baseLi = styled(motion.li)`
  font-family: monospace;
  font-size: 1.5em;
`;
const BlogLi = styled(baseLi)`
  margin-top: 0.5em;
  color: ${(props) => props.theme.fontColorReverse};
  opacity: 0.2;
`;
const AboutLi = styled(baseLi)`
  &:hover {
    cursor: pointer;
  }
`;

const AboutLink = styled.a`
  color: ${(props) => props.theme.accent1reverse} !important;
  border-bottom: 1px dotted ${(props) => props.theme.accent1reverse} !important;
  &:hover {
    font-weight: 300 !important;
  }
`;

export default function ChevronDropDown({ homeClicked }) {
  const [aboutHovered, setAboutHovered] = useState(false);
  const [pageList, setPageList] = useState(false);
  let currHomeClick = 1;
  function homeWasClicked(homeClicked) {
    if (currHomeClick < homeClicked) {
      setPageList(false);
      currHomeClick = homeClicked;
    }
  }
  useEffect(() => {
    homeWasClicked(homeClicked);
  }, [homeClicked]);

  return (
    <>
      <ChevronWrapper
        onClick={() => {
          setPageList(!pageList);
        }}
        listOpened={pageList}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </ChevronWrapper>
      {pageList && (
        <BubbleLinks>
          <BubbleUl>
            <AboutLi
              onClick={() => {
                setPageList(false);
              }}
              onHoverStart={(e) => {
                setAboutHovered(true);
              }}
              onHoverEnd={(e) => {
                setAboutHovered(false);
              }}
            >
              <Link href="/about" passHref>
                {aboutHovered ? (
                  <AboutLink>
                    <Sparkles>
                      <span>About</span>
                    </Sparkles>
                  </AboutLink>
                ) : (
                  <AboutLink>
                    <span>About</span>
                  </AboutLink>
                )}
              </Link>
            </AboutLi>
            <BlogLi>Blog</BlogLi>
          </BubbleUl>
        </BubbleLinks>
      )}
    </>
  );
}
