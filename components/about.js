import style from "../styles/Me.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="about__container">
      <h3 className={style.about__heading}>Here's my story.</h3>
      <p>
        I'm Ashish Jaiswar, a <b>Automation Engineer</b>,{" "}
        <b>Full stack developer</b>, with some handson knowledge of{" "}
        <b>DevOps</b>. My mission is to build a personal <b>brand</b>, deliver
        quality work and spread my knowledge to the community. Exploring
        youtube,
        <b>blogging</b> and learing new skills.
      </p>
      <p>
        I'm currently working as a automation enginner at <b>Infosys</b> where i
        create automated script for health checks(web functionality test) and
        processes using <b>python</b> and <b>selenium</b>. I have implemented
        devops pipeline to schedule jobs on daily basis.
      </p>
      <p>Here are a few technologies I've been working:</p>
      <div className="recent__skills">
        <p>
          • Python <br />
          • Selenium <br />
          • DevOps <br />
          • Postman and API's <br />
        </p>
        <p>
          • JavaScript <br />
          • Next.js <br />
          • Power BI <br />
          • SQL Server <br />
        </p>
      </div>
      <p>
        You can find me on{" "}
        <Link href="https://twitter.com/ashishjaiswar_">
          <a target="_blank" className="about__link">
            Twitter
          </a>
        </Link>{" "}
        where I share tech-related tidbits and build in public, or you can
        follow me on{" "}
        <Link href="https://github.com/AshishJaiswar">
          <a target="_blank" className="about__link">
            Github
          </a>
        </Link>{" "}
        . I often write about my findings on my blog
      </p>

      <h5 className="line-break">~~~</h5>
      <div className="work__experience">
        <h3>Work experience</h3>
        <div className="company">
          <p>Infosys</p>
          <span className="space"></span>
          <p>
            Automation Engineer{" "}
            <svg className="cal">
              <use href="sprite.svg#calendar-outline"></use>
            </svg>
            2020 - present
          </p>
        </div>
      </div>
      <Link href="Ashish-Jaiswar-Software-developer-Resume.pdf">
        <a className="button mt-2" target="_blank">
          Resume
        </a>
      </Link>
    </div>
  );
}
