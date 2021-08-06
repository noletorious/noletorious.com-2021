import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const HomeAboutPagesVariants = {
  initial: {
    opacity: 1,
    background: "linear-gradient(orange, violet)",
    padding: "2px",
  },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

const notHomeAboutPagesVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const NoelImageWrap = styled(motion.div).attrs((props) => ({
  layoutId: "noel",
  variants:
    props.currentPage == "/" || props.currentPage == "/about"
      ? HomeAboutPagesVariants
      : notHomeAboutPagesVariants,
  initial:
    props.currentPage == "/" || props.currentPage == "/about"
      ? HomeAboutPagesVariants.initial
      : notHomeAboutPagesVariants.initial,
  animate: "animate",
  exit: "exit",
  whileHover: {
    background: props.imageHovering
      ? props.theme.accent1
      : HomeAboutPagesVariants.initial.background,
  },
}))`
  position: relative;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  margin: 1em auto 0;
  overflow: hidden;
  border-radius: 50%;
  background-clip: padding-box;
  &:hover {
    cursor: pointer;
  }
  & > div {
    display: block !important;
  }
`;
export default function NoelImage() {
  const router = useRouter();
  const [imageHovering, setImageHover] = useState(false);

  return (
    <Link href={router.pathname == "/" ? "/about" : "/"}>
      <NoelImageWrap
        onMouseOver={() => {
          setImageHover(true);
        }}
        onMouseLeave={() => {
          setImageHover(false);
        }}
        currentPage={router.pathname}
        imageHovering={imageHovering}
      >
        <Image
          src={`/noel-square.jpg`}
          layout="intrinsic"
          width={200}
          height={200}
          priority={true}
          className="img-rounded"
        />
      </NoelImageWrap>
    </Link>
  );
}
