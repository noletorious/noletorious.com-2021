import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FADEINUPFADEEXIT, EASE } from "../utils/constants";

const ImageWrap = styled(motion.div).attrs((props) => ({
  // variants: FADEINUPFADEEXIT,
  // initial: "initial",
  // // animate: {
  // //   opacity: 1,
  // //   y: 0,
  // //   transition: {
  // //     duration: 0.5,
  // //     ease: EASE,
  // //     delay: props.delay == 0 ? 0 : props.delay,
  // //   },
  // // },
  // animate: "animate",
  // exit: "exit",
}))`
  display: flex;
`;

export default function FancyImage({ image, height, width, delay = 0 }) {
  return (
    <ImageWrap delay={delay}>
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
