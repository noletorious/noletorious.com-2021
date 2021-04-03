import Image from "next/image";
import Head from "../components/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import NoelBg from "../components/homePageBackground";

const NameTitle = styled.span`
  font-family: monospace;
  display: inline-block;
  font-size: 0.65em;
  font-weight: 300;
  background-color: ${(props) => props.theme.accent1};
  color: #fff;
  padding: 1px 5px;
`;

export default function Home({ props }) {
  return (
    <>
      <Head />
      <NoelBg />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.nameTitleWrapper}>
            <NameTitle>Noel Torres</NameTitle>
            <h2 className={styles.title}>Front&#8208;end Designer</h2>
          </div>
          <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <a href="//github.com/noletorious">Github</a>
            </li>
            <li className={styles.socialListItem}>
              <a href="//linkedin.com/in/noletorious">Linkedin</a>
            </li>
            <li className={styles.socialListItem}>
              <a href="//dribbble.com/noletorious">Dribbble</a>
            </li>
            <li className={styles.socialListItem}>
              <a href="mailto:hello@noletorious.com">Email</a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
