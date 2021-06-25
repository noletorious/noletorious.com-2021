import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { EASE, FADEINUPFADEEXIT } from "../utils/constants";
import Navigation from "./navigation";
import Image from "next/image";
//The project data
import { jobs } from "../data/jobs";
//The pages content
import HomeContent from "../components/content/homeContent";
import AboutContent from "../components/content/aboutContent";

const LeftUpColumn = styled(motion.div).attrs((props) => ({
  initial: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: { ease: EASE, duration: 1 },
  },
  animate: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: { ease: EASE, duration: 1 },
  },
  exit: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: {
      ease: EASE,
      duration: 1,
      delay: props.currentPage == "/" ? 0 : 1,
    },
  },
}))`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.accent1};
  position: relative;
`;
const RightBottomColumn = styled(motion.div)`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.bg1};
  flex-direction: column;
  overflow: scroll;
`;

const ContentWrap = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;
  flex-direction: column;
`;

const listWrapperVariants = {
  animate: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
      // staggerDirection: -1,
    },
  },
};

const ListWrapper = styled(motion.div).attrs({
  variants: listWrapperVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 2em;
`;

const ProjectImageWrap = styled(motion.div).attrs((props) => ({
  variants: FADEINUPFADEEXIT,
  key: props.key,
}))`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 1em 0;
`;

export default function HomeAbout() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.pathname);
  return (
    <>
      <LeftUpColumn currentPage={router.pathname}>
        <Navigation />
        <ContentWrap>
          {currentPage == "/" && <HomeContent />}
          {currentPage == "/about" && <AboutContent />}
        </ContentWrap>
      </LeftUpColumn>
      <RightBottomColumn>
        <ListWrapper>
          {currentPage == "/" &&
            jobs.map((j, i) => (
              <ProjectImageWrap>
                <Image
                  layout="intrinsic"
                  width={1076}
                  height={1076}
                  src={j.image}
                />
              </ProjectImageWrap>
            ))}
        </ListWrapper>
      </RightBottomColumn>
    </>
  );
}
