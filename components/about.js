import style from "../styles/Me.module.css";
import Link from "next/link";
import Resume from "./Resume";

export default function About() {
  return (
    <div
      className={`${style.about__container} animate__animated animate__fadeInUp`}
    >
      <h3 className={style.about__heading}>Here&apos;s my story.</h3>
      <p>
        I&apos;m Ashish Jaiswar, a <b>Automation Engineer</b>,&nbsp;
        <b>Full stack developer</b>, with some handson knowledge of&nbsp;
        <b>DevOps</b>. My mission is to build a personal <b>brand</b>, deliver
        quality work and spread my knowledge to the community. Exploring
        youtube,
        <b>blogging</b> and learing new skills.
      </p>
      <p>
        I&apos;m currently working as a Front-End developer at <b>TCS</b> where
        i develop web applications using <b>React</b> and <b>Next.js</b>.
      </p>
      <p>Here are the list technologies I&apos;ve been working on:</p>
      <div className={style.recent__skills}>
        <p>
          • Python <br />
          • Flask <br />
          • Django <br />
          • Selenium <br />
          • JavaScript <br />
          • Next.js <br />
          • React <br />
          • HTML <br />
          • Tailwind CSS <br />
          • MongoDB <br />
          • SQL Server <br />
        </p>
      </div>
      <p>
        You can find me on&nbsp;
        <Link
          href="https://twitter.com/ashishjaiswar_"
          target="_blank"
          className={style.about__link}
        >
          Twitter
        </Link>
        &nbsp; where I share tech-related tidbits and build in public, or you
        can follow me on&nbsp;
        <Link
          href="https://github.com/AshishJaiswar"
          target="_blank"
          className={style.about__link}
        >
          Github
        </Link>
        &nbsp;. I often write about my findings on my blog
      </p>

      <h5 className="line-break">~~~</h5>
      <div className={style.work__experience}>
        <h3>Work experience</h3>
        <div className={style.company}>
          <p>TCS</p>
          <span className={style.space}></span>
          <p>
            Front-End Developer&nbsp;
            <svg className={style.cal}>
              <use href="sprite.svg#calendar-outline"></use>
            </svg>
            2023 - present
          </p>
        </div>
        <div>
          <p className={style.separator}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#606c76"
            >
              <path
                d="M12 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 20.5a.5.5 0 100-1 .5.5 0 000 1zM12 4.5a.5.5 0 100-1 .5.5 0 000 1z"
                fill="#000000"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </p>
        </div>
        <div className={style.company}>
          <p>Infosys</p>
          <span className={style.space}></span>
          <p>
            Automation Engineer&nbsp;
            <svg className={style.cal}>
              <use href="sprite.svg#calendar-outline"></use>
            </svg>
            2020 - 2023
          </p>
        </div>
      </div>
      <Resume className="button mt-2" />
    </div>
  );
}
