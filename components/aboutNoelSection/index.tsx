import { Container } from "../scaffold";
import styled from "styled-components";
import Card from "../projects/aboutProjectCard";
import { motion } from "framer-motion";

const SectionHeader = styled.h2`
  font-family: monospace;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1em;
  font-weight: 300;
  text-transform: uppercase;
  &::after {
    content: " ";
    border-top: 2px solid;
    margin: 0 20px 0 20px;
    flex: 1 0 20px;
  }
`;

const cardParentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.1 } },
};

const CardParent = styled(motion.div).attrs({
  variants: cardParentVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})``;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Employer = styled.h2``;
const Since = styled.span`
  font-weight: 300;
  font-family: monospace;
  font-size: 0.8em;
  margin-left: 1em;
  &::after {
    content: "]";
  }
  &::before {
    content: "[";
  }
`;

export default function AboutNoelSection() {
  return (
    <Container direction="row">
      <ContentWrapper>
        <SectionHeader>background</SectionHeader>
        <CardParent>
          <Card>
            <Employer>
              TriMet<Since>Current, since 2017</Since>
            </Employer>
            <p>Web Developer/Designer</p>
          </Card>
          <Card>
            <Employer>
              Attensa<Since>2014-2017</Since>
            </Employer>
            <p>Web Developer/Designer</p>
          </Card>
        </CardParent>
      </ContentWrapper>
    </Container>
  );
}
