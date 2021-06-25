import { Container } from "../scaffold";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    pointer: cursor;
  }
`;

const ImageWrap = styled.div`
  position: relative;
`;

const FancyImage = styled.img`
  width: 100%;
  height: 100%;
`;
const IconWrap = styled.div``;

export default function MaintenancePage() {
  return (
    <Container direction="column">
      <Content>
        <ImageWrap>
          <FancyImage src="https://www.reactiongifs.com/r/The-Hills.gif" />
        </ImageWrap>
        <p>
          Building a new portfolio, come back{" "}
          <span style={{ fontFamily: "monospace" }}>07/04/2021</span>
        </p>
        <Icons>
          <IconWrap>
            <Link href="https://dribbble.com/noletorious">
              <FontAwesomeIcon icon={faDribbble} size="2x" />
            </Link>
          </IconWrap>
          <IconWrap style={{ margin: "0 1em" }}>
            <Link href="https://dribbble.com/noletorious">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </IconWrap>
          <IconWrap>
            <Link href="https://dribbble.com/noletorious">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
          </IconWrap>
        </Icons>
      </Content>
    </Container>
  );
}
