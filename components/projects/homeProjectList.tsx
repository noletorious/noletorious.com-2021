import styled from "styled-components";
import { motion } from "framer-motion";
import { jobs } from "../../data/jobs";
import SingleHomeProject from "./singleHomeProject";

const ProjectVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 10,
  },
};

const listWrapperVariants = {
  animate: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const ListWrapper = styled(motion.div).attrs({
  variants: listWrapperVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
export default function homeProjectList() {
  return (
    <ListWrapper>
      {jobs.map((item, idx) => {
        return (
          <div key={idx}>
            <SingleHomeProject
              image={item.image}
              name={item.name}
              link={item.link}
            />
          </div>
        );
      })}
    </ListWrapper>
  );
}
