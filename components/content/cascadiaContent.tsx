import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import * as Styled from "../scaffold";
import FadeInWhenVisible from "../fadeInWhenVisible";
import CloseIcon from "../icons/close";
import InfoIcon from "../icons/info";
import ProjectFooterLinks from "../projectFooterLinks";
import FancyImage from "../fancyImage";
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
      </Styled.ImageHeader>
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowBgHelper>
          <Styled.MaxWidth>
            <Styled.Paragraph></Styled.Paragraph>
            <Styled.SmallCaps>Contributions</Styled.SmallCaps>
            <Styled.Paragraph last>
              What we were and aimed to do.
            </Styled.Paragraph>
            <Styled.Paragraph>
              My main contribution was ...and what happened eventually.
            </Styled.Paragraph>
          </Styled.MaxWidth>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <Styled.CenteredRowBgHelper>
          <Styled.BoxRadius>
            <FancyImage
              image={"/attensa/attensa-standup.jpg"}
              width={1024}
              height={683}
            />
          </Styled.BoxRadius>
        </Styled.CenteredRowBgHelper>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <FadeInWhenVisible>
          <Styled.CenteredRowBgHelper>
            <Styled.SmallCaps>The Topic View</Styled.SmallCaps>
            <Styled.Paragraph></Styled.Paragraph>
          </Styled.CenteredRowBgHelper>
          <Styled.MediaWrap>
            <Styled.BoxRadius bordered>
              <FancyImage
                image={"/attensa/attensa-topicView.png"}
                width={1382}
                height={785}
              />
            </Styled.BoxRadius>
          </Styled.MediaWrap>
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>
      <Styled.CenteredRowsSection>
        <FadeInWhenVisible>
          <Styled.CenteredRowBgHelper>
            <Styled.SmallCaps>Login and see whats relevant</Styled.SmallCaps>
          </Styled.CenteredRowBgHelper>
          <Styled.Paragraph></Styled.Paragraph>
          <Styled.TwoByTwo>
            <Styled.Row>
              <Styled.GridItem>
                <Styled.BoxRadius bordered>
                  <FancyImage
                    image={"/attensa/attensa-mobLogin.png"}
                    width={750}
                    height={1334}
                  />
                </Styled.BoxRadius>
              </Styled.GridItem>
              <Styled.GridItem>
                <Styled.BoxRadius bordered>
                  <FancyImage
                    image={"/attensa/attensa-mobMyTopics.png"}
                    width={750}
                    height={1334}
                  />
                </Styled.BoxRadius>
              </Styled.GridItem>
            </Styled.Row>
            <Styled.Row>
              <Styled.GridItem>
                <Styled.BoxRadius bordered>
                  <FancyImage
                    image={"/attensa/attensa-mobReadView.png"}
                    width={750}
                    height={1334}
                  />
                </Styled.BoxRadius>
              </Styled.GridItem>
              <Styled.GridItem>
                <Styled.BoxRadius bordered>
                  <FancyImage
                    image={"/attensa/attensa-mobTopicView.png"}
                    width={750}
                    height={1334}
                  />
                </Styled.BoxRadius>
              </Styled.GridItem>
            </Styled.Row>
          </Styled.TwoByTwo>
        </FadeInWhenVisible>
      </Styled.CenteredRowsSection>{" "}
      {/*Logo + Next page link */}
      <ProjectFooterLinks next={"TriMet"} nextLink={"/trimet"} />
      <Styled.ImageFooter bgColor={"#000"} image={"/ct/ct-animation.gif"} />
    </Styled.ContentWrap>
  );
}
