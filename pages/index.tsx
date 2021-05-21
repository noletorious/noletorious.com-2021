import { useState } from "react";
import Image from "next/image";
import Head from "../components/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NameTitleWrapper = styled.div`
  display: flex;
`;

const NameTitle = styled.span`
  font-family: monospace;
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
  align-items: center;
  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
`;

const ProjectsColumn = styled.div`
  display: flex;
  flex: 2 1 auto;
  background-color: ${(props) => props.theme.bg2};
  flex-direction: column;
  width: auto;
  text-align: center;
  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
`;

const ProjectsColumnPadHelper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 2em;
  overflow: auto;
`;

const BlogColumnHelper = styled.div`
  color: ${(props) => props.theme.muted};
`;

const JobTitle = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold;
`;

const ProjectSectionTitle = styled.h3`
  color: ${(props) => props.theme.muted};
  font-size: 0.9em;
  text-transform: uppercase;
`;

const ProjectUnorderList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding-inline-start: 0;
`;

const ProjectItem = styled.li`
  color: ${(props) => props.theme.fontColorReverse};
  margin-bottom: 0.3em;
`;

const ProjBlogButton = styled.span`
  font-family: monospace;
  margin: 0 5px;
  color: ${(props) => props.theme.fontColorReverse};
  &:hover {
    cursor: pointer;
  }
`;

const ProjBlogWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.fontColorReverse};
  justify-content: flex-end;
  height: 50px;
  align-items: center;
  margin-right: 20px;
`;

export default function Home({ props }) {
  function projectDisplayHandler() {
    setProjDisplay(true);
  }

  function blogDisplayHandler() {
    setProjDisplay(false);
  }
  const [projDisplay, setProjDisplay] = useState(true);
  return (
    <>
      <Head title="Fullstack Designer - Noel Torres" />
      <Container>
        <NameColumn>
          <NameTitleWrapper>
            <NameTitle>Noel Torres</NameTitle>
          </NameTitleWrapper>
          <JobTitle>
            User Interface <br />
            Designer{" "}
          </JobTitle>
        </NameColumn>
        <ProjectsColumn>
          <ProjBlogWrapper>
            <ProjBlogButton
              onClick={() => {
                projectDisplayHandler();
              }}
            >
              Project
            </ProjBlogButton>
            |
            <ProjBlogButton
              onClick={() => {
                blogDisplayHandler();
              }}
            >
              Blog
            </ProjBlogButton>
          </ProjBlogWrapper>
          {!projDisplay ? (
            <BlogColumnHelper>
              <p>Blog coming soon...</p>
            </BlogColumnHelper>
          ) : (
            <ProjectsColumnPadHelper>
              <ProjectSectionTitle>TriMet</ProjectSectionTitle>
              <ProjectUnorderList>
                <ProjectItem>New Service Google Flythroughs</ProjectItem>
                <ProjectItem>TriMet.org Redesign</ProjectItem>
                <ProjectItem>Transit Tracker Experimental</ProjectItem>
                <ProjectItem>Custom 3D Bus</ProjectItem>
              </ProjectUnorderList>
              <ProjectSectionTitle>Hop Fastpass</ProjectSectionTitle>
              <ProjectUnorderList>
                <ProjectItem>Hop Fastpass Launch Commercial</ProjectItem>
                <ProjectItem>Hopster Virtual Card Animation</ProjectItem>
                <ProjectItem>Website Animations myhopcard.com</ProjectItem>
              </ProjectUnorderList>
              <ProjectSectionTitle>10% of my time</ProjectSectionTitle>
              <ProjectUnorderList>
                <ProjectItem>Transit Arrivals Case Study</ProjectItem>
                <ProjectItem>Attensa Visual Designer</ProjectItem>
                <ProjectItem>Custom Tesla Wrap</ProjectItem>
              </ProjectUnorderList>
            </ProjectsColumnPadHelper>
          )}
        </ProjectsColumn>
      </Container>
    </>
  );
}
