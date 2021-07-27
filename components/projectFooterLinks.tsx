import styled from "styled-components";
import Link from "next/link";
import { FADEINUPFADEEXIT } from "../utils/constants";

const NextLinks = styled.div.attrs({
  variants: FADEINUPFADEEXIT,
  initial: "initial",
  animate: "animate",
  exit: "exit",
})`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 2em;
`;

const ProjectFooterLinks = ({ nextLink, next }) => {
  return (
    <NextLinks>
      <Link href={"/"}>
        <a>← Home</a>
      </Link>
      <Link href={nextLink}>
        <a>{next} →</a>
      </Link>
    </NextLinks>
  );
};
export default ProjectFooterLinks;
