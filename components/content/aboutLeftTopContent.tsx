import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import NoelImage from "../noelImage";
import { FADEINUPFADEEXIT } from "../../utils/constants";
import SparkleButton from "../sparkleButton";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bg1};
  padding-bottom: 2em;
  padding-top: 1em;
`;

const ImageWrap = styled.div`
  z-index: 2;
  position: relative;
  margin: 0 auto;
`;
const IconWrap = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Icons = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1em;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  margin: 1em 0 0 0;
  font-size: 1em;
`;

const ResumeButtonWrap = styled(motion.div).attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  diplay: flex;
  margin-top: 1em;
`;
const ResumeButton = styled.a`
  diplay: flex;
  font-size: 1em;
  margin: 0.75em;
  font-family: monospace;
  &:hover {
    cursor: pointer;
  }
`;
const LinkWrap = styled.div`
  color: ${(props) => props.theme.accent1};
`;
export default function AboutContent() {
  const [emailHovered, setEmailHovered] = useState(false);
  return (
    <ContentWrap>
      <ImageWrap>
        <NoelImage />
      </ImageWrap>
      <Name>Noel Torres</Name>
      <Icons>
        <IconWrap>
          <LinkWrap>
            <Link href="https://dribbble.com/noletorious">
              <FontAwesomeIcon icon={faDribbble} size="1x" />
            </Link>
          </LinkWrap>
        </IconWrap>
        <IconWrap style={{ margin: "0 .75em" }}>
          <LinkWrap>
            <Link href="https://linkedin.com/in/noletorious">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Link>
          </LinkWrap>
        </IconWrap>
        <IconWrap>
          <LinkWrap>
            <Link href="https://github.com/noletorious">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </Link>
          </LinkWrap>
        </IconWrap>
      </Icons>
      <SparkleButton url={"mailto:hello@noletorious.com"}>
        Email me
      </SparkleButton>
    </ContentWrap>
  );
}
