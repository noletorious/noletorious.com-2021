// import { useState } from "react";
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

const Title = styled.h1`
  margin: 0;
`;
const Subtitle = styled.span`
  opacity: 0.5;
`;

const SectionTitle = styled.h2`
  margin: ${(props) => (props.first ? "1em" : "4em 1em 1em 1em")};
`;
const SectionContent = styled.div`
  border-radius: 1em;
  border: 1px rgba(50, 50, 50, 0.25) solid;
  padding: 2em;
  margin: 0 1em;
`;

const SmallCaps = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
  margin: 1em 0;
`;
const Paragraph = styled.p`
  opacity: 0.5;
  line-height: 1.5;
  margin-bottom: ${(props) => (props.last ? "0" : "2em")};
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

const TwoByTwo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const GridItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 0;
`;

const ParagraphSmall = styled(Paragraph)`
  font-size: 0.75em;
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
const TitleConnectorRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Connector = styled.div`
  border-left: 1px rgba(50, 50, 50, 0.25) solid;
  margin-right: 4em;
`;
const ArrivalsContent = () => {
  //   const [jobDescDisplay, setJobDescDisplay] = useState(true);
  //   const [jobDescHover, setJobDescHover] = useState(false);

  //   function JobDescToggle() {
  //     setJobDescDisplay(!jobDescDisplay);
  //   }
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
          <SectionTitle first>🚍 Overview</SectionTitle>
          <SectionContent>
            <SmallCaps>Context</SmallCaps>
            <Paragraph>
              The transit tracker tool on{" "}
              <Link href="https://trimet.org/" passHref>
                <a>trimet.org</a>
              </Link>{" "}
              is the most used feature on the website. As a rider myself, I
              wanted to create a transit-tracker focused app that would leverage
              TriMet's public transit tracker API.
            </Paragraph>
            <SmallCaps>problem</SmallCaps>
            <Paragraph>
              Many people rely on transit tracker information and having it
              accessible via a mobile app would allow TriMet to extend their
              services and utilitize more of their capabilities beyond the
              browser.
            </Paragraph>
            <SmallCaps>metrics</SmallCaps>
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
          <TitleConnectorRow>
            <SectionTitle>🔬 Research</SectionTitle>
            <Connector />
          </TitleConnectorRow>
          <SectionContent>
            <SmallCaps>Surveys</SmallCaps>
            <Styled.UnorderedList>
              <Styled.ListItem>2020 Beta Riders Club testers</Styled.ListItem>
              <Styled.ListItem>2019 web surveys</Styled.ListItem>
              <Styled.ListItem>2019 MOD beta feedback</Styled.ListItem>
              <Styled.ListItem>2018 Customer Experience Audit</Styled.ListItem>
              <Styled.ListItem>2017 Trip Tools Survey</Styled.ListItem>
              <Styled.ListItem>2014 focus group SIPs</Styled.ListItem>
            </Styled.UnorderedList>
            <Paragraph>
              Each survey shared the underlying goal which was to help TriMet
              understand the user's experience and perception around the
              reliability of our information/service.
            </Paragraph>
            <Paragraph>
              Consolidating user feedback, the list below describes the top 10
              user wants from current users of our trip tools.
            </Paragraph>
            <SmallCaps>What riders want</SmallCaps>
            <Paragraph last>
              Number one being the most asked for feature and ten the least:
            </Paragraph>
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
            <Paragraph>
              The most important/common feature people wanted was to see where
              their upcoming bus was on a map relative to their current
              location. Back to the initial ideas of this concept app, I've also
              marked which wants I thought were out of scope as they would be
              better suited under trip planning features.
            </Paragraph>
            <Paragraph last>
              My goal was to create an app that did a few things really well,
              however this concept app could scale considering the available
              data.
            </Paragraph>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      {/* Personas */}
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <TitleConnectorRow>
            <SectionTitle>🦙 The User/Rider</SectionTitle>
            <Connector />
          </TitleConnectorRow>
          <SectionContent>
            <SmallCaps>Personas</SmallCaps>
            <Paragraph>
              From our Audience Segmentation Survey Research Report, we
              generally break each persona in four categories:
            </Paragraph>
            <TwoByTwo>
              <Row>
                <GridItem>
                  <FontAwesomeIcon icon={faUserCheck} size={"2x"} />
                  <Paragraph>Transit-Reliant Persona</Paragraph>
                </GridItem>
                <GridItem>
                  <FontAwesomeIcon icon={faUsersCog} size={"2x"} />
                  <Paragraph>Strategic User Persona</Paragraph>
                </GridItem>
              </Row>
              <Row>
                <GridItem>
                  <FontAwesomeIcon icon={faUserShield} size={"2x"} />
                  <Paragraph>Transit Hesitant Persona</Paragraph>
                </GridItem>
                <GridItem>
                  <FontAwesomeIcon icon={faUserTimes} size={"2x"} />
                  <Paragraph>Non-Rider Persona</Paragraph>
                </GridItem>
              </Row>
            </TwoByTwo>
            <Paragraph>
              For a deeper dive in to the details of each persona, I will have a
              private per request page where I breakdown our method for
              designing the trimet.org re-architecture.
            </Paragraph>
            <Paragraph last>
              The persona that would benefit most from this concept app, would
              be
              <strong> any transit rider with a mobile smart phone</strong>.
            </Paragraph>
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
      <Styled.TextSection noBottomMargin>
        <FadeInWhenVisible>
          <TitleConnectorRow>
            <SectionTitle>🌊 Flows</SectionTitle>
            <Connector />
          </TitleConnectorRow>
          <SectionContent>
            <SmallCaps>Transit Tracker</SmallCaps>
            <Paragraph>
              The UX flow of this concept app closely resembles to the
              trimet.org re-architecture(TORA) project particularly the transit
              tracker features.
            </Paragraph>
            <Paragraph>
              To summarize the process my manager, senior designer and I took:
              We first considered our constraints to replicate/enhance current
              features of the website, next we considered what are the best
              practices in this app market, then I considered the technology it
              was being built with and how we could optimize for delivering
              these requirements to engineers.
            </Paragraph>
            <Paragraph>
              After a few large iterations, we landed on a flow that found a
              balance between complexity and efficiency.
            </Paragraph>
            <ParagraphSmall>
              Generalized audit of trimet.org trip tool features.
              <Link href="/arrivals/trimetorg-audit.jpg" passHref>
                <a target="_blank">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </a>
              </Link>
            </ParagraphSmall>
            <FancyImage
              image={"/arrivals/trimetorg-audit.jpg"}
              height={1080}
              width={1659}
            />
          </SectionContent>
        </FadeInWhenVisible>
      </Styled.TextSection>
    </Styled.ContentWrap>
  );
};
export default ArrivalsContent;
