import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const NoelImageWrap = styled(motion.div).attrs({
  layoutId: "noel",
})`
  position: relative;
  display: flex;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`;

export default function NoelImage() {
  return (
    <NoelImageWrap>
      <Image src={`/noel-trimet-square.jpg`} layout="fill" priority={true} />
    </NoelImageWrap>
  );
}
