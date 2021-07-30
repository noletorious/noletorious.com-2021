import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import * as Styled from "../scaffold";
import FadeInWhenVisible from "../fadeInWhenVisible";
import CloseIcon from "../icons/close";
import InfoIcon from "../icons/info";
import ProjectFooterLinks from "../projectFooterLinks";
import FancyImage from "../fancyImage";
import ResponsivePlayer from "../responsivePlayer";
export default function CascadiaContent({}) {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  const [jobDescHover, setJobDescHover] = useState(false);

  function JobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }
  return (
    <Styled.ContentWrap>
      <Styled.ImageHeader image={"ct/ct-apparelTable.jpg"}>
        <AnimatePresence>
          {jobDescDisplay && (
            <>
              <Styled.JobDescContainer
                color="rgb(34,34,34)"
                transColor="rgba(0,0,0,.75)"
              >
                <Styled.ColorBoxWrap>
                  <Styled.ColorBox color="rgb(5,5,5)" transparent />
                  <Styled.ColorBox color="rgb(209, 68, 30)" />
                  <Styled.ColorBox color="rgb(247, 232, 134)" />
                  <Styled.ColorBox color="rgb(109, 179, 63)" />
                  <Styled.ColorBox color="rgb(211, 233, 255)" />
                </Styled.ColorBoxWrap>
                <Styled.JobTitle>Design Lead</Styled.JobTitle>
                <Styled.JobDescription>
                  Web Design, Animation, Apparel Design, Photography
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
      </Styled.ImageHeader>{" "}
      {/* Wework image */}
      <Styled.CenteredRowsSection first noBottomMargin>
        <Styled.CenteredRowBgHelper>
          <Styled.BoxRadius>
            <FancyImage
              image={"/ct/ct-wework.jpg"}
              width={3627}
              height={2418}
            />
          </Styled.BoxRadius>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      {/* Connector */}
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.ConnectorText>
              <Styled.SmallCaps>Collaborations</Styled.SmallCaps>
              <Styled.ParagraphSmall>
                Worked with the best in Portland.
              </Styled.ParagraphSmall>
              <Styled.SectionLinkWrap noMargin>
                <Styled.SectionLink
                  href="https://www.instagram.com/oregonscreen/"
                  passHref
                >
                  <a target="_blank">👕 @oregonscreen</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
              <Styled.SectionLinkWrap noMargin>
                <Styled.SectionLink
                  href="https://www.instagram.com/blackprints/"
                  passHref
                >
                  <a target="_blank">📸 @blackprints</a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
            </Styled.ConnectorText>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.CenteredRowsSection>
        <FadeInWhenVisible>
          <Styled.CenteredRowsSection noBottomMargin>
            <Styled.CenteredRowBgHelper>
              <Styled.BoxRadius>
                <FancyImage
                  image={"/ct/slide-1.jpg"}
                  width={1500}
                  height={845}
                />
                <FancyImage
                  image={"/ct/slide-2.jpg"}
                  width={1500}
                  height={845}
                />
                <FancyImage
                  image={"/ct/slide-3.jpg"}
                  width={1500}
                  height={845}
                />
                <FancyImage
                  image={"/ct/slide-4.jpg"}
                  width={1500}
                  height={845}
                />
              </Styled.BoxRadius>
            </Styled.CenteredRowBgHelper>
          </Styled.CenteredRowsSection>
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowBgHelper>
          <Styled.MaxWidth>
            <Styled.Paragraph></Styled.Paragraph>
            <Styled.SmallCaps>Contributions</Styled.SmallCaps>
            <Styled.Paragraph last>
              Cascadia Threads is a personal project that came about in 2015. It
              was a lifestyle brand and our main goal was to create a online
              store along with increasing awareness around climate change. Our
              appeal was to focus on meshing fun, urban, tech styles with a
              sustainable product.
            </Styled.Paragraph>
            <Styled.Paragraph>
              My main contribution was spanned the full gammut of web design and
              website development. I also coordinated designs to production as
              well as managing relationships with models and photographers. It
              was such a fun project but had to end due to the teams
              professional commitments.
            </Styled.Paragraph>
          </Styled.MaxWidth>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.CenteredRowBgHelper>
            <Styled.SmallCaps>Webstore</Styled.SmallCaps>
            <Styled.Paragraph></Styled.Paragraph>
          </Styled.CenteredRowBgHelper>
          <Styled.BoxRadius bordered>
            <FancyImage
              image={"/ct/ct-userflow.jpg"}
              width={1382}
              height={785}
            />
          </Styled.BoxRadius>
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.ConnectorText>
              <Styled.SmallCaps></Styled.SmallCaps>
            </Styled.ConnectorText>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.CenteredRowsSection first>
        <FadeInWhenVisible>
          <FancyImage
            image={"/ct/ct-storelist.png"}
            width={1382}
            height={785}
          />
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <Styled.SmallCaps>Animations</Styled.SmallCaps>
        <Styled.MediaWrap>
          <Styled.TwoByTwo>
            <Styled.Row>
              <Styled.GridItem>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/ct/ct-flicker.webm" />
                </Styled.BoxRadius>
              </Styled.GridItem>
              <Styled.GridItem>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/ct/ct-logo-intowords.webm" />
                </Styled.BoxRadius>
              </Styled.GridItem>
            </Styled.Row>
            <Styled.Row>
              <Styled.GridItem>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/ct/ct-text-rotation.webm" />
                </Styled.BoxRadius>
              </Styled.GridItem>
              <Styled.GridItem>
                <Styled.BoxRadius>
                  <ResponsivePlayer url="/ct/pizza-rotate.webm" />
                </Styled.BoxRadius>
              </Styled.GridItem>
            </Styled.Row>
          </Styled.TwoByTwo>
        </Styled.MediaWrap>
        <Styled.Paragraph>
          More on{" "}
          <Styled.SectionLink href="https://dribbble.com/noletorious">
            <a target="_blank">Dribbble</a>
          </Styled.SectionLink>
        </Styled.Paragraph>
      </Styled.CenteredRowsSection>
      {/*Logo + Next page link */}
      <ProjectFooterLinks next={"TriMet"} nextLink={"/trimet"} />
      <Styled.ImageFooter bgColor={"#000"} image={"/ct/ct-animation.gif"} />
    </Styled.ContentWrap>
  );
}
