import { Container } from "../scaffold";

export default function HopContent({ image }) {
  return (
    <Container>
      <ContentWrap>
        <ImageHeader image={image} />
      </ContentWrap>
    </Container>
  );
}
