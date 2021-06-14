import styled from "styled-components";
// import Image from "next/image";
import { motion } from "framer-motion";

const projectCardVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

const Card = styled(motion.div).attrs({ variants: projectCardVariants })`
  display: flex;
  flex: 1;
  margin: 20px 20px;
  max-width: 400px;
  &:hover {
    cursor: pointer;
  }
`;

const FancyImage = styled(motion.img)`
  width: 100%;
  border-radius: 1em;
`;

export default function ProjectCard({ title, image, children }) {
  return (
    <Card>
      {/* <Image
        src={image}
        title={title}
        layout="intrinsic"
        height="500"
        width="500"
      /> */}
      <FancyImage src={image} title={title} />
    </Card>
  );
}
