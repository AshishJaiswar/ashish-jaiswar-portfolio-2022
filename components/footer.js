import Link from "next/link";

export default function Footer() {
  function toogleFooterMenu(id) {
    if (id == "general") {
      const menu = document.getElementById(id);
      menu.classList.toggle("collapse__shrink");
    }
    if (id == "social") {
      const menu = document.getElementById(id);
      menu.classList.toggle("collapse__shrink");
    }
    if (id == "extra") {
      const menu = document.getElementById(id);
      menu.classList.toggle("collapse__shrink");
    }
  }
  return (
    <footer>
      <div className="footer">
        <div className="row footer__grid">
          <div className="column-25">
            <div
              id="general"
              className="footer__box collapsible"
              onClick={() => toogleFooterMenu("general")}
            >
              <div className="footer__heading">
                <h5 className="footer__heading--title">General</h5>
                <svg className="icon collapse__chev">
                  <use href="sprite.svg#circle_chev_right"></use>
                </svg>
              </div>
              <ul className="lists collapse__content">
                <li className="footer__item">
                  <Link href="/">
                    <a className="footer__link">Home</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/projects">
                    <a className="footer__link">Projects</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/blogs">
                    <a className="footer__link">Blog</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/me">
                    <a className="footer__link">About Me</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column-25">
            <div
              id="social"
              className="footer__box collapsible"
              onClick={() => toogleFooterMenu("social")}
            >
              <div className="footer__heading">
                <h5 className="footer__heading--title">Social</h5>
                <svg className="icon collapse__chev">
                  <use href="sprite.svg#circle_chev_right"></use>
                </svg>
              </div>
              <ul className="lists collapse__content">
                <li className="footer__item">
                  <Link href="https://twitter.com/ashishjaiswar_">
                    <a className="footer__link" target="_blank">
                      Twitter
                    </a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="https://www.linkedin.com/in/ashishjaiswar">
                    <a className="footer__link" target="_blank">
                      LinkedIn
                    </a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="https://medium.com/@ashishjaiswar">
                    <a className="footer__link" target="_blank">
                      Medium
                    </a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="https://ashishjaiswar.hashnode.dev/">
                    <a className="footer__link" target="_blank">
                      Hashnode
                    </a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="https://github.com/AshishJaiswar">
                    <a className="footer__link" target="_blank">
                      Github
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column-25">
            <div
              id="extra"
              className="footer__box collapsible"
              onClick={() => toogleFooterMenu("extra")}
            >
              <div className="footer__heading">
                <h5 className="footer__heading--title">Extra</h5>
                <svg className="icon collapse__chev">
                  <use href="sprite.svg#circle_chev_right"></use>
                </svg>
              </div>
              <ul className="lists collapse__content">
                <li className="footer__item">
                  <Link href="Ashish-Jaiswar-Software-developer-Resume.pdf">
                    <a className="footer__link" target="_blank">
                      Resume
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright__container">
            <h6 className="tech__used">Made with ❤️ and Next.js</h6>
            <p>©Copyright Ashish Jaiswar - 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
