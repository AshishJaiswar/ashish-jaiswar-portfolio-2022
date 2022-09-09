import Head from "next/head";
import style from "../styles/Projects.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectCard from "../components/project_card";
import { request, gql } from "graphql-request";

export async function getStaticProps() {
  require("dotenv").config();
  const endpoint = `https://api-ap-south-1.hygraph.com/v2/${process.env.KEY}/master`;
  const query = gql`
    query projects {
      projects(orderBy: p_id_DESC) {
        p_id
        title
        description
        image {
          url
          height
          width
        }
        link
        createdAt
      }
    }
  `;

  const headers = {
    Authorization: `Bearer ${process.env.TOKEN}`,
  };
  let { projects } = await request({
    url: endpoint,
    document: query,
    requestHeaders: headers,
  });

  return {
    props: { projects },
    revalidate: 10,
  };
}

export default function Project({ projects }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Projects</title>
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
        <h3 className={style.project__heading}>
          A selection of my favorite works.
        </h3>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
