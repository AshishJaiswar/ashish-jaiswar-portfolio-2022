import style from "../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <section className={style.projects}>
      <div className={style.project_card}>
        <div className={style.project__image}>
          <Image
            src={image.url}
            width={1000}
            height={400}
            alt="Project image within a mock device"
          />
        </div>
        <div className={style.project__details}>
          <h4 className={style.project__title}>{title}</h4>
          <p className={style.project__desc}>{description}</p>
          <Link href={link} className="button" target="_blank">
            Visit website
          </Link>
        </div>
      </div>
    </section>
  );
}
