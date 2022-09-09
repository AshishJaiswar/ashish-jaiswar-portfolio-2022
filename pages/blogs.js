import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BlogCard from "../components/blog_card";
import style from "../styles/Blogs.module.css";
import { request, gql } from "graphql-request";
import Link from "next/link";

export async function getStaticProps() {
  require("dotenv").config();
  const endpoint = `https://api-ap-south-1.hygraph.com/v2/${process.env.KEY}/master`;
  const query = gql`
    query articles {
      blogs(orderBy: id_DESC, first: 5) {
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

export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Blog</title>
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
      <div className="mt-2 animate__animated animate__fadeInUp">
        <h3 className={style.blogs__heading}>
          Insightful and helpful content curated for you.
        </h3>
        <div className={style.blogs}>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              link={blog.link}
              createdAt={blog.createdAt}
            />
          ))}
          <Link href="https://ashishjaiswar.hashnode.dev">
            <a className={`button button-outline ${style.all_article}`}>
              See All Articles
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
