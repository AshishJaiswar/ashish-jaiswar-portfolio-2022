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
                  <Link href="/" className="footer__link">
                    Home
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/projects" className="footer__link">
                    Projects
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/blogs" className="footer__link">
                    Blog
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/me" className="footer__link">
                    About Me
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
                  <Link
                    href="https://twitter.com/ashishjaiswar_"
                    className="footer__link"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="https://www.linkedin.com/in/ashishjaiswar"
                    className="footer__link"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="https://medium.com/@ashishjaiswar"
                    className="footer__link"
                    target="_blank"
                  >
                    Medium
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="https://ashishjaiswar.hashnode.dev/"
                    className="footer__link"
                    target="_blank"
                  >
                    Hashnode
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="https://github.com/AshishJaiswar"
                    className="footer__link"
                    target="_blank"
                  >
                    Github
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
                  <Link
                    href="http://bit.ly/3SUr9q3"
                    className="footer__link"
                    target="_blank"
                  >
                    Resume
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="https://www.buymeacoffee.com/AshishJaiswar"
                    className="footer__link"
                    target="_blank"
                  >
                    Buy Me Coffee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright__container">
            <h6 className="tech__used">
              Made with <span className="heart">❤️</span> and Next.js
            </h6>
            <p>© 2022 ~ Ashish Jaiswar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
