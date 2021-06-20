import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const chevronWrapperVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 180, y: 0 },

  ontap: { y: 2 },
};

const ChevronWrapper = styled(motion.div).attrs(({ pageList }) => ({
  variants: chevronWrapperVariants,
  initial: "initial",
  animate: pageList ? "animate" : "initial",
  whileTap: "ontap",
}))`
  &:hover {
    cursor: pointer;
  }
`;

const BubbleLinks = styled.div`
  margin: 10px 0;
  background: #fff;
  border-radius: 0.5em;
  position: absolute;
  left: -18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
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

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: pageList ? 1 : 0 }}
      >
        <BubbleLinks listOpened={pageList}>
          <BubbleUl>
            <AboutLi
              onClick={() => {
                setPageList(false);
                // navigateTo("/about");
              }}
            >
              <Link href="/about">About</Link>
            </AboutLi>
            <BlogLi>Blog</BlogLi>
          </BubbleUl>
        </BubbleLinks>
      </motion.div>
    </>
  );
}
