import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureBlog from "../components/feature_blogs";
import Contact from "../components/contact";
import Footer from "../components/footer";

import { request, gql } from "graphql-request";
import FeaturedProject from "../components/featuredProject";

export async function getStaticProps() {
  require("dotenv").config();
  const endpoint = `https://api-ap-south-1.hygraph.com/v2/${process.env.KEY}/master`;
  const query = gql`
    query articles {
      blogs(orderBy: id_DESC, first: 2) {
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

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>
          Ashish Jaiswar - automation engineer, full stack developer, tech
          blogger
        </title>
        <meta
          name="description"
          content="Hey, I'm Ashish Jaiswar. I'm a Automation Engineer, Full Stack Developer  and Tech Blogger. Welcome to my corner of the Internet. I'm glad you're here!"
        />
        <meta
          name="keywords"
          content="Ashish Jaiswar, Portfolio, Automation Engineer, Python Developer, Full Stack Developer, Ashish Jaiswar Hashnode,
        Ashish Jaiswar Medium"
        />
        <meta name="author" content="Ashish Jaiswar" />
        <meta
          property="og:title"
          content="Ashish Jaiswar - Automation Engineer, Full Stack Developer"
        />
        <meta
          property="og:description"
          content="I'm Ashish Jaiswar, a Automation Engineer, Full stack developer, with some handson knowledge of DevOps.
          My mission is to build a personal brand, deliver quality work and spread my knowledge."
        />
        <meta name="copyright" content="Ashish Jaiswar"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ashish Jaiswar" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/SEXjfYBTO24sJX05jqTA"
        />
        <meta property="og:url" content="http://ashishjaiswar.com/" />
      </Head>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <FeatureBlog blogs={blogs} />
      <Contact />
      <Footer />
    </>
  );
}
