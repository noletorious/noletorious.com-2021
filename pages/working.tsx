import Head from "../components/head";
import { Container } from "../components/scaffold";
import HomeAbout from "../components/homeAbout";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head title="Noel Torres - Front-end Designer" />
      <Container>
        <HomeAbout current={router.pathname} />
      </Container>
    </>
  );
}
