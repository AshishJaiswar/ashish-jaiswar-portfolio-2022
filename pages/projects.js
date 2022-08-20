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
  };
}

export default function Project({ projects }) {
  return (
    <>
      <Head>
        <title>Ashish Jaiswar - Projects</title>
      </Head>
      <Navbar />
      <div className="mt-2">
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
