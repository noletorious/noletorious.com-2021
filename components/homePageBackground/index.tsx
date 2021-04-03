import { useEffect } from "react";
import styled from "styled-components";

const handleWindowAdjust = () => {
  const width = window.innerWidth;
  return width;
};

const NoelBg = styled.div`
  position: absolute;
  width: ${handleWindowAdjust}px;
  height: 50vh;
  background-image: url(/noel-trimet-square.jpg);
  background-repeat: no-repeat;
  border-radius: 0 100% 0 0;
  background-position: center;
  background-size: cover;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export default function homePageBackground() {
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <>
      <NoelBg />
    </>
  );
}
