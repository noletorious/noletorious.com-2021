import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../navigation/";
import { MOBILE_MIN_WIDTH, EASE } from "../constants";
import { motion } from "framer-motion";
import ListProjects from "../projects/listProjects";
import AboutNoelSection from "../aboutNoelSection";

const ColumnLeftUp = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg2};
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

// const LeftHelperMobile = styled(motion.div)`
//   display: initial;
//   @media (min-width: ${MOBILE_MIN_WIDTH}) {
//     display: none;
//   }
// `;

const Home = styled(motion.div).attrs({})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const About = styled(motion.div).attrs({})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ImageWrapper = styled(motion.div).attrs({ layoutId: "noel" })`
  position: relative;
  border-radius: 100%;
  overflow: hidden;
`;
const JobTitle = styled(motion.h1).attrs({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0 },
})`
  font-size: 4em;
  margin: -2em 0 0 0;
  z-index: 1;
`;

const social = [
  { channel: "LinkedIn", link: "https://linkedin.com/in/noletorious" },
  { channel: "Github", link: "https://github.com/noletorious" },
  { channel: "Dribbble", link: "https://dribbble.com/noletorious" },
];

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SocialItem = styled.li`
  float: left;
  margin: 0 0.5em;
`;

export default function HomeAbout({ current }) {
  const [aboutOrHome, setAboutOrHome] = useState(current);
  console.log(aboutOrHome);
  return (
    <>
      <ColumnLeftUp>
        <Navigation currentPage={current} navigateTo={setAboutOrHome} />
        <LeftHelper currentPage={current}>
          <HomeAboutWrapper>
            {aboutOrHome == "/" ? (
              <Home>
                <ImageWrapper>
                  <Image
                    src={`/noel-trimet-square.jpg`}
                    layout="intrinsic"
                    height={300}
                    width={300}
                  />
                </ImageWrapper>
                <JobTitle>UI Designer</JobTitle>
              </Home>
            ) : aboutOrHome == "/about" ? (
              <About>
                <ImageWrapper>
                  <Image
                    src={`/noel.jpg`}
                    layout="intrinsic"
                    height={100}
                    width={100}
                  />
                </ImageWrapper>
                <p>Front-end / UI Design / Motion</p>
                <SocialList>
                  {social.map((s, idx) => {
                    return <SocialItem key={idx}>{s.channel}</SocialItem>;
                  })}
                </SocialList>
              </About>
            ) : null}
          </HomeAboutWrapper>
        </LeftHelper>
        {/* 
        <LeftHelperMobile currentPage={current}>
          <HomeAboutWrapper></HomeAboutWrapper>
        </LeftHelperMobile> */}
      </ColumnLeftUp>
      <ColumnRightDown>
        {aboutOrHome == "/" ? (
          <ListProjects />
        ) : aboutOrHome == "/about" ? (
          <AboutNoelSection />
        ) : null}
      </ColumnRightDown>
    </>
  );
}
