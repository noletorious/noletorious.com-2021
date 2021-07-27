import { useState } from "react";
import Sparkles from "./sparkles";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Button = styled.a`
  diplay: inline-flex;
  font-size: 1em;
  font-family: monospace;
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.reverseColor && props.theme.accent1reverse} !important;
    border-bottom: none !important;
  }
  color: ${(props) =>
    props.reverseColor && props.theme.accent1reverse} !important;
  border-bottom: 1px dotted
    ${(props) => props.reverseColor && props.theme.accent1reverse} !important;
`;
const ButtonWrap = styled(motion.div)``;

const SparkleButton = ({
  children,
  url,
  reverseColor = false,
  noNewTab = false,
}) => {
  const [linkHovered, setLinkHovered] = useState(false);
  return (
    <ButtonWrap
      onHoverStart={(e) => {
        setLinkHovered(true);
      }}
      onHoverEnd={(e) => {
        setLinkHovered(false);
      }}
    >
      {linkHovered ? (
        <Sparkles>
          <Link href={url} passHref>
            <Button
              reverseColor={reverseColor}
              target={noNewTab ? null : "_blank"}
            >
              {children}
            </Button>
          </Link>
        </Sparkles>
      ) : (
        <Link href={url} passHref>
          <Button reverseColor={reverseColor} target="_blank">
            {children}
          </Button>
        </Link>
      )}
    </ButtonWrap>
  );
};

export default SparkleButton;
