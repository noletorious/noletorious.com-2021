import Image from "next/image";
import Head from "../components/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NameTitle = styled.span`
  font-family: monospace;
  display: inline-block;
  flex: 0 0 10px;
  font-size: 0.65em;
  font-weight: 300;
  background-color: ${(props) => props.theme.accent1};
  color: #fff;
  padding: 1px 5px;
`;

const NameColumn = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`;

const ProjectsColumn = styled.div`
  display: flex;
  flex: 1 1 auto;
  background-color: ${(props) => props.theme.bgReverse};
  flex-direction: column;
`;

const JobTitle = styled.div`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold;
`;

const ProjectSectionTitle = styled.h3`
  color: ${(props) => props.theme.muted};
`;
const ProjectUnorderList = styled.ul``;
const ProjectItem = styled.li`
  color: ${(props) => props.theme.fontColorReverse};
`;

export default function Home({ props }) {
  return (
    <>
      <Head title="Fullstack Designer - Noel Torres" />
      <Container>
        <NameColumn>
          <NameTitle>Noel Torres</NameTitle>
          <JobTitle>Fullstack Designer</JobTitle>
        </NameColumn>
        <ProjectsColumn>
          <ProjectSectionTitle>TriMet</ProjectSectionTitle>
          <ProjectUnorderList>
            <ProjectItem>New Service Flythroughs</ProjectItem>
          </ProjectUnorderList>
        </ProjectsColumn>
      </Container>
    </>
  );
}
