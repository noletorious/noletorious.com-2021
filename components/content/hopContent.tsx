import * as Styled from "../scaffold";

export default function HopContent({ image }) {
  return (
    <Styled.Container>
      <Styled.ContentWrap>
        <Styled.ImageHeader image={image} />
      </Styled.ContentWrap>
    </Styled.Container>
  );
}
