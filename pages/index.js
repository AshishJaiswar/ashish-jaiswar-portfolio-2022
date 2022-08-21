import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureBlog from "../components/feature_blogs";
import Contact from "../components/contact";
import Footer from "../components/footer";

import { request, gql } from "graphql-request";

export async function getStaticProps() {
  require("dotenv").config();
  const endpoint = `https://api-ap-south-1.hygraph.com/v2/${process.env.KEY}/master`;
  const query = gql`
    query articles {
      blogs(orderBy: id_DESC, first: 3) {
        title
        image {
          url
          width
          height
        }
        link
        createdAt
      }
    }
  `;

  const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`,
  };
  let { blogs } = await request({
    url: endpoint,
    document: query,
    requestHeaders: headers,
  });
  return {
    props: { blogs },
  };
}

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>
          Ashish Jaiswar - full stack developer, automation engineer, content
          writer.
        </title>
        <meta
          name="description"
          content="I'm Ashish. I'm a full stack developer, automation engineer and blogger. Welcome to my corner of the internet. I'm glad you're here!"
        />
        <meta
          property="og:title"
          content="Ashish Jaiswar - full stack developer, automation engineer, content"
        />
        <meta
          property="og:description"
          content="I'm Ashish. I'm a full stack developer, automation engineer and blogger. Welcome to my corner of the internet. I'm glad you're here!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1Qp5PTXyt0sxwEAiqKEvwe7u1diXXoLyy/view?usp=sharing"
        />
        <meta property="og:url" content="" />
      </Head>
      <Navbar />
      <Hero />
      <FeatureBlog blogs={blogs} />
      <Contact />
      <Footer />
    </>
  );
}
