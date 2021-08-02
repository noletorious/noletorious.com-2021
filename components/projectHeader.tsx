import { useState } from "react";
import * as Styled from "./scaffold";
import { AnimatePresence } from "framer-motion";
import CloseIcon from "./icons/close";
import InfoIcon from "./icons/info";
import FancyImage from "./fancyImage";

const ProjectHeader = ({
  colors,
  image,
  position,
  logo,
  logoHeight,
  logoWidth,
  description,
}) => {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  function JobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }
  return (
    <Styled.ImageHeader image={image}>
      <AnimatePresence>
        {jobDescDisplay && (
          <>
            <Styled.JobDescContainer color={colors[0]} transColor={colors[5]}>
              <Styled.JobLogoWrap>
                <FancyImage
                  image={logo}
                  width={logoWidth}
                  height={logoHeight}
                />
              </Styled.JobLogoWrap>
              <Styled.ColorBoxWrap>
                <Styled.ColorBox color={colors[0]} transparent />
                <Styled.ColorBox color={colors[1]} />
                <Styled.ColorBox color={colors[2]} />
                <Styled.ColorBox color={colors[3]} />
                <Styled.ColorBox color={colors[4]} />
              </Styled.ColorBoxWrap>
              <Styled.JobTitle>{position}</Styled.JobTitle>
              <Styled.JobDescription>{description}</Styled.JobDescription>
            </Styled.JobDescContainer>
          </>
        )}
      </AnimatePresence>
      <Styled.JobDescToggle onClick={JobDescToggle}>
        {jobDescDisplay ? (
          <Styled.CloseWrap>
            <CloseIcon size={24} />
          </Styled.CloseWrap>
        ) : (
          <Styled.ToggleWrapper>
            <Styled.CloseWrap>
              <InfoIcon size={24} />
            </Styled.CloseWrap>
          </Styled.ToggleWrapper>
        )}
      </Styled.JobDescToggle>
    </Styled.ImageHeader>
  );
};

export default ProjectHeader;
