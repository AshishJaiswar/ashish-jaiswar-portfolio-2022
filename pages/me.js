import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import About from "../components/about";
import FeatureBlog from "../components/feature_blogs";

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

export default function Me({ blogs }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - About Me</title>
      </Head>
      <Navbar />
      <About />
      <h5 className="line-break">~~~</h5>
      <FeatureBlog blogs={blogs} />
      <Footer />
    </>
  );
}
