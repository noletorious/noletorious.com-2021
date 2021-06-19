import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const singleHomeProjectVariants = {
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

const Card = styled(motion.div).attrs({ variants: singleHomeProjectVariants })`
  background: #fff;
  color: ${(props) => props.theme.black};
  display: inline-flex;
  flex: 1 1 auto;
  margin: 10px 0;
  position: relative;
`;

export default function SingleHomeProject({ name, image, link }) {
  return (
    <Card>
      <Image src={image} layout="intrinsic" width={500} height={500} />
    </Card>
  );
}