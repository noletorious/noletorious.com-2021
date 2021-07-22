import styled from "styled-components";
import Link from "next/link";

const NextLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 2em;
`;

const ProjectFooterLinks = ({ next }) => {
  return (
    <NextLinks>
      <Link href={"/"}>← Home</Link>
      <Link href={next}>Attensa →</Link>
    </NextLinks>
  );
};
export default ProjectFooterLinks;
