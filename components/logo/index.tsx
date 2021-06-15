import { motion } from "framer-motion";
import styled from "styled-components";

export default function Logo({ size, mode }) {
  const Path = styled(motion.path).attrs((props) => ({
    fill: props.theme.fontColor,
    d: "M23.58,9.72h15.85l27.36,62.25L84.63,9.72H99L75.8,90.73H59.78L32.64,28.37l-17.9,62.37H0.38L23.58,9.72z",
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
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <g>
        <Path />
      </g>
    </svg>
  );
}
