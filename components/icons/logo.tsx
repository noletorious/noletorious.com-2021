import { motion } from "framer-motion";
import styled from "styled-components";

const Polygon = styled(motion.polygon).attrs((props) => ({
  points: props.points,
}))``;

const LinearGradient = styled(motion.linearGradient).attrs((props) => ({
  id: props.id,
  gradientUnits: props.gradientUnits,
  x1: props.x1,
  y1: props.y1,
  x2: props.x2,
  y2: props.y2,
}))``;

const Stop = styled(motion.stop).attrs((props) => ({
  offset: props.offset,
  stopColor: props.stopColor,
}))``;

const Path = styled(motion.path).attrs((props) => ({
  d: props.d,
}))``;

const Polyline = styled(motion.polyline).attrs((props) => ({
  points: props.points,
}))``;
export default function Logo({ size, mode }) {
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
      <style type="text/css">{`.st0{fill:url(#SVGID_1_)}`}</style>
      <g>
        <Polygon points="74.5,10.5 62.8,51.2 44.9,10.5 23.4,10.5 0.6,90 24.8,90 36.6,49.2 54.3,90 76,90 98.7,10.5" />
        <LinearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="49.65"
          y1="-1.0586"
          x2="49.65"
          y2="97.0414"
        >
          <Stop offset="0" stopColor="rgb(224,224,224)" />
          <Stop offset="0.9979" stopColor="rgb(29,222,99)" />
        </LinearGradient>
        <Path d="M98.7,10.5H74.5L62.8,51.2L44.9,10.5H23.4L0.6,90h24.2l11.8-40.8L54.3,90H76L98.7,10.5L98.7,10.5z" />
      </g>
      <Polyline points="93.4,14.5 73,86 56.9,86 40.3,47.6 35.8,37.4 32.8,48.1 21.8,86 5.9,86 26.4,14.5 42.3,14.5 59.1,52.8 63.6,62.9 66.6,52.3 77.5,14.5 93.4,14.5" />
    </svg>
  );
}
