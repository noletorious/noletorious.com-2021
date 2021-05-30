import React from "react";
import { Container } from "../components/scaffold";
import DarkModeToggle from "../components/darkModeToggle";
import { faLinkedin, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialLinksWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
`;

const SocialLink = styled.a.attrs((props) => ({
  href: props.link,
}))`
  color: ${(props) => props.theme.accent1};
  margin-right: 0.4em;
  &:hover {
    cursor: pointer;
  }
`;

export default function Homepage() {
  return (
    <Container>
      <DarkModeToggle />
      <p>Making a better, stronger, faster portfolio.</p>
      <span
        style={{
          opacity: 0.5,
          fontSize: ".75em",
          marginBottom: "1em",
        }}
      >
        Come back 06•05•2021
      </span>
      <SocialLinksWrapper>
        <SocialLink link="https://linkedin.com/in/noletorious">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink link="https://dribbble.com/noletorious">
          <FontAwesomeIcon icon={faDribbble} />
        </SocialLink>
      </SocialLinksWrapper>
    </Container>
  );
}
