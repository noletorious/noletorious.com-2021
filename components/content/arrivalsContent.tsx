import { useState } from "react";
import * as Styled from "../scaffold";
import FadeInWhenVisible from "../fadeInWhenVisible";
import FancyImage from "../fancyImage";
import styled from "styled-components";
import RosetteIcon from "../icons/rosette";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faUserCheck,
  faUserTimes,
  faUserShield,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { MOBILE_MIN_WIDTH } from "../../utils/constants";
import ResponsivePlayer from "../responsivePlayer";
import ProjectFooterLinks from "../projectFooterLinks";
import SparkleButton from "../sparkleButton";

const Title = styled.h1`
  margin: 0;
`;
const Subtitle = styled.span`
  opacity: 0.5;
`;

const SectionContent = styled.div`
  border-radius: 1em;
  border: 1px rgba(50, 50, 50, 0.25) solid;
  padding: 2em;
  margin: 0 1em;
`;

const LargeList = styled.ul`
  list-style: none;
  margin: 1em 0;

  padding: 0;
`;
const LargeListItem = styled.li`
  opacity: 0.5;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 1px rgba(50, 50, 50, 0.25) solid;
  &:last-child {
    border-bottom: none;
  }
`;
const ListItemHighlight = styled.span`
  font-weight: bold;
  opacity: 1;
  font-size: 1.5em;
`;

const ArrivalsTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;

const FlowImageWrap = styled.div`
  border: 1px rgba(50, 50, 50, 0.25) solid;
`;
const PrototypeLink = styled.div``;

