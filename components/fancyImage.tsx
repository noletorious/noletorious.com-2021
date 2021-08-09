import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./fadeInWhenVisible";

const ImageWrap = styled(motion.div)`
  display: flex;
  border: ${(props) => (props.bordered ? "1px solid #878b8d" : "none")};
  border-radius: ${(props) => (props.boxRadius ? "1em" : "0")};
  overflow: ${(props) => (props.boxRadius ? "hidden" : "initial")};
`;

export default function FancyImage({
  image,
  height,
  width,
  delay = 0,
  boxRadius = false,
  bordered = false,
}) {
  return (
    <FadeInWhenVisible>
      <ImageWrap boxRadius={boxRadius} bordered={bordered}>
        <Image src={image} layout="intrinsic" width={width} height={height} />
      </ImageWrap>
    </FadeInWhenVisible>
  );
}
