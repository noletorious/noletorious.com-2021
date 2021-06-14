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
  background-color: ${(props) => props.theme.bg1};
`;

const HomeAboutWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
`;

const leftColumnAtHome = {
  initial: {
    width: "30vw",
  },
  animate: {
    width: "50vw",
    transition: {
      ease: EASE,
    },
  },
  exit: {
    width: "30vw",
  },
};

const leftColumnAtAbout = {
  initial: {
    width: "50vw",
  },
  animate: {
    width: "30vw",
    transition: {
      ease: EASE,
    },
  },
  exit: {
    width: "50vw",
  },
};

const LeftHelper = styled(motion.div).attrs((props) => ({
  initial: "initial",
  animate: "animate",
  exit: "initial",
  variants: props.currentPage === "/" ? leftColumnAtHome : leftColumnAtAbout,
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

const Content = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  margin: 0 2em;
`;

const FancyImage = styled(Image)`
  border-radius: 50%;
`;

const Home = styled(motion.div).attrs({})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const About = styled(motion.div).attrs({})``;
const JobTitle = styled(motion.h1)`
  font-size: 4em;
`;

export default function HomeAbout({ current }) {
  return (
    <>
      <ColumnLeftUp>
        <Navigation currentPage={current} />
        <LeftHelper currentPage={current}>
          <HomeAboutWrapper>
            <Content>
              {current == "/" ? (
                <Home>
                  <ImageWrapper>
                    <FancyImage
                      src={`/noel-trimet-square.jpg`}
                      width={200}
                      height={200}
                      layoutId="noel"
                    />
                  </ImageWrapper>
                  <JobTitle>UI Designer</JobTitle>
                </Home>
              ) : current == "/about" ? (
                <About>
                  <ImageWrapper>
                    <FancyImage
                      src={`/noel-trimet-square.jpg`}
                      width={200}
                      height={200}
                      layoutId="noel"
                    />
                  </ImageWrapper>
                </About>
              ) : null}
            </Content>
          </HomeAboutWrapper>
        </LeftHelper>

        <LeftHelperMobile currentPage={current}>
          <HomeAboutWrapper></HomeAboutWrapper>
        </LeftHelperMobile>
      </ColumnLeftUp>
      <ColumnRightDown>
        <ListProjects />
      </ColumnRightDown>
    </>
  );
}
