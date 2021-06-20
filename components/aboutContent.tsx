import NoelImage from "./noelImage";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MOBILE_MIN_WIDTH, DESKTOP_MIN_WIDTH } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const MainPosition = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  font-size: 1.5em;
  margin: 0.5em 0;
  text-align: center;
`;

const social = [
  {
    channel: "LinkedIn",
    fa: faLinkedin,
    link: "https://linkedin.com/in/noletorious",
  },
  { channel: "Github", fa: faGithub, link: "https://github.com/noletorious" },
  {
    channel: "Dribbble",
    fa: faDribbble,
    link: "https://dribbble.com/noletorious",
  },
];

const SocialList = styled(motion.ul).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;
const SocialItem = styled.li`
  float: left;
  margin: 0 0.5em;
`;

export default function AboutContent() {
  return (
    <>
      <NoelImage />
      <MainPosition>Noel Torres</MainPosition>
      <SocialList>
        {social.map((s, idx) => {
          return (
            <SocialItem key={idx}>
              <Link href={s.link} passHref>
                <a target="_blank">
                  <FontAwesomeIcon icon={s.fa} />
                </a>
              </Link>
            </SocialItem>
          );
        })}
      </SocialList>
    </>
  );
}
