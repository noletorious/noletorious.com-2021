import styled from "styled-components";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

const projectListWrapperVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.4,
    },
  },
};

const ProjectListWrapper = styled(motion.div).attrs({
  variants: projectListWrapperVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const projects = [
  { name: "TriMet", image: "/images/trimet-front.jpg" },
  { name: "Hop Fastpass", image: "/images/hopreader-front.jpg" },
  { name: "Attensa", image: "/images/attensa-front.png" },
  { name: "Cascadia Threads", image: "/images/ct-front.png" },
];
const otherProjects = [
  { name: "TriMet", image: "/images/trimet-front.jpg" },
  { name: "Hop Fastpass", image: "/images/hopreader-front.jpg" },
  { name: "Attensa", image: "/images/attensa-front.png" },
  { name: "Cascadia Threads", image: "/images/ct-front.png" },
];

export default function ListProject() {
  return (
    <>
      <ProjectListWrapper>
        {projects.map((p: { name: string; image: string }, idx: number) => {
          return (
            <ProjectCard title={p.name} key={idx} image={p.image}>
              {p.name}
            </ProjectCard>
          );
        })}
      </ProjectListWrapper>
    </>
  );
}
