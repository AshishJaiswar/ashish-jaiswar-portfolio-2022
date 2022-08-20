import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="column column-60 animate__animated animate__fadeInLeft">
            <div className="hero">
              <h2 className="hero__title">
                I'm <span className="highlight">Ashish Jaiswar</span>. I'm a
                Full Stack developer, Automation Engineer.
              </h2>
              <ul className="lists hero__social">
                <li className="hero__social--item">
                  <Link href="https://twitter.com/ashishjaiswar_">
                    <a className="hero__social--link twitter" target="_blank">
                      Twitter
                      <svg className="icon--twitter">
                        <use href="/sprite.svg#twitter"></use>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className="hero__social--item">
                  <Link href="https://github.com/AshishJaiswar">
                    <a className="hero__social--link github" target="_blank">
                      Github
                      <svg className="icon--github">
                        <use href="/sprite.svg#github"></use>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li className="hero__social--item">
                  <Link href="https://www.linkedin.com/in/ashishjaiswar">
                    <a className="hero__social--link linked-in" target="_blank">
                      LinkedIn
                      <svg className="icon--linked-in">
                        <use href="/sprite.svg#linkedin"></use>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="button__container">
                <Link href="/projects">
                  <a className="button mr-4">Projects</a>
                </Link>
                <Link href="/me">
                  <a className="button button-outline ml-4">About Me</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="column column-25 animate__animated animate__fadeInRight">
            <div className="hero__image hvr-outline-out">
              <Image
                className="hero__image--profile"
                height="612px"
                width="612px"
                src="/ashish_jaiswar_profile-pic.png"
                alt="Ashish Jaiswar Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
