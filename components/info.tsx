import { motion } from "framer-motion";
import styled from "styled-components";

export default function Logo({ size }) {
  const Path = styled(motion.path).attrs((props) => ({
    fill: "none",
    d: "M0 0h24v24H0V0z",
  }))``;
  const Path2 = styled(motion.path).attrs((props) => ({
    fill: "#fff",
    d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
  }))``;

  return (
    <svg
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
