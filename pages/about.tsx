import Head from "../components/head";
import { Container } from "../components/scaffold";
import Columns from "../components/columns";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head title="About Noel Torres" />
      <Container>
        <Columns />
      </Container>
    </>
  );
}
