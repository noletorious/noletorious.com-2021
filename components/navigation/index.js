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

const fontAwesomeStyles = {
  color: `${(props) => props.muted}`,
};

export default function Navigation() {
  const { darkModeActive } = useDarkMode();
  return (
    <Nav>
      <NavUnorderedList>
        <NavUnorderedItem>
          <Link href="/">
            <FontAwesomeIcon size="lg" icon={faHome} />
          </Link>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <Link href="/about">
            <FontAwesomeIcon
              size="lg"
              icon={faUser}
              style={fontAwesomeStyles}
            />
          </Link>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <DarkModeToggle />
        </NavUnorderedItem>
      </NavUnorderedList>
    </Nav>
  );
}
