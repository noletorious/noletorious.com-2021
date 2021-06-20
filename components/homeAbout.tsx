import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { EASE } from "../utils/constants";
import Navigation from "../components/navigation";
import HomeContent from "../components/homeContent";
import AboutContent from "../components/aboutContent";
import HomeProjectList from "./projects/homeProjectList";
import AboutDetails from "./aboutDetails";

const LeftUpColumn = styled(motion.div).attrs((props) => ({
  initial: {
    flexGrow: props.currentPage == "/" ? 1 : 0.5,
    transition: { ease: EASE, duration: 1 },
  },
  animate: {
    flexGrow: props.currentPage == "/" ? 1 : 0.5,
    transition: { ease: EASE, duration: 1 },
  },
  exit: {
    flexGrow: props.currentPage == "/" ? 1 : 0.5,
    transition: { ease: EASE, duration: 1 },
  },
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg1};
`;
const RightBottomColumn = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.bg1};
  overflow: scroll;
`;

const ContentWrap = styled(motion.div)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;
  flex-direction: column;
`;

export default function HomeAbout() {
  const router = useRouter();
  const [aboutOrHome, setHomeOrAbout] = useState(router.pathname);

  console.log(router.pathname);
  return (
    <>
      <LeftUpColumn currentPage={router.pathname}>
        <Navigation />
        <ContentWrap>
          {aboutOrHome == "/" && <HomeContent />}
          {aboutOrHome == "/about" && <AboutContent />}
        </ContentWrap>
      </LeftUpColumn>
      <RightBottomColumn>
        {aboutOrHome == "/" && <HomeProjectList />}
        {aboutOrHome == "/about" && <AboutDetails />}
      </RightBottomColumn>
    </>
  );
}
