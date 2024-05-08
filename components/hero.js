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
                I&apos;m <span className="highlight">Ashish Jaiswar</span>.
                I&apos;m a Full Stack developer.
              </h2>
              <ul className="lists hero__social">
                <li className="hero__social--item">
                  <Link
                    href="https://twitter.com/ashishjaiswar_"
                    className="hero__social--link twitter"
                    target="_blank"
                  >
                    Twitter
                    <svg className="icon--twitter">
                      <use href="/sprite.svg#twitter"></use>
                    </svg>
                  </Link>
                </li>
                <li className="hero__social--item">
                  <Link
                    href="https://github.com/AshishJaiswar"
                    className="hero__social--link github"
                    target="_blank"
                  >
                    Github
                    <svg className="icon--github">
                      <use href="/sprite.svg#github"></use>
                    </svg>
                  </Link>
                </li>
                <li className="hero__social--item">
                  <Link
                    href="https://www.linkedin.com/in/ashishjaiswar"
                    className="hero__social--link linked-in"
                    target="_blank"
                  >
                    LinkedIn
                    <svg className="icon--linked-in">
                      <use href="/sprite.svg#linkedin"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
              <div className="button__container">
                <Link href="/projects" className="button mr-4">
                  Projects
                </Link>
                <Link href="/me" className="button button-outline ml-4">
                  About Me
                </Link>
              </div>
            </div>
          </div>
          <div className="column column-25 animate__animated animate__fadeInRight">
            <div className="hero__image hvr-outline-out">
              <Image
                className="hero__image--profile"
                width={300}
                height={250}
                src="/ashish-jaiswar.png"
                alt="Ashish Jaiswar Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
