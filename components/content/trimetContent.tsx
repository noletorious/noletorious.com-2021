import { useState } from "react";
import FancyImage from "../fancyImage";

import { Carousel } from "react-responsive-carousel";
import ResponsivePlayer from "../responsivePlayer";
import ProjectFooterLinks from "../projectFooterLinks";
import FadeInWhenVisible from "../fadeInWhenVisible";
import * as Styled from "../scaffold";
import { useDarkMode } from "next-dark-mode";
import ProjectHeader from "../projectHeader";

export default function TrimetContent({ image }) {
  const { darkModeActive } = useDarkMode();

  return (
    <Styled.ContentWrap>
      <ProjectHeader
        image="/front/trimet-front.jpg"
        colors={[
          "rgb(8,76,141)",
          "rgb(209, 68, 30)",
          "rgb(247, 232, 134)",
          "rgb(109, 179, 63)",
          "rgb(211, 233, 255)",
          "rgba(8,76,141,.95)",
        ]}
        position="Web Designer/Developer"
        description=" UX/I Design, Motion Graphics, React Front-end Development, Video
        Production, Photography"
      />
      {/* Styled guide */}
      <Styled.Section first>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksLeft>
              <Styled.TextAndLinksInner>
                In 2019, I formally standardized TriMet's digital assets in
                order to align proper usage internally and externally.
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
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Google Earth Flythrough */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.MediaWrap>
              <Styled.ReactPlayerWrap>
                <ResponsivePlayer url="/trimet/trimet-flythrough.mp4" />
              </Styled.ReactPlayerWrap>
            </Styled.MediaWrap>
            <Styled.TextsAndLinksRight>
              <Styled.TextAndLinksInner>
                I create Google Earth Fly-throughs of the new routes added to
                the system so riders can familiarize themselves with the route
                and landmarks.{" "}
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
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Port of Portland Arrival screens */}
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <Styled.TextsAndLinksLeft>
              <Styled.TextAndLinksInner>
                I'm involved with most of our digital signage that needs to tap
                in to our transit tracker API. A great example was our
                collaboration the{" "}
                <Styled.SectionLink
                  href="https://www.portofportland.com/"
                  passHref
                >
                  <a target="_blank">Port of Portland</a>
                </Styled.SectionLink>
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
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>

      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
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
          </Styled.SectionColumns>
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
          <Styled.SectionColumns togetherDesktop>
            <Styled.TextsAndLinksLeft>
              <Styled.BadgeWrap>
                <Styled.Badge darkModeActive={darkModeActive}>
                  High impact
                </Styled.Badge>
              </Styled.BadgeWrap>
              <Styled.TextAndLinksInner>
                Utilized by millions of users per month, I am currently a UI
                designer and front-end developer for our TriMet Re-Architecture
                Project.
              </Styled.TextAndLinksInner>
              <Styled.SectionLinkWrap>
                <Styled.SectionLink href="https://beta.trimet.org" passHref>
                  <a target="_blank">Check out beta</a>
                </Styled.SectionLink>
                {" / "}
                <Styled.SectionLink
                  href="https://trimet.org/newplanner"
                  passHref
                >
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
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* TriMet Arrivals */}
      <Styled.Section first>
        <FadeInWhenVisible>
          <Styled.SectionColumns togetherDesktop>
            <Styled.TextsAndLinksRight>
              <Styled.BadgeWrap>
                <Styled.Badge darkModeActive={darkModeActive}>
                  Case study
                </Styled.Badge>
              </Styled.BadgeWrap>
              <Styled.TextAndLinksInner>
                Enjoy my experimental prototype on designing the ideal Transit
                Tracker app:
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
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/*Logo + Next page link */}
      <ProjectFooterLinks next={"Hop Fastpass"} nextLink={"/hop-fastpass"} />
      <Styled.ImageFooter bgColor={"#fff"} image={"/trimet/trimet-logo.gif"} />
    </Styled.ContentWrap>
  );
}
