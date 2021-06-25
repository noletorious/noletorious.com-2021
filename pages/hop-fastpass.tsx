import Image from "next/image";
import { Container } from "../components/scaffold";
import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "../components/head";
import Columns from "../components/columns";

export default function trimetPage() {
  return (
    <>
      <Head title="Hop Fastpass - Noel Torres" />
      <Container>
        <Columns />
      </Container>
    </>
  );
}
