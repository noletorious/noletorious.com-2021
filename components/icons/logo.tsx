import { motion } from "framer-motion";
import styled from "styled-components";

export default function Logo({ size, mode }) {
  const Path = styled(motion.polygon).attrs((props) => ({
    fill: props.theme.fontColor,
    points:
      "74.5,10.5 62.8,51.2 44.9,10.5 23.4,10.5 0.6,90 24.8,90 36.6,49.2 54.3,90 76,90 98.7,10.5 ",
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
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <g>
        <Path />
      </g>
    </svg>
  );
}
