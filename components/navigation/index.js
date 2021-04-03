import DarkModeToggle from "../darkModeToggle";
import { useDarkMode } from "next-dark-mode";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex: 0 1 50px;
  height: 100%;
`;

const NavUnorderedList = styled.ul`
  flex: 0 1 auto;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const NavUnorderedItem = styled.li`
  margin-left: 1em;
`;

export default function Navigation() {
  const { darkModeActive } = useDarkMode();
  return (
    <Nav>
      <NavUnorderedList>
        <NavUnorderedItem>
          <Link href="/">
            <a> Home</a>
          </Link>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavUnorderedItem>
        <NavUnorderedItem>
          <DarkModeToggle />
        </NavUnorderedItem>
      </NavUnorderedList>
    </Nav>
  );
}
