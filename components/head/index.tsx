import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

export default function Head({ title }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Maven+Pro:wght@400;500;600;700&display=swap" />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        //TODO: add in dynamic keyword and description meta tags
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </>
  );
}
