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
    revalidate: 10,
  };
}

export default function Me({ blogs }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - About Me</title>
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
        <meta property="og:site_name" content="Ashish Jaiswar" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/SEXjfYBTO24sJX05jqTA"
        />
        <meta property="og:url" content="http://ashishjaiswar.com/" />
      </Head>
      <Navbar />
      <About />
      <h5 className="line-break">~~~</h5>
      <FeatureBlog blogs={blogs} />
      <Footer />
    </>
  );
}
