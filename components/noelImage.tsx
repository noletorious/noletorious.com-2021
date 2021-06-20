import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { MOBILE_MIN_WIDTH } from "../utils/constants";

const NoelImageWrap = styled(motion.div).attrs({
  layoutId: "noel",
})`
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  z-index: 2;
  width: ${(props) => (props.currentPage == "/" ? "150px" : "100px")};
  height: ${(props) => (props.currentPage == "/" ? "150px" : "100px")};
  @media (min-width: ${MOBILE_MIN_WIDTH}) {
    width: ${(props) => (props.currentPage == "/" ? "300px" : "150px")};
    height: ${(props) => (props.currentPage == "/" ? "300px" : "150px")};
  }
`;

export default function NoelImage() {
  const router = useRouter();

  return (
    <NoelImageWrap currentPage={router.pathname}>
      <Image
        src={`/noel-trimet-square.jpg`}
        layout="intrinsic"
        width={300}
        height={300}
        priority={true}
        className="img-rounded"
      />
    </NoelImageWrap>
  );
}
