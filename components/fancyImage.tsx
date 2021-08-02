import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImageWrap = styled(motion.div)`
  display: flex;
`;

export default function FancyImage({ image, height, width, delay = 0 }) {
  return (
    <ImageWrap>
      <Image
        placeholder="blur"
        src={image}
        layout="intrinsic"
        width={width}
        height={height}
      />
    </ImageWrap>
  );
}
