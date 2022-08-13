import style from "../styles/Projects.module.css";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <section className={style.projects}>
      <h3 className={style.project__heading}>
        A selection of my favorite works.
      </h3>
      <div className={style.project_card}>
        <div className={style.project__image}>
          <img src="mock.png" alt="" />
        </div>
        <div>
          <h4 className={style.project__title}>Pixellery</h4>
          <p className={style.project__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="#">
            <a className="button" target="_blank">
              Visit website
            </a>
          </Link>
        </div>
      </div>
      <div className={style.project_card}>
        <div className={style.project__image}>
          <img src="mock.png" alt="" />
        </div>
        <div>
          <h4 className={style.project__title}>Pixellery</h4>
          <p className={style.project__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="#">
            <a className="button">Visit website</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
