import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { EASE, FADEINUPFADEEXIT, MOBILE_MIN_WIDTH } from "../utils/constants";
import Navigation from "./navigation";
//The project data
import { jobs } from "../data/jobs";
//The pages content
import HomeContent from "../components/content/homeContent";
import HomeContentMobile from "../components/content/homeContentMobile";
import AboutContent from "./content/aboutLeftTopContent";
import AboutRightBottomContent from "./content/aboutRightBottomContent";
import HomeRightBottomContent from "./content/homeRightBottomContent";
import TrimetContent from "./content/trimetContent";
import HopContent from "./content/hopContent";
import AttensaContent from "./content/attensaContent";
import CascadiaContent from "./content/cascadiaContent";
import ArrivalsContent from "./content/arrivalsContent";

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;
const MobileLeftUpColumn = styled(motion.div)`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
`;

const LeftUpColumn = styled(motion.div).attrs((props) => ({
  initial: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: {
      ease: EASE,
    },
  },
  animate: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: { ease: EASE, duration: 0.5 },
  },
  exit: {
    flexGrow:
      props.currentPage == "/" ? 1 : props.currentPage == "/about" ? 0.3 : 0,
    transition: {
      ease: EASE,
      duration: 0.5,
      delay: 0.5,
    },
  },
}))`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg1};
  position: relative;
  height: 100%;
`;
const RightBottomColumn = styled(motion.div)`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.bg1};
  flex-direction: column;
  overflow: scroll;
`;

const ContentWrap = styled(motion.div)`
  display: none;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }
`;

const MobileContentWrap = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin: 51px 0 0 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
`;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const useCurrentWidth = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());
  //call once at the beginnging
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return width;
};

export default function HomeAbout() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.pathname);
  const [isMobile, setIsMobile] = useState(false);
  let mobileWidth = useCurrentWidth();
  const checkIsMobile = () => {
    if (mobileWidth < 786) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkIsMobile();
  }, [mobileWidth]);

  return (
    <>
      <Content>
        {isMobile && (
          <MobileLeftUpColumn>
            <MobileNavigation>
              <Navigation />
            </MobileNavigation>
            <MobileContentWrap>
              {currentPage == "/" && <HomeContentMobile />}
              {currentPage == "/about" && <AboutContent />}
            </MobileContentWrap>
          </MobileLeftUpColumn>
        )}
        {!isMobile && (
          <LeftUpColumn currentPage={router.pathname}>
            <Navigation />
            <ContentWrap>
              {currentPage == "/" && <HomeContent />}
              {currentPage == "/about" && <AboutContent />}
            </ContentWrap>
          </LeftUpColumn>
        )}
        <RightBottomColumn>
          {currentPage == "/" && <HomeRightBottomContent />}
          {currentPage == "/about" && (
            <AboutRightBottomContent image={"/portland-about.jpg"} />
          )}
          {currentPage == "/trimet" && <TrimetContent image={jobs[0].image} />}
          {currentPage == "/attensa" && (
            <AttensaContent image={jobs[2].image} />
          )}
          {currentPage == "/hop-fastpass" && (
            <HopContent image={jobs[1].image} />
          )}
          {currentPage == "/cascadiathreads" && (
            <CascadiaContent image={jobs[3].image} />
          )}
          {currentPage == "/trimet/arrivals" && (
            <ArrivalsContent image={jobs[3].image} />
          )}
        </RightBottomColumn>
      </Content>
    </>
  );
}
