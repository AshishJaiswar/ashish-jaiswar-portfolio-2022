import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureBlog from "../components/feature_blogs";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Home</title>
      </Head>
      <Navbar />
      <Hero />
      <FeatureBlog />
      <Contact />
      <Footer />
    </>
  );
}
