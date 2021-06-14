import DarkModeToggle from "../darkModeToggle";
import styled from "styled-components";
import Link from "next/link";
import { useDarkMode } from "next-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  height: 50px;
  padding: 20px 0 0 20px;
`;

const LabelPopup = styled.div`
  opacity: 0;
  position: absolute;
  font-family: monospace;
  font-size: 1em;
  background: #fff;
  color: #222;
  border-radius: 0.2em;
  padding: 0px 4px;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
  transition: transform 250ms;
  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 4px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    display: block;
  }
`;
const LinkWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const IconWrapper = styled.div`
  font-size: 1.5em;
  line-height: 0.6;
  transition: transform 250ms;
  &:hover + #${(props) => props.page} {
    opacity: 1;
    transform: translateY(10px);
  }
`;
const LinkChevron = styled.div`
  margin: 0 10px;
`;
const ModeToggleWrapper = styled.div`
  display: inline-flex;
  font-size: 0.8em;
  &:hover {
    cursor: pointer;
  }
`;

export default function Old() {
  const { darkModeActive } = useDarkMode();
  const findActive = () => {
    if (darkModeActive) return "Dark";
    else return "Light";
  };
  return (
    <Nav>
      <LinkWrapper>
        <Link href="/">
          <IconWrapper page="home"> n </IconWrapper>
        </Link>
        <LabelPopup id="home">Home</LabelPopup>
        <LinkChevron>
          <FontAwesomeIcon icon={faChevronDown} />
        </LinkChevron>
      </LinkWrapper>
      <ModeToggleWrapper>
        <IconWrapper page={findActive()}>
          <DarkModeToggle />
        </IconWrapper>
        <LabelPopup id={findActive()}>{findActive()}</LabelPopup>
      </ModeToggleWrapper>
    </Nav>
  );
}
