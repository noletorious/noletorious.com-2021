import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import * as Styled from "../scaffold";
import FadeInWhenVisible from "../fadeInWhenVisible";
import CloseIcon from "../icons/close";
import InfoIcon from "../icons/info";

export default function CascadiaContent({ image }) {
  const [jobDescDisplay, setJobDescDisplay] = useState(true);
  const [jobDescHover, setJobDescHover] = useState(false);

  function JobDescToggle() {
    setJobDescDisplay(!jobDescDisplay);
  }
  return (
    <Styled.ContentWrap>
      <Styled.ImageHeader image={image}>
        <AnimatePresence>
          {jobDescDisplay && (
            <>
              <Styled.JobDescContainer
                color="rgb(34,34,34)"
                transColor="rgba(34,34,34,.95)"
              >
                <Styled.ColorBoxWrap>
                  <Styled.ColorBox color="rgb(5,5,5)" transparent />
                  <Styled.ColorBox color="rgb(209, 68, 30)" />
                  <Styled.ColorBox color="rgb(247, 232, 134)" />
                  <Styled.ColorBox color="rgb(109, 179, 63)" />
                  <Styled.ColorBox color="rgb(211, 233, 255)" />
                </Styled.ColorBoxWrap>
                <Styled.JobTitle>Design Lead</Styled.JobTitle>
                <Styled.JobDescription>
                  Animation, Apparel Design, Photography
                </Styled.JobDescription>
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
            <Styled.ToggleWrapper
              onHoverStart={(e) => {
                setJobDescHover(true);
              }}
              onHoverEnd={(e) => {
                setJobDescHover(false);
              }}
            >
              {jobDescHover ? (
                <Styled.CloseWrap>
                  <InfoIcon size={24} />
                </Styled.CloseWrap>
              ) : (
                <Styled.CloseWrap>
                  <InfoIcon size={24} />
                </Styled.CloseWrap>
              )}
            </Styled.ToggleWrapper>
          )}
        </Styled.JobDescToggle>
      </Styled.ImageHeader>
    </Styled.ContentWrap>
  );
}
