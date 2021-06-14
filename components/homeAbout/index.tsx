import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../navigation";
import { MOBILE_MIN_WIDTH, EASE } from "../constants";
import { motion } from "framer-motion";
import ListProjects from "../projects/listProjects";

const ColumnLeftUp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg1};
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
  }
`;
const ColumnRightDown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2em;
  overflow: scroll;
  background-color: ${(props) => props.theme.bg};
`;

const HomeAboutWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  flex-direction: column;
`;

const LeftHelper = styled(motion.div).attrs((props) => ({
  initial: {
    width: props.currentPage == "/" ? "50vw" : "30vw",
  },
  animate: {
    width: props.currentPage == "/" ? "50vw" : "30vw",
  },
}))`
  display: none;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    display: flex;
    flex: 1;
    align-items: center;
  }
`;

const LeftHelperMobile = styled(motion.div).attrs((props) => ({
  initial: "initial",
  animate: "animate",
  exit: "initial",
  variants: null,
}))`
  display: initial;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    display: none;
  }
`;

const ImageWrapper = styled(motion.div).attrs({
  $layoutId: "noel",
})`
  border-radius: 50%;
  overflow: hidden;
  width: 50%;
  margin-left: 5em;
`;

const Home = styled(motion.div).attrs({})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const About = styled(motion.div).attrs({})``;
const JobTitle = styled(motion.h1).attrs({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0 },
})`
  font-size: 4em;
  margin: -2em 0 0 0;
  z-index: 1;
`;

export default function HomeAbout({ current }) {
  return (
    <>
      <ColumnLeftUp>
        <Navigation currentPage={current} />
        <LeftHelper currentPage={current}>
          <HomeAboutWrapper>
            <ImageWrapper>
              <Image
                src={`/noel-trimet-square.jpg`}
                layout="responsive"
                height="100%"
                width="100%"
              />
            </ImageWrapper>
            {current == "/" ? (
              <Home>
                <JobTitle>UI Designer</JobTitle>
              </Home>
            ) : current == "/about" ? (
              <About></About>
            ) : null}
          </HomeAboutWrapper>
        </LeftHelper>

        <LeftHelperMobile currentPage={current}>
          <HomeAboutWrapper></HomeAboutWrapper>
        </LeftHelperMobile>
      </ColumnLeftUp>
      <ColumnRightDown>
        {current == "/" ? (
          <ListProjects />
        ) : current == "/about" ? (
          <p>about</p>
        ) : null}
      </ColumnRightDown>
    </>
  );
}
