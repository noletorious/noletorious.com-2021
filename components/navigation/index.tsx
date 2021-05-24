import DarkModeToggle from "../darkModeToggle";
import { useDarkMode } from "next-dark-mode";
import Link from "next/link";
import styled from "styled-components";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prependOnceListener } from "process";

const Nav = styled.div`
  display: flex;
  flex: 0 1 auto;
  height: 50px;
  align-items: center;
  @media (min-width: 768px) {
    position: absolute;
  }
`;

const NavUnorderedList = styled.ul`
  flex: 0 1 auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: center;
  text-align: center;
`;
const NavUnorderedItem = styled.li`
  margin: 10px;
  float: left;
  &:hover {
    cursor: pointer;
  }
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
    left: 6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    display: block;
  }
`;
const LinkWrapper = styled.div`
  &:hover + #${(props) => props.page} {
    opacity: 1;
    transform: translateY(10px);
  }
`;

export default function Navigation() {
  const { darkModeActive, autoModeActive } = useDarkMode();
  const findActive = () => {
    if (autoModeActive) return "System";
    else if (darkModeActive) return "Dark";
    else return "Light";
  };
  return (
    <Nav>
      <NavUnorderedList>
        <NavUnorderedItem>
          <LinkWrapper page="home">
            <Link href="/">
              <FontAwesomeIcon size="lg" icon={faHome} />
            </Link>
          </LinkWrapper>
          <LabelPopup id="home">Home</LabelPopup>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <LinkWrapper page="about">
            <Link href="/about">
              <FontAwesomeIcon size="lg" icon={faUser} />
            </Link>
          </LinkWrapper>
          <LabelPopup id="about">About</LabelPopup>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <LinkWrapper page={findActive()}>
            <DarkModeToggle />
          </LinkWrapper>
          <LabelPopup id={findActive()}>{findActive()}</LabelPopup>
        </NavUnorderedItem>
      </NavUnorderedList>
    </Nav>
  );
}
