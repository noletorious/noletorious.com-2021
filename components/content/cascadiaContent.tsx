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
import ProjectHeader from "../projectHeader";

export default function CascadiaContent({}) {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  const [jobDescHover, setJobDescHover] = useState(false);

  function JobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }
  return (
    <Styled.ContentWrap>
      <ProjectHeader
        image={"ct/ct-apparelTable.jpg"}
        logo="/ct/ct-text-logo.png"
        logoWidth="200"
        logoHeight="80"
        colors={[
          "rgb(0,0,0)",
          "rgb(200, 100, 100)",
          "rgb(247, 150,200)",
          "rgb(200,200,200)",
          "rgb(255,255,255)",
          "rgba(0,0,0,.95)",
        ]}
        position="Design Lead"
        description=" Web Design, Animation, Apparel Design, Photography"
      />
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
              <Styled.Paragraph last>
                Worked with the best in Portland.
              </Styled.Paragraph>
              <Styled.SectionLinkWrap noMargin>
                <Styled.SectionLink
                  href="https://www.instagram.com/oregonscreen/"
                  passHref
                >
                  <a target="_blank" style={{ fontSize: ".9em" }}>
                    👕 @oregonscreen
                  </a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
              <Styled.SectionLinkWrap noMargin>
                <Styled.SectionLink
                  href="https://www.instagram.com/blackprints/"
                  passHref
                >
                  <a target="_blank" style={{ fontSize: ".9em" }}>
                    📸 @blackprints
                  </a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
              <Styled.SectionLinkWrap noMargin>
                <Styled.SectionLink
                  href="https://www.instagram.com/wework"
                  passHref
                >
                  <a target="_blank" style={{ fontSize: ".9em" }}>
                    📸 @wework
                  </a>
                </Styled.SectionLink>
              </Styled.SectionLinkWrap>
              <Styled.Paragraph></Styled.Paragraph>
            </Styled.ConnectorText>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowsSection noBottomMargin>
          <Styled.CenteredRowBgHelper>
            <Styled.BoxRadius>
              <FancyImage image={"/ct/slide-1.jpg"} width={1500} height={845} />
              <FancyImage image={"/ct/slide-2.jpg"} width={1500} height={845} />
              <FancyImage image={"/ct/slide-3.jpg"} width={1500} height={845} />
              <FancyImage image={"/ct/slide-4.jpg"} width={1500} height={845} />
            </Styled.BoxRadius>
          </Styled.CenteredRowBgHelper>
        </Styled.CenteredRowsSection>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowBgHelper>
          <Styled.MaxWidth>
            <Styled.Paragraph></Styled.Paragraph>
            <Styled.SmallCaps>Contributions</Styled.SmallCaps>
            <Styled.Paragraph>
              Cascadia Threads is a personal project that came about in 2015. It
              was a lifestyle brand and our main goal was to create a online
              store along with increasing awareness around climate change. Our
              appeal was to focus on meshing fun, urban, tech styles with a
              sustainable product.
            </Styled.Paragraph>
            <Styled.Paragraph last>
              My main contribution spanned the full gammut of web design and
              website development. I also coordinated designs to production as
              well as managing relationships with models and photographers. It
              was such a fun project but had to end due to the teams
              professional developments and personal commitments.
            </Styled.Paragraph>
          </Styled.MaxWidth>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection noBottomMargin>
        <Styled.CenteredRowBgHelper>
          <FadeInWhenVisible>
            <Styled.SmallCaps>Webstore</Styled.SmallCaps>
          </FadeInWhenVisible>
          <Styled.Paragraph></Styled.Paragraph>
          <Styled.BoxRadius>
            <FancyImage
              image={"/ct/ct-userflow.jpg"}
              width={1500}
              height={1125}
            />
          </Styled.BoxRadius>
        </Styled.CenteredRowBgHelper>
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
        <FancyImage image={"/ct/ct-storelist.png"} width={1382} height={785} />
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <Styled.SmallCaps>Animations</Styled.SmallCaps>
        <FadeInWhenVisible>
          <Styled.MediaWrap>
            <Styled.TwoByTwo>
              <Styled.Row>
                <Styled.GridItem>
                  <FadeInWhenVisible>
                    <Styled.BoxRadius>
                      <ResponsivePlayer url="/ct/ct-flicker.webm" />
                    </Styled.BoxRadius>
                  </FadeInWhenVisible>
                </Styled.GridItem>
                <Styled.GridItem>
                  <FadeInWhenVisible>
                    <Styled.BoxRadius>
                      <ResponsivePlayer url="/ct/ct-logo-intowords.webm" />
                    </Styled.BoxRadius>
                  </FadeInWhenVisible>
                </Styled.GridItem>
              </Styled.Row>
              <Styled.Row>
                <Styled.GridItem>
                  <FadeInWhenVisible>
                    <Styled.BoxRadius>
                      <ResponsivePlayer url="/ct/ct-text-rotation.webm" />
                    </Styled.BoxRadius>
                  </FadeInWhenVisible>
                </Styled.GridItem>
                <Styled.GridItem>
                  <FadeInWhenVisible>
                    <Styled.BoxRadius>
                      <ResponsivePlayer url="/ct/pizza-rotate.webm" />
                    </Styled.BoxRadius>
                  </FadeInWhenVisible>
                </Styled.GridItem>
              </Styled.Row>
            </Styled.TwoByTwo>
          </Styled.MediaWrap>
        </FadeInWhenVisible>
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
