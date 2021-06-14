import styled from "styled-components";
import { MOBILE_MIN_WIDTH } from "../constants";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const ProjectListWrapper = styled(motion.div).attrs({})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Projects = [
  { name: "TriMet", image: "/images/trimet-front.jpg" },
  { name: "Hop Fastpass", image: "/images/hopreader-front.jpg" },
  { name: "Attensa", image: "/images/attensa-front.png" },
  { name: "Cascadia Threads", image: "/images/ct-front.png" },
];

export default function ListProject() {
  return (
    <>
      <ProjectListWrapper>
        {Projects.map((p: { name: string; image: string }, idx: number) => {
          return (
            <ProjectCard key={idx} title={p.name} image={p.image}>
              {p.name}
            </ProjectCard>
          );
        })}
      </ProjectListWrapper>
    </>
  );
}
