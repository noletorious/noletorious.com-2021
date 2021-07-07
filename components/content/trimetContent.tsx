import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  EASE,
  EASEOUT,
  FADEINUPFADEEXIT,
  MOBILE_MIN_WIDTH,
} from "../../utils/constants";
import FancyImage from "../fancyImage";
import CloseIcon from "../close";
import InfoIcon from "../info";
import Link from "next/link";
const ImageHeader = styled(motion.div).attrs((props) => ({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  position: relative;
  width: 100%;
  height: 50vh;
  border-radius: 0 0 0 1em;
  background-image: url(${(props) => props.image});
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 0 2em 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0 0 1em 0;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyleGuideImgWrap = styled(motion.div)`
  position: relative;
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0;
  }
`;

const GoogleFlythroughImgWrap = styled(motion.div)`
  position: relative;
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  position: relative;
  overflow: hidden;
  margin: 0 0 2em 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: 0 0 1em 0;
  }
`;

const SectionColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 4em;
    margin: 0;
  }
`;

const TextsAndLinksLeft = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  font-weight: 300;
  margin: 0 1em;
  display: inline;
  align-items: center;
  justify-content: center;
  order: 1;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: -1;
  }
`;

const TextsAndLinksRight = styled(motion.p).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: inline;
  margin: 0 1em;
  align-items: center;
  justify-content: center;
  order: 1;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: 1;
  }
`;

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <SectionColumns>{children}</SectionColumns>
    </motion.div>
  );
}

const jobDescVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: EASE,
      duration: 0.75,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      ease: EASEOUT,
      duration: 0.75,
      when: "afterChildren",
    },
  },
};
const JobDescContainer = styled(motion.div).attrs({
  variants: jobDescVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(8, 76, 141); 
  background-color: rgba(8, 76, 141, .95);
  flex-direction: column;
  border-radius: 0 0 0 1em;
  position;relative;
`;

const JobDescription = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  color: #fff;
  font-size: 0.9em;
  text-align: center;
  padding: 0 2em;
`;

const JobDescToggle = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 1em;
  right: 1em;
  display: inline-flex;
  padding: 1em;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleWrapper = styled(motion.div)``;

const JobTitle = styled(motion.h2).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  color: #fff;
`;

const colorBoxWrapVariants = {
  animate: {
    transition: { duration: 0.5, staggerChildren: 0.1, when: "afterChildren" },
  },
  exit: {
    transition: { duration: 0.5, staggerChildren: 0.1, when: "afterChildren" },
  },
};

const ColorBoxWrap = styled(motion.div).attrs({
  variants: colorBoxWrapVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
`;

const colorBoxVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ColorBox = styled(motion.div).attrs((props) => ({
  variants: colorBoxVariants,
}))`
  border: ${(props) =>
    props.transparent ? "1px dashed rgba(255, 255, 255, 0.5)" : "none"};
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  margin-right: 1em;
`;

const CloseWrap = styled.div`
  display: flex;
  position: relative;
`;

export default function TrimetContent({ image }) {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  const [jobDescHover, setJobDescHover] = useState(false);

  function jobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }

  return (
    <ContentWrap>
      <ImageHeader image={image}>
        <AnimatePresence>
          {jobDescDisplay && (
            <>
              <JobDescContainer>
                <ColorBoxWrap>
                  <ColorBox color="rgb(8, 76, 141)" transparent />
                  <ColorBox color="rgb(209, 68, 30)" />
                  <ColorBox color="rgb(247, 232, 134)" />
                  <ColorBox color="rgb(109, 179, 63)" />
                  <ColorBox color="rgb(211, 233, 255)" />
                </ColorBoxWrap>
                <JobTitle>Web Designer/Developer</JobTitle>
                <JobDescription>
                  UX Design, Visual Design, Motion Graphics, Video/Content
                  Production, Animation Storytelling, React Front-end
                  Development, Photography
                </JobDescription>
              </JobDescContainer>
            </>
          )}
        </AnimatePresence>
        <JobDescToggle onClick={jobDescToggle}>
          {jobDescDisplay ? (
            <CloseWrap>
              <CloseIcon size={24} />
            </CloseWrap>
          ) : (
            <ToggleWrapper
              onHoverStart={(e) => {
                setJobDescHover(true);
              }}
              onHoverEnd={(e) => {
                setJobDescHover(false);
              }}
            >
              {jobDescHover ? (
                <CloseWrap>
                  <InfoIcon size={24} />
                </CloseWrap>
              ) : (
                <CloseWrap>
                  <InfoIcon size={24} />
                </CloseWrap>
              )}
            </ToggleWrapper>
          )}
        </JobDescToggle>
      </ImageHeader>
      {/* Styled guide */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            In 2019, I organized and refined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <StyleGuideImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </StyleGuideImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Google Earth Flythrough */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I create Google Earth flythroughs for new routes added to the
            system.
          </TextsAndLinksRight>
          <GoogleFlythroughImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </GoogleFlythroughImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Port of Portland Arrival screens */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            In 2019, I organized and refined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <StyleGuideImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </StyleGuideImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* On-site Transit Tracker screen */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I create Google Earth flythroughs for new routes added to the
            system.
          </TextsAndLinksRight>
          <GoogleFlythroughImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </GoogleFlythroughImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Video advertisements  */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            In 2019, I organized and refined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <StyleGuideImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </StyleGuideImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Micro-interaction proof of concept videos */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I create Google Earth flythroughs for new routes added to the
            system.
          </TextsAndLinksRight>
          <GoogleFlythroughImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </GoogleFlythroughImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Front-end Developer for TriMet Rearchitecture Project */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            In 2019, I organized and refined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <StyleGuideImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </StyleGuideImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* TriMet Arrivals */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I create Google Earth flythroughs for new routes added to the
            system.
          </TextsAndLinksRight>
          <GoogleFlythroughImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </GoogleFlythroughImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Case Study - Logo + Next page link */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            In 2019, I organized and refined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <StyleGuideImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </StyleGuideImgWrap>
        </FadeInWhenVisible>
      </Section>
    </ContentWrap>
  );
}
