import { useEffect, useState } from "react";
import styled from "styled-components";

const NoelBg = styled.div`
  position: absolute;
  width: ${(props) => props.bg}px;
  height: ${(props) => props.bg}px;
  max-width: 500px;
  max-height: 500px;
  background-image: url(/noel-trimet-square.jpg);
  background-repeat: no-repeat;
  border-radius: 0 100% 0 0;
  background-position: top center;
  background-size: cover;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export default function homePageBackground() {
  //Define the window's width
  const [windowWidth, setWindowWidth] = useState(0);

  // Set the window width
  useEffect(() => {
    setWindowWidth(window.innerWidth / 2);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth / 2);
    });
  });

  return (
    <>
      <NoelBg bg={windowWidth} />
    </>
  );
}
