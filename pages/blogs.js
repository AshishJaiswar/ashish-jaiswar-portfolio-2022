import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BlogCard from "../components/blog_card";
import style from "../styles/Blogs.module.css";
import { request, gql } from "graphql-request";

export async function getStaticProps() {
  require("dotenv").config();
  const endpoint = `https://api-ap-south-1.hygraph.com/v2/${process.env.KEY}/master`;
  const query = gql`
    query articles {
      blogs(orderBy: id_DESC) {
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

export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Blog</title>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
