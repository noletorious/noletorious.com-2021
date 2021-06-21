import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EASE } from "../utils/constants";

const chevronWrapperVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 180, y: 0 },
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
  animate: { opacity: 1, y: 0, x: -17 },
  exit: { opacity: 0, y: 10 },
})`
  margin: 10px 0;
  background: #fff;
  border-radius: 0.5em;
  position: absolute;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 13px;
    border-bottom: 11px solid #fff;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
  }
`;

const BubbleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5em 1em;
`;

const baseLi = styled.li`
  color: ${(props) => props.theme.black};
  font-family: monospace;
  font-size: 1.5em;
`;
const BlogLi = styled(baseLi)`
  margin-top: 0.5em;
  color: #999;
`;
const AboutLi = styled(baseLi)`
  &:hover {
    cursor: pointer;
  }
`;

export default function ChevronDropDown({ homeClicked }) {
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
  const [pageList, setPageList] = useState(false);
  return (
    <>
      <ChevronWrapper
        onClick={() => {
          setPageList(!pageList);
          console.log(pageList);
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
            >
              <Link href="/about">About</Link>
            </AboutLi>
            <BlogLi>Blog</BlogLi>
          </BubbleUl>
        </BubbleLinks>
      )}
    </>
  );
}
