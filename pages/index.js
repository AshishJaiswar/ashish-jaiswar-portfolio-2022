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
        <title>Ashish Jaiswar - Home</title>
      </Head>
      <Navbar />
      <Hero />
      <FeatureBlog blogs={blogs} />
      <Contact />
      <Footer />
    </>
  );
}
