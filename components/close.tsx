import { motion } from "framer-motion";
import styled from "styled-components";

export default function Logo({ size }) {
  const Path = styled(motion.path).attrs((props) => ({
    fill: "none",
    d: "M0 0h24v24H0V0z",
  }))``;

  const Path2 = styled(motion.path).attrs((props) => ({
    fill: "#fff",
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",
  }))``;

  return (
    <svg
      style={{ pointerEvents: "none" }}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlSpace="preserve"
    >
      <g>
        <Path />
        <Path2 />
      </g>
    </svg>
  );
}
