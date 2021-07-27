import * as Styled from "../scaffold";
import FadeInWhenVisible from "../fadeInWhenVisible";
import ProjectFooterLinks from "../projectFooterLinks";
import ProjectHeader from "../projectHeader";
import FancyImage from "../fancyImage";

export default function AttensaContent({ image }) {
  return (
    <Styled.ContentWrap>
      <ProjectHeader
        image="/attensa/attensa-shoulder.jpg"
        colors={[
          "rgb(19,19,19)",
          "rgb(255,255,255)",
          "rgb(247, 143, 30)",
          "rgb(29, 115, 190)",
          "rgb(38, 50, 57)",
          "rgba(19,19,19,.95)",
        ]}
        position="UI/Visual Designer"
        description="Product Design, UX/I Design, Visual Design, Branding, Infographics, and Content Marketing"
      />
      {/* What is Attensa */}
      <Styled.Section noBottomMargin>
        <FadeInWhenVisible>
          <Styled.CenteredRowsSection noBottomMargin>
            <Styled.Paragraph>
              Attensa allows companies to enable their curators to provide their
              audience the right information, at the right time.{" "}
            </Styled.Paragraph>
            <Styled.CenteredRowBgHelper bgColor={"rgba(0,0,0,.5)"}>
              <Styled.MediaWrap>
                <FancyImage
                  image={"/attensa/attensa-silos.png"}
                  width={1920}
                  height={1080}
                />
              </Styled.MediaWrap>
            </Styled.CenteredRowBgHelper>
          </Styled.CenteredRowsSection>
        </FadeInWhenVisible>
      </Styled.Section>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.ConnectorText>
              <Styled.SmallCaps>Topics</Styled.SmallCaps>
            </Styled.ConnectorText>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.CenteredRowsSection>
        <FadeInWhenVisible>
          <Styled.CenteredRowBgHelper bgColor={"rgba(0,0,0,.5)"}>
            <Styled.MediaWrap>
              <FancyImage
                image={"/attensa/attensa-solOne.png"}
                width={1920}
                height={1080}
              />
            </Styled.MediaWrap>{" "}
            <Styled.MediaWrap>
              <FancyImage
                image={"/attensa/attensa-solTwo.png"}
                width={730}
                height={708}
              />
            </Styled.MediaWrap>
          </Styled.CenteredRowBgHelper>
        </FadeInWhenVisible>
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
          <Styled.SmallCaps>The Topic View</Styled.SmallCaps>
          <Styled.Paragraph></Styled.Paragraph>
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
          <Styled.SmallCaps>Login and see whats relevant</Styled.SmallCaps>
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
      </Styled.CenteredRowsSection>
      <ProjectFooterLinks
        nextLink={"/cascadiathreads"}
        next={"Cascadia Threads"}
      />
      <Styled.ImageFooter
        bgColor={"#323232"}
        image={"/attensa/attensa-animation.gif"}
      />
    </Styled.ContentWrap>
  );
}
