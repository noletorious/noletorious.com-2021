import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const HomeAboutPagesVariants = {
  initial: { opacity: 1 },
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
  initial: "initial",
  animate: "animate",
  exit: "exit",
}))`
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  }
`;

export default function NoelImage() {
  const router = useRouter();

  return (
    <NoelImageWrap currentPage={router.pathname}>
      <Link href={router.pathname == "/" ? "/about" : "/"} passHref>
        <a>
          <Image
            src={`/noel-trimet-square.jpg`}
            layout="intrinsic"
            width={200}
            height={200}
            priority={true}
            className="img-rounded"
          />
        </a>
      </Link>
    </NoelImageWrap>
  );
}
