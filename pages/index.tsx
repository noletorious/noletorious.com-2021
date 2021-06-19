import Head from "../components/head";
import { Container } from "../components/scaffold";
import HomeAbout from "../components/homeAbout";
import styled from "styled-components";

export default function About() {
  return (
    <>
      <Head title="Noel Torres - Front-end Designer" />
      <Container>
        <HomeAbout />
      </Container>
    </>
  );
}
