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

const ImageFooter = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 50vh;
  border-radius: 1em 0 0 0;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  margin: 0;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ImgWrap = styled(motion.div)`
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
  margin: 0 1em 2em 1em;
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
  line-height: 1.5;
  margin: 0 1em;
  display: inline;
  align-items: center;
  justify-content: center;
  order: 1;
  max-width: 500px;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: -1;
  }
`;

const TextsAndLinksRight = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  line-height: 1.5;
  display: inline;
  margin: 0 1em;
  align-items: center;
  justify-content: center;
  order: 1;
  max-width: 500px;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    order: 1;
  }
`;

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

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
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
                  UX/I Design, Motion Graphics, React Front-end Development,
                  Video Production, Photography
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
            In 2019, I organized and defined{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">TriMet's web user interace elements</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Google Earth Flythrough */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I create{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">Google Earth flythroughs</a>
            </Link>{" "}
            for the new routes added to the system.
          </TextsAndLinksRight>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Port of Portland Arrival screens */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            Collaborated with the{" "}
            <Link
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/grid"
              passHref
            >
              <a target="_blank">Port of Portland</a>
            </Link>{" "}
            and designed/developed the MAX Arrival Screens at PDX.
          </TextsAndLinksLeft>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* On-site Transit Tracker screen */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            I have yet to build this but I've redesigned the{" "}
            <Link href="#" passHref>
              <a target="_blank">on-site Transit Tracker signage</a>
            </Link>
            .
          </TextsAndLinksRight>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Video advertisements  */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            I manage rider facing motion graphics that are usually used in press
            releases, live events, larger marketing campagins or on social.
            Follow{" "}
            <Link href="https://twitter.com/trimet" passHref>
              <a target="_blank">@trimet</a>
            </Link>{" "}
            for more.
          </TextsAndLinksLeft>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Micro-interaction proof of concept videos */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            Sometimes we need design references for a concept of a service yet
            to be built. Low to high fidelity, in most cases internal buy-in in
            the first step to adoption.
          </TextsAndLinksRight>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Front-end Developer for TriMet Rearchitecture Project */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            Currently a designer and front-end developer for
            <Link href="https://trimet.org/newplanner/" passHref>
              <a target="_blank"> TriMet.org Re-architecture</a>
            </Link>
            .
          </TextsAndLinksLeft>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/* TriMet Arrivals */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            Enjoy a case-study on designing the ideal Transit Tracker app:{" "}
            <Link href="https://trimet.org/newplanner/" passHref>
              <a target="_blank">Arrivals</a>
            </Link>
            .
          </TextsAndLinksRight>
          <ImgWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </ImgWrap>
        </FadeInWhenVisible>
      </Section>
      {/*Logo + Next page link */}
      <ImageFooter image={"/trimet/trimet-logo.gif"} />
    </ContentWrap>
  );
}
