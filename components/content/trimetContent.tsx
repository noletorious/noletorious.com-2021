import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FancyImage from "../fancyImage";
import CloseIcon from "../icons/close";
import InfoIcon from "../icons/info";
import { Carousel } from "react-responsive-carousel";
import ResponsivePlayer from "../responsivePlayer";
import ProjectFooterLinks from "../projectFooterLinks";
import FadeInWhenVisible from "../fadeInWhenVisible";
import * as Styled from "../scaffold";

export default function TrimetContent({ image }) {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  const [jobDescHover, setJobDescHover] = useState(false);

  function JobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }

  return (
    <Styled.ContentWrap>
      <Styled.ImageHeader image={image}>
        <AnimatePresence>
          {jobDescDisplay && (
            <>
              <Styled.JobDescContainer
                color="rgb(8, 76, 141)"
                transColor="rgb(8, 76, 141,.95)"
              >
                <Styled.ColorBoxWrap>
                  <Styled.ColorBox color="rgb(8, 76, 141)" transparent />
                  <Styled.ColorBox color="rgb(209, 68, 30)" />
                  <Styled.ColorBox color="rgb(247, 232, 134)" />
                  <Styled.ColorBox color="rgb(109, 179, 63)" />
                  <Styled.ColorBox color="rgb(211, 233, 255)" />
                </Styled.ColorBoxWrap>
                <Styled.JobTitle>Web Designer/Developer</Styled.JobTitle>
                <Styled.JobDescription>
                  UX/I Design, Motion Graphics, React Front-end Development,
                  Video Production, Photography
                </Styled.JobDescription>
              </Styled.JobDescContainer>
            </>
          )}
        </AnimatePresence>
        <Styled.JobDescToggle onClick={JobDescToggle}>
          {jobDescDisplay ? (
            <Styled.CloseWrap>
              <CloseIcon size={24} />
            </Styled.CloseWrap>
          ) : (
            <Styled.ToggleWrapper
              onHoverStart={(e) => {
                setJobDescHover(true);
              }}
              onHoverEnd={(e) => {
                setJobDescHover(false);
              }}
            >
              {jobDescHover ? (
                <Styled.CloseWrap>
                  <InfoIcon size={24} />
                </Styled.CloseWrap>
              ) : (
                <Styled.CloseWrap>
                  <InfoIcon size={24} />
                </Styled.CloseWrap>
              )}
            </Styled.ToggleWrapper>
          )}
        </Styled.JobDescToggle>
      </Styled.ImageHeader>
      {/* Styled guide */}
      <Styled.Section first>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksLeft>
            <Styled.TextAndLinksInner>
              In 2019, I formally standardized TriMet's digital assets in order
              to align proper usage internally and externally.
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink
                href="https://xd.adobe.com/view/33453830-a9e6-4122-6b2c-1d0cc6704427-4574/"
                passHref
              >
                <a target="_blank">TriMet's digital interace elements</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksLeft>
          <Styled.MediaWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1000}
              height={563}
            />
          </Styled.MediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Google Earth Flythrough */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksRight>
            <Styled.TextAndLinksInner>
              I create Google Earth Fly-throughs of the new routes added to the
              system so riders can familiarize themselves with the route and
              landmarks.{" "}
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink
                href={`https://www.youtube.com/watch?v=BO72XAPARzM&list=PLtJW_Q-z9fw8Q2b5tdBReibFKAVfOJEy6`}
                passHref
              >
                <a target="_blank">TriMet's Google Earth playlist</a>
              </Styled.SectionLink>
              {" / "}
              <Styled.SectionLink
                href={`https://twitter.com/trimet/status/1413196913046802433`}
                passHref
              >
                <a target="_blank">Latest flythrough</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksRight>
          <Styled.MediaWrap>
            <Styled.ReactPlayerWrap>
              <ResponsivePlayer url="/trimet/trimet-flythrough.mp4" />
            </Styled.ReactPlayerWrap>
          </Styled.MediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Port of Portland Arrival screens */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksLeft>
            <Styled.TextAndLinksInner>
              I'm involved with most of our digital signage that needs to tap in
              to our transit tracker API. A great example was our collaboration
              the{" "}
              <Styled.TextAndLinksInnerLink
                href="https://www.portofportland.com/"
                passHref
              >
                <a target="_blank">Port of Portland</a>
              </Styled.TextAndLinksInnerLink>
              , where I designed and developed the Red Line arrival screens at
              PDX.
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink
                href="https://xd.adobe.com/spec/62aea832-a8b0-4905-69b9-d0c37f2c6044-149f/grid"
                passHref
              >
                <a target="_blank">PDX Red Line arrivals mockup</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksLeft>
          <Styled.CarouselMediaWrap>
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
              <Styled.CarouselItem>
                <Styled.CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-scenarios.jpg" />
                </Styled.CarouselImageWrap>
                <p className="carousel-context">Scenarios</p>
              </Styled.CarouselItem>
              <Styled.CarouselItem>
                <Styled.CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-v1.jpg" />
                </Styled.CarouselImageWrap>
                <p className="carousel-context">_v1</p>
              </Styled.CarouselItem>
              <Styled.CarouselItem>
                <Styled.CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-v2.jpg" />
                </Styled.CarouselImageWrap>
                <p className="carousel-context">_v2</p>
              </Styled.CarouselItem>
              <Styled.CarouselItem>
                <Styled.CarouselImageWrap>
                  {" "}
                  <img src="/trimet/trimet-pdx-v3.jpg" />
                </Styled.CarouselImageWrap>
                <p className="carousel-context">_v3</p>
              </Styled.CarouselItem>
              <Styled.CarouselItem>
                <Styled.CarouselImageWrap>
                  <img src="/trimet/trimet-pdx-result.jpg" />
                </Styled.CarouselImageWrap>
                <p className="carousel-context">Result</p>
              </Styled.CarouselItem>
            </Carousel>
          </Styled.CarouselMediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>

      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksRight>
            <Styled.TextAndLinksInner>
              Working closely with our in-house videographer and senior social
              strategist, I produce motion graphics for all video content.
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink href="https://twitter.com/trimet" passHref>
                <a target="_blank">Follow @trimet</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksRight>
          <Styled.MediaWrap>
            <Styled.ReactPlayerWrap>
              <ResponsivePlayer url="/trimet/continue-to-wear-masks.mp4" />
            </Styled.ReactPlayerWrap>
          </Styled.MediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Micro-interaction proof of concept videos */}
      {/* <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksRight>
            Sometimes we need design references for a concept of a service yet
            to be built. Low to high fidelity, in most cases internal buy-in in
            the first step to adoption.
          </Styled.TextsAndLinksRight>
          <Styled.MediaWrap>
            <FancyImage
              image={"/trimet/trimet-styleguide.png"}
              width={1920}
              height={1292}
            />
          </Styled.MediaWrap>
        </FadeInWhenVisible>
      </Styled.Section> */}
      {/* Front-end Developer for TriMet Rearchitecture Project */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksLeft>
            <Styled.TextAndLinksInner>
              <Styled.BadgeWrap>
                <Styled.Badge>High impact</Styled.Badge>
              </Styled.BadgeWrap>
              Utilized by millions of users per month, I am currently a UI
              designer and front-end developer for our TriMet Re-Architecture
              Project.
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink href="https://beta.trimet.org" passHref>
                <a target="_blank">Check out beta</a>
              </Styled.SectionLink>
              {" / "}
              <Styled.SectionLink href="https://trimet.org/newplanner" passHref>
                <a target="_blank">Learn about the initiative</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksLeft>
          <Styled.PortraitMediaWrap>
            <FancyImage
              image={"/trimet/tora-home.png"}
              width={800}
              height={1157}
            />
          </Styled.PortraitMediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* TriMet Arrivals */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.TextsAndLinksRight>
            <Styled.TextAndLinksInner>
              Enjoy my case-study on designing the ideal Transit Tracker app:
            </Styled.TextAndLinksInner>
            <Styled.SectionLinkWrap>
              <Styled.SectionLink href="/trimet/arrivals" passHref>
                <a>Arrivals</a>
              </Styled.SectionLink>
            </Styled.SectionLinkWrap>
          </Styled.TextsAndLinksRight>
          <Styled.PortraitMediaWrap>
            <FancyImage
              image={"/trimet/arrivals/trimet-arrivals.png"}
              width={1000}
              height={1305}
            />
          </Styled.PortraitMediaWrap>
        </FadeInWhenVisible>
      </Styled.Section>
      {/*Logo + Next page link */}
      <ProjectFooterLinks next={"/attensa"} />
      <Styled.ImageFooter image={"/trimet/trimet-logo.gif"} />
    </Styled.ContentWrap>
  );
}
