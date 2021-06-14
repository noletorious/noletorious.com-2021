import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  display: flex;
  flex: 1;
  margin: 20px 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default function ProjectCard({ title, image, children }) {
  return (
    <Card>
      <Image
        src={image}
        title={title}
        layout="intrinsic"
        height="500"
        width="500"
      />
    </Card>
  );
}
