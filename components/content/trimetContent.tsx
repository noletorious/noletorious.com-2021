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
import { Carousel } from "react-responsive-carousel";
import ResponsivePlayer from "../responsivePlayer";
import ProjectFooterLinks from "../projectFooterLinks";

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
  background-size: 75%;
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

const MediaWrap = styled(motion.div)`
  position: relative;
  max-width: 800px;
  display: flex;
  padding: 0 1em;
  border-radius: 1em;
`;
const PortraitMediaWrap = styled(motion.div)`
  position: relative;
  max-width: 500px;
  display: flex;
  padding: 0 1em;
  border-radius: 1em;
`;
const CarouselMediaWrap = styled(motion.div)`
  position: relative;
  max-width: 800px;
  min-width: 500px;
  display: flex;
  margin: 0 auto 3em;
  padding: 0;
  border-radius: 1em;
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
  margin: ${(props) => (props.first ? "-4em" : 0)} 1em 4em 1em;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    margin: ${(props) => (props.first ? "-4em" : 0)} 0 6em 0;
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

const SectionLink = styled(Link)``;

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
  top: 1em;
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

const TextAndLinksInner = styled.span`
  display: flex;
  margin-bottom: 1em;
  opacity: 0.5;
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

const BoxRadius = styled.div`
  border-radius: 1em;
  overflow: hidden;
`;

const CarouselImageWrap = styled(BoxRadius)`
  border-radius: 1em;
  overflow: hidden;
`;
const ReactPlayerWrap = styled(BoxRadius)`
  border-radius: 1em;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  margin: 0 1em;
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
      <Section first>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            <TextAndLinksInner>
              In 2019, I worked together with our senior designer on formally
              standardizing TriMet's digital assets.
            </TextAndLinksInner>
            <SectionLink
              href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/"
              passHref
            >
              <a target="_blank">TriMet's digital interace elements</a>
            </SectionLink>
          </TextsAndLinksLeft>
          <MediaWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1000}
              height={563}
            />
          </MediaWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Google Earth Flythrough */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            <TextAndLinksInner>
              I create Google Earth Fly-throughs of the new routes added to the
              system so riders can familiarize themselves with the route and
              landmarks.{" "}
            </TextAndLinksInner>
            <SectionLink
              href={`https://www.youtube.com/watch?v=BO72XAPARzM&list=PLtJW_Q-z9fw8Q2b5tdBReibFKAVfOJEy6`}
              passHref
            >
              <a target="_blank">TriMet's Google Earth Playlist</a>
            </SectionLink>
          </TextsAndLinksRight>
          <MediaWrap>
            <ReactPlayerWrap>
              <ResponsivePlayer url="/trimet/trimet-flythrough.mp4" />
            </ReactPlayerWrap>
          </MediaWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Port of Portland Arrival screens */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            <TextAndLinksInner>
              Designed and developed the Red Line arrival screens at PDX.
            </TextAndLinksInner>
            <SectionLink
              href="https://xd.adobe.com/spec/62aea832-a8b0-4905-69b9-d0c37f2c6044-149f/grid"
              passHref
            >
              <a target="_blank">Next MAX Arrival mockup</a>
            </SectionLink>
          </TextsAndLinksLeft>
          <CarouselMediaWrap>
            <Carousel
              autoPlay
              interval={4000}
              infiniteLoop
              stopOnHover
              dynamicHeight={true}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              transitionTime={1000}
              centerMode
              centerSlidePercentage={90}
            >
              <CarouselItem>
                <CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-scenarios.jpg" />
                </CarouselImageWrap>
                <p className="carousel-context">Scenarios</p>
              </CarouselItem>
              <CarouselItem>
                <CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-v1.jpg" />
                </CarouselImageWrap>
                <p className="carousel-context">Version 1</p>
              </CarouselItem>
              <CarouselItem>
                <CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-v2.jpg" />
                </CarouselImageWrap>
                <p className="carousel-context">Version 2</p>
              </CarouselItem>
              <CarouselItem>
                <CarouselImageWrap>
                  {" "}
                  <img src="/trimet/trimet-pdx-v3.jpg" />
                </CarouselImageWrap>
                <p className="carousel-context">Version 3</p>
              </CarouselItem>
              <CarouselItem>
                <CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-result.jpg" />
                </CarouselImageWrap>
                <p className="carousel-context">Result</p>
              </CarouselItem>
            </Carousel>
          </CarouselMediaWrap>
        </FadeInWhenVisible>
      </Section>

      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            <TextAndLinksInner>
              Working closely with our in-house videographer and senior social
              strategist, I produce motion graphics for all video content.
            </TextAndLinksInner>
            <Link href="https://twitter.com/trimet" passHref>
              <a target="_blank">Follow @trimet</a>
            </Link>
          </TextsAndLinksRight>
          <MediaWrap>
            <ReactPlayerWrap>
              <ResponsivePlayer url="/trimet/continue-to-wear-masks.mp4" />
            </ReactPlayerWrap>
          </MediaWrap>
        </FadeInWhenVisible>
      </Section>
      {/* Micro-interaction proof of concept videos */}
      {/* <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            Sometimes we need design references for a concept of a service yet
            to be built. Low to high fidelity, in most cases internal buy-in in
            the first step to adoption.
          </TextsAndLinksRight>
          <MediaWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </MediaWrap>
        </FadeInWhenVisible>
      </Section> */}
      {/* Front-end Developer for TriMet Rearchitecture Project */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksLeft>
            <TextAndLinksInner>
              Currently a UI designer and front-end developer for our TriMet
              Re-Architecture Project.
            </TextAndLinksInner>
            <Link href="https://beta.trimet.org" passHref>
              <a target="_blank">Check out beta</a>
            </Link>
          </TextsAndLinksLeft>
          <PortraitMediaWrap>
            <FancyImage
              image={"/trimet/tora-home.png"}
              width={800}
              height={1157}
            />
          </PortraitMediaWrap>
        </FadeInWhenVisible>
      </Section>
      {/* TriMet Arrivals */}
      <Section>
        <FadeInWhenVisible>
          <TextsAndLinksRight>
            <TextAndLinksInner>
              Enjoy my case-study on designing the ideal Transit Tracker app:
            </TextAndLinksInner>
            <Link href="/trimet/arrivals" passHref>
              <a target="_blank">Arrivals</a>
            </Link>
          </TextsAndLinksRight>
          <PortraitMediaWrap>
            <FancyImage
              image={"/trimet/arrivals/trimet-arrivals.png"}
              width={1000}
              height={1305}
            />
          </PortraitMediaWrap>
        </FadeInWhenVisible>
      </Section>
      {/*Logo + Next page link */}
      <ProjectFooterLinks next={"/attensa"} />
      <ImageFooter image={"/trimet/trimet-logo.gif"} />
    </ContentWrap>
  );
}
