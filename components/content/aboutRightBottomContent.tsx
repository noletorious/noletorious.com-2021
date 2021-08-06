import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MOBILE_MIN_WIDTH,
  FADEINUPFADEEXIT,
  CARDSHADOW,
  EASE,
} from "../../utils/constants";
const listWrapperVariants = {
  animate: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
const ContentWrap = styled(motion.div).attrs({
  variants: listWrapperVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  width: 100%;
`;

const DesignValuesSection = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5, delay: 0.5 } },
})`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 40vh;
  border-radius: 0 0 0 1em;
`;

const SkillsSection = styled.div`
  display: flex;
  flex: 3 1 auto;
  flex-direction: column;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;

const ExperienceSection = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin-right: 1em;
  flex-direction: column;
`;

const SkillsAndExperience = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 1em;
  margin-top: -0.45em;
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    flex-direction: row;
  }
`;

const Card = styled(motion.div).attrs({ variants: FADEINUPFADEEXIT })`
  background: ${(props) => props.theme.bg1};
  box-shadow: ${CARDSHADOW};
  padding: 1em;
  margin-bottom: 3em;
  margin-top: -1em;
  margin-left: 1em;
  width: 100%;
  border-radius: 1em;
`;

const Dot = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background: #9cc3b9;
  position: relative;
  left: 8px;
`;
const Line = styled.div`
  width: 2px;
  background: #9cc3b9;
`;
const Employer = styled.h2`
  margin-top: -0.25em;
  font-size: 1em;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const Job = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0 1em;
  font-family: monospace;
`;
const JobTimeRange = styled.span`
  font-size: 0.8em;
`;
const EmployerCard = styled(motion.div)`
  display: flex;
`;
const LineDot = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1 1 auto;
`;
const SkillHeader = styled(motion.p)`
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 0;
`;

const SkillList = styled.ul`
  padding-left: 1.5em;
  margin-bottom: 3em;
`;
const SkillItem = styled.li`
  margin-bottom: 0.5em;
  list-style: none;
  &::before {
    content: "\\2022";
    color: #9cc3b9;
    font-weight: bold;
    display: inline-block;
    margin-left: -1em;
    padding-right: 0.5em;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 0.25px solid #c5f1e6;
  margin: 2em 0;
  opacity: 0.25;
`;
const SkillsWrap = styled.div`
  display: inline;
  margin-right: 1em;
`;
export default function AboutRightBottomContent({ image }) {
  return (
    <ContentWrap>
      <DesignValuesSection image={image} />
      <SkillsAndExperience>
        <ExperienceSection>
          {/* Trimet */}
          <EmployerCard>
            <LineDot>
              <Dot />
              <Line />
            </LineDot>
            <Card>
              <Employer>TriMet</Employer>
              <Job>Web Designer/Developer</Job>
              <JobTimeRange>2017-Present</JobTimeRange>
            </Card>
          </EmployerCard>
          {/* Attensa */}
          <EmployerCard>
            <LineDot>
              <Dot />
              <Line />
            </LineDot>
            <Card>
              <Employer>Attensa</Employer>
              <Job>Visual/UI Designer</Job>
              <JobTimeRange>2014-2017</JobTimeRange>
            </Card>
          </EmployerCard>
          {/* AboutUs */}
          <EmployerCard>
            <LineDot>
              <Dot />
              <Line />
            </LineDot>
            <Card>
              <Employer>AboutUs/Jyte</Employer>
              <Job>Web Designer</Job>
              <JobTimeRange>2012-2014</JobTimeRange>
            </Card>
          </EmployerCard>
          <EmployerCard>
            <LineDot>
              <Dot />
              <Line />
            </LineDot>
            <Card>
              <Employer>Passport2Network</Employer>
              <Job>Junior Web Designer</Job>
              <JobTimeRange>2011-2012</JobTimeRange>
            </Card>
          </EmployerCard>
          <EmployerCard>
            <LineDot>
              <Dot />
            </LineDot>
            <Card>
              <Employer>Southern Oregon University</Employer>
              <Job>
                Major: Computer Science <br /> Minor: History of Philosophy
              </Job>
              <JobTimeRange>2007-2011</JobTimeRange>
            </Card>
          </EmployerCard>
        </ExperienceSection>
        <SkillsSection>
          <SkillsWrap>
            <Card>
              <SkillHeader>Muscle memory</SkillHeader>
              <SkillList>
                <SkillItem>User-centered design</SkillItem>
                <SkillItem>Motion design</SkillItem>
                <SkillItem>Front-end development</SkillItem>
                <SkillItem>Rapid Prototyping</SkillItem>
                <SkillItem>Design to code</SkillItem>
              </SkillList>
              <SkillHeader>Design</SkillHeader>
              <SkillList>
                <SkillItem>Adobe: AE, AI, XD, PS</SkillItem>
                <SkillItem>Storybookjs</SkillItem>
                <SkillItem>Framerjs</SkillItem>
              </SkillList>
              <SkillHeader>Developement</SkillHeader>
              <SkillList>
                <SkillItem>React trained</SkillItem>
                <SkillItem>Nextjs, Gatsbyjs</SkillItem>
                <SkillItem>Visual Studio Code</SkillItem>
                <SkillItem>Browserstack</SkillItem>
                <SkillItem>Agile/Scrum experienced</SkillItem>
              </SkillList>
              <SkillHeader>Learning</SkillHeader>
              <SkillList>
                <SkillItem>Enrolled in Reacttraining</SkillItem>
                <SkillItem>Python: 100 days of Python</SkillItem>
                <SkillItem>Blender and Threejs: Threejs Journey</SkillItem>
              </SkillList>
            </Card>
          </SkillsWrap>
        </SkillsSection>
      </SkillsAndExperience>
    </ContentWrap>
  );
}
