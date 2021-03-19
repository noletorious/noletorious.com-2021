import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noel Torres Portfolio - Be right back!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src="/noel-trimet-square.jpg"
            layout="intrinsic"
            width={400}
            height={400}
            alt="Noel Torres"
            className={styles.profilepic}
          />
          <div className={styles.nameTitleWrapper}>
            <span className={styles.nameTitle}>Noel Torres</span>
            <h2 className={styles.title}>Font&#8208;end Designer</h2>
          </div>
          <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <a href="//github.com/noletorious">Github</a>
            </li>
            <li className={styles.socialListItem}>
              <a href="//linkedin.com/noletorious">Linkedin</a>
            </li>
            <li className={styles.socialListItem}>
              <a href="//dribbble.com/noletorious">Dribbble</a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