const PrototypeSection = ({ video, title, list }) => {
  return (
    <>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>{title}</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <SectionContent>
            <Styled.TextsAndLinksLeft>
              <Styled.TextAndLinksInner>
                <Styled.UnorderedList>
                  {list.map((value) => {
                    return <Styled.ListItem>{value}</Styled.ListItem>;
                  })}
                </Styled.UnorderedList>
              </Styled.TextAndLinksInner>
            </Styled.TextsAndLinksLeft>
            <Styled.PortraitMediaWrap>
              <Styled.ReactPlayerWrap>
                <ResponsivePlayer url={video} />
              </Styled.ReactPlayerWrap>
            </Styled.PortraitMediaWrap>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
    </>
  );
};
const ArrivalsContent = () => {
  return (
    <Styled.ContentWrap>
      <Styled.Section>
        <FadeInWhenVisible>
          <Styled.SectionColumns>
            <ArrivalsTitleSection>
              <Styled.TextsAndLinksLeft mobileReverse>
                <RosetteIcon size={"100px"} />
                <Title>Arrivals</Title>
                <Subtitle>
                  App concept based on TriMet's Transit Tracker
                </Subtitle>
              </Styled.TextsAndLinksLeft>
              <Styled.PortraitMediaWrap>
                <FancyImage
                  image={"/trimet/arrivals/trimet-arrivals.png"}
                  width={800}
                  height={1157}
                />
              </Styled.PortraitMediaWrap>
            </ArrivalsTitleSection>{" "}
          </Styled.SectionColumns>
        </FadeInWhenVisible>
      </Styled.Section>
      {/* Overview */}
      <Styled.TextSection first noBottomMargin>
        <FadeInWhenVisible>
          <Styled.SectionTitle first>🚍 Overview</Styled.SectionTitle>
          <SectionContent>
            <Styled.SmallCaps>Context</Styled.SmallCaps>
            <Styled.Paragraph>
              The transit tracker tool on{" "}
              <Link href="https://trimet.org/" passHref>
                <a>trimet.org</a>
              </Link>{" "}
              is the most used feature on the website. As a rider myself, I
              wanted to create a transit-tracker focused app that would leverage
              TriMet's public transit tracker API.
            </Styled.Paragraph>
            <Styled.SmallCaps>problem</Styled.SmallCaps>
            <Styled.Paragraph>
              Many people rely on transit tracker information and having it
              accessible via a mobile app would allow TriMet to extend their
              services and utilitize more of their capabilities beyond the
              browser.
            </Styled.Paragraph>
            <Styled.SmallCaps>metrics</Styled.SmallCaps>
            <LargeList>
              <LargeListItem>
                <ListItemHighlight>8 million</ListItemHighlight> pageviews per
                month
              </LargeListItem>
              <LargeListItem>
                <ListItemHighlight> %95</ListItemHighlight> come for transit
                tracker, trip planner, and alerts
              </LargeListItem>
              <LargeListItem>
                {" "}
                <ListItemHighlight>%70</ListItemHighlight> access trimet.org on
                their phone
              </LargeListItem>
            </LargeList>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      {/* Research */}
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>🔬 Research</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
          <SectionContent>
            <Styled.SmallCaps>Surveys</Styled.SmallCaps>
            <Styled.UnorderedList>
              <Styled.ListItem>2020 Beta Riders Club testers</Styled.ListItem>
              <Styled.ListItem>2019 web surveys</Styled.ListItem>
              <Styled.ListItem>2019 MOD beta feedback</Styled.ListItem>
              <Styled.ListItem>2018 Customer Experience Audit</Styled.ListItem>
              <Styled.ListItem>2017 Trip Tools Survey</Styled.ListItem>
              <Styled.ListItem>2014 focus group SIPs</Styled.ListItem>
            </Styled.UnorderedList>
            <Styled.Paragraph>
              Each survey shared the underlying goal which was to help TriMet
              understand the user's experience and perception around the
              reliability of our information/service.
            </Styled.Paragraph>
            <Styled.Paragraph>
              Consolidating user feedback, the list below describes the top 10
              user wants from current users of our trip tools.
            </Styled.Paragraph>
            <Styled.SmallCaps>What riders want</Styled.SmallCaps>
            <Styled.Paragraph last>
              Number one being the most asked for feature and ten the least:
            </Styled.Paragraph>
            <Styled.OrderedList>
              <Styled.ListItem>
                Real-time vehicle locations on map
              </Styled.ListItem>
              <Styled.ListItem>
                Nearby service relative to current location
              </Styled.ListItem>
              <Styled.ListItem>Save favorites/preferences</Styled.ListItem>
              <Styled.ListItem>
                R̶e̶a̶l̶-̶t̶i̶m̶e̶ ̶t̶r̶i̶p̶ ̶p̶l̶a̶n̶n̶i̶n̶g̶ (Out of scope)
              </Styled.ListItem>
              <Styled.ListItem>Better alerts</Styled.ListItem>
              <Styled.ListItem>
                G̶u̶i̶d̶e̶d̶ ̶n̶a̶v̶i̶g̶a̶t̶i̶o̶n̶ (Out of scope)
              </Styled.ListItem>
              <Styled.ListItem>Alarms/notifications</Styled.ListItem>
              <Styled.ListItem>Voice command</Styled.ListItem>
              <Styled.ListItem>Hop integration</Styled.ListItem>
              <Styled.ListItem>
                F̶l̶e̶x̶i̶b̶l̶e̶/̶s̶m̶a̶r̶t̶ ̶i̶t̶i̶n̶e̶r̶a̶r̶i̶e̶s̶ (Out of scope)
              </Styled.ListItem>
            </Styled.OrderedList>
            <Styled.Paragraph>
              The most important/common feature people wanted was to see where
              their upcoming bus was on a map relative to their current
              location. Back to the initial ideas of this concept app, I've also
              marked which wants I thought were out of scope as they would be
              better suited under trip planning features.
            </Styled.Paragraph>
            <Styled.Paragraph last>
              My goal was to create an app that did a few things really well,
              however this concept app could scale considering the available
              data.
            </Styled.Paragraph>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      {/* Personas */}
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>🦙 The User/Rider</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
          <SectionContent>
            <Styled.SmallCaps>Personas</Styled.SmallCaps>
            <Styled.Paragraph>
              From our Audience Segmentation Survey Research Report, we
              generally break each persona in four categories:
            </Styled.Paragraph>
            <Styled.TwoByTwo>
              <Styled.Row>
                <Styled.GridItem>
                  <FontAwesomeIcon icon={faUserCheck} size={"2x"} />
                  <Styled.Paragraph>Transit-Reliant Persona</Styled.Paragraph>
                </Styled.GridItem>
                <Styled.GridItem>
                  <FontAwesomeIcon icon={faUsersCog} size={"2x"} />
                  <Styled.Paragraph>Strategic User Persona</Styled.Paragraph>
                </Styled.GridItem>
              </Styled.Row>
              <Styled.Row>
                <Styled.GridItem>
                  <FontAwesomeIcon icon={faUserShield} size={"2x"} />
                  <Styled.Paragraph>Transit Hesitant Persona</Styled.Paragraph>
                </Styled.GridItem>
                <Styled.GridItem>
                  <FontAwesomeIcon icon={faUserTimes} size={"2x"} />
                  <Styled.Paragraph>Non-Rider Persona</Styled.Paragraph>
                </Styled.GridItem>
              </Styled.Row>
            </Styled.TwoByTwo>
            <Styled.Paragraph>
              For a deeper dive in to the details of each persona, I will have a
              private per request page where I breakdown our method for
              designing the trimet.org re-architecture.
            </Styled.Paragraph>
            <Styled.Paragraph last>
              The persona that would benefit most from this concept app, would
              be
              <strong> any transit rider with a mobile smart phone</strong>.
            </Styled.Paragraph>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      {/* Flows */}
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>🌊 Flows</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
          <SectionContent>
            <Styled.SmallCaps>Transit Tracker</Styled.SmallCaps>
            <Styled.Paragraph>
              The UX flow of this concept app closely resembles to the
              trimet.org re-architecture(TORA) project particularly the transit
              tracker features.
            </Styled.Paragraph>
            <Styled.Paragraph>
              To summarize the process my manager, senior designer and I took:
              We first considered our constraints to replicate/enhance current
              features of the website, next we considered what are the best
              practices in this app market, then I considered the technology it
              was being built with and how we could optimize for delivering
              these requirements to engineers.
            </Styled.Paragraph>
            <Styled.Paragraph>
              After a few large iterations, we landed on a flow that found a
              balance between complexity and efficiency.
            </Styled.Paragraph>
            <Styled.ArrivalsParagraphSmall>
              Generalized audit of trimet.org trip tool features{" "}
              <Link href="/arrivals/trimetorg-audit.jpg" passHref>
                <a target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </a>
              </Link>
            </Styled.ArrivalsParagraphSmall>
            <FancyImage
              image={"/arrivals/trimetorg-audit.jpg"}
              height={1080}
              width={1659}
            />
            <Styled.ArrivalsParagraphSmall>
              V1: Low fidelity mockups{" "}
              <Link href="/arrivals/TT-iteration-1.jpg" passHref>
                <a target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </a>
              </Link>
            </Styled.ArrivalsParagraphSmall>
            <FancyImage
              image={"/arrivals/TT-iteration-1.jpg"}
              height={1683}
              width={2601}
            />
            <Styled.ArrivalsParagraphSmall>
              V4: Higher fidelity mockups:{" "}
              <Link href="/arrivals/TT-iteration-2.0.jpg" passHref>
                <a target="_blank">
                  By Stop ID{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </a>
              </Link>
              {" / "}
              <Link href="/arrivals/TT-iteration-2.1.jpg" passHref>
                <a target="_blank">
                  By Omni-box{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </a>
              </Link>
            </Styled.ArrivalsParagraphSmall>
            <FancyImage
              image={"/arrivals/TT-iteration-2.0.jpg"}
              height={1500}
              width={1595}
            />
            <FancyImage
              image={"/arrivals/TT-iteration-2.1.jpg"}
              height={1294}
              width={1532}
            />
            <Styled.Paragraph last>
              After V4 the flow did not change. The entire design process went
              to V9.
            </Styled.Paragraph>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>Arrivals</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <FlowImageWrap>
        <FancyImage
          image="/arrivals/arrivals-xd-screenshot.jpg"
          width={"2997"}
          height={"2116"}
        />
      </FlowImageWrap>{" "}
      <PrototypeSection
        video={"/arrivals/toggle-favorites.mp4"}
        title="Your arrivals and stops upfront"
        list={[
          "Add labels for more context.",
          "Toggle your favorite stops and service lines at a stop.",
        ]}
      />
      <PrototypeSection
        video={"/arrivals/LRFSTV.mp4"}
        title="Learn routes, find stops, get most recent data"
        list={[
          "View routes on a map.",
          "Drill down to relevant stops.",
          "Force refresh stop information.",
        ]}
      />
      <PrototypeSection
        video={"/arrivals/TVDM.mp4"}
        title="Toggle and refresh"
        list={[
          "Quickly track vehicles",
          "Toggle dark mode for higher contrast, helps with glare.",
        ]}
      />
      {/* Conclusion */}
      <Styled.TextSection>
        <FadeInWhenVisible>
          <Styled.TitleConnectorRow>
            <Styled.SectionTitle>✨ Conclusion</Styled.SectionTitle>
            <Styled.Connector />
          </Styled.TitleConnectorRow>
          <SectionContent>
            <Styled.SmallCaps>Takeaways</Styled.SmallCaps>
            <Styled.Paragraph>
              Improving ridership means improving rider confidence. Simplifying
              the complicated needs of transit riders was the motivation behind
              this experimental app. As with many projects the heavy lifting is
              balancing between complexity and efficiency, managing user
              expectations, leveraging available data, considering the
              technologies involved and the available resources to build. Still,
              that is where the fun is.
            </Styled.Paragraph>
            <Styled.Paragraph>
              Learning more and looking forward, I do see a possible v2 of this
              project!
            </Styled.Paragraph>
            <Styled.SmallCaps>NEXT: MORE UNIQUE FEATURES</Styled.SmallCaps>
            <LargeList>
              <LargeListItem>
                Tracking a vehicle and it's rider capacity.
              </LargeListItem>
              <LargeListItem>
                Rider onboar a tracked vehicle experience.
              </LargeListItem>
              <LargeListItem>
                Additional stop feature such as stop amenities and rider
                support.
              </LargeListItem>
            </LargeList>
            <SparkleButton
              url={
                "https://xd.adobe.com/view/d1271807-eac2-4d9a-6a38-fcca214cbf2f-a716/"
              }
            >
              Enjoy prototype
            </SparkleButton>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <ProjectFooterLinks nextLink="/attensa" next={"Attensa"} />
    </Styled.ContentWrap>
  );
};
export default ArrivalsContent;
