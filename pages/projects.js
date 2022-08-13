import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectCard from "../components/project_card";

export default function Project() {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Projects</title>
      </Head>
      <Navbar />
      <ProjectCard />
      <Footer />
    </>
  );
}
