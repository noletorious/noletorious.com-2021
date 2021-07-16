import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FADEINUPFADEEXIT,
  XS_MOBILE_MIN_WIDTH,
  S_MOBILE_MIN_WIDTH,
  MOBILE_MIN_WIDTH,
  DESKTOP_MIN_WIDTH,
  XLDESKTOP_MIN_WIDTH,
  CARDSHADOW,
  EASE,
} from "../../utils/constants";
import { jobs } from "../../data/jobs";
import Link from "next/link";

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
  padding: 0.5em 2em;
`;
const projectImageVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
  whileTap: { y: 10 },
};
const ProjectMotionImage = styled(motion.div).attrs((props) => ({
  variants: projectImageVariants,
  // variants: FADEINUPFADEEXIT,
  key: props.key,
}))`
  border-radius: 1em;
  margin: 1em 0;
`;
const ProjectImageWrap = styled(motion.div).attrs({
  initial: { opacity: 0, boxShadow: "0px 10px 10px -4px rgba(0,0,0,.3)" },
  animate: {
    opacity: 1,
    boxShadow: "0px 10px 10px -4px rgba(0,0,0,.3)",
    scale: 1,
    transition: { ease: EASE, duration: 0.5 },
  },
  whileHover: {
    opacity: 1,
    boxShadow: "0px 10px 10px -4px rgba(0,0,0,0)",
    scale: 0.98,
    transition: { ease: EASE, duration: 0.5 },
  },
})`
  display: flex;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 1em;
  overflow: hidden;
  @media (min-width: ${XS_MOBILE_MIN_WIDTH}) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: ${S_MOBILE_MIN_WIDTH}) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: ${DESKTOP_MIN_WIDTH}) {
    width: 500px;
    height: 500px;
  }
  @media (min-width: ${XLDESKTOP_MIN_WIDTH}) {
    width: 550px;
    height: 550px;
  }
`;

const ProjectImage = styled(motion.div)`
  border-radius: 1em;
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const LinkInner = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default function HomeRightBottomContent() {
  return (
    <>
      <ListWrapper>
        {jobs.map((j, i) => (
          <Link key={i} href={j.link}>
            <LinkInner>
              <ProjectMotionImage>
                <ProjectImageWrap>
                  <ProjectImage image={j.image} />
                </ProjectImageWrap>
              </ProjectMotionImage>
            </LinkInner>
          </Link>
        ))}
      </ListWrapper>
    </>
  );
}
