import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar({}) {
  const router = useRouter();
  const isActive = (route) => {
    if (route == router.pathname) return "active";
    else return "";
  };

  useEffect(() => {
    let mode = localStorage.getItem("theme");
    const root = document.querySelector(":root");
    if (mode == "dark") {
      root.style.setProperty("--primary-white", "#1a1a1a");
      root.style.setProperty("--primary-dark", "#f9f9f9");
      root.style.setProperty("--box-shadow", "rgba(255, 255, 255, 0.25)");
    } else {
      root.style.setProperty("--primary-white", "#f9f9f9");
      root.style.setProperty("--primary-dark", "#1a1a1a");
      root.style.setProperty("--box-shadow", "rgba(59, 59, 59, 0.25)");
    }
  });

  function getMode() {
    let mode = localStorage.getItem("theme");
    const root = document.querySelector(":root");
    if (mode == "light" || mode == null) {
      root.style.setProperty("--primary-white", "#1a1a1a");
      root.style.setProperty("--primary-dark", "#f9f9f9");
      root.style.setProperty("--box-shadow", "rgba(255, 255, 255, 0.25)");
      root.style.setProperty("--image-bg", "#484a51");
      localStorage.setItem("theme", "dark");
    } else {
      root.style.setProperty("--primary-white", "#f9f9f9");
      root.style.setProperty("--primary-dark", "#1a1a1a");
      root.style.setProperty("--box-shadow", "rgba(59, 59, 59, 0.25)");
      root.style.setProperty("--image-bg", "#ebebeb");
      localStorage.setItem("theme", "light");
    }
  }

  function toogleMenu() {
    const nav_list = document.querySelector(".nav__list");
    const collapsible_menu = document.querySelector(".icon-menu");
    const close_menu = document.querySelector(".icon-close");
    nav_list.classList.add("collapse--expand");
    close_menu.classList.remove("hide");
    collapsible_menu.classList.add("hide");
  }

  function closeMenu() {
    const nav_list = document.querySelector(".nav__list");
    const collapsible_menu = document.querySelector(".icon-menu");
    const close_menu = document.querySelector(".icon-close");
    nav_list.classList.remove("collapse--expand");
    close_menu.classList.add("hide");
    collapsible_menu.classList.remove("hide");
  }

  return (
    <>
      <header>
        <nav className="nav">
          <Link href="/">
            <svg className="nav__logo">
              <use href="/sprite.svg#ashish-jaiswar-logo"></use>
            </svg>
          </Link>
          <ul className="lists nav__list">
            <li className="nav__item">
              <Link href="/">
                <a className={`nav__link ${isActive("/")}`}>Home</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/projects">
                <a className={`nav__link ${isActive("/projects")}`}>Projects</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/blogs">
                <a className={`nav__link ${isActive("/blogs")}`}>Blog</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="http://bit.ly/3SUr9q3">
                <a className="nav__link" target="_blank">
                  Resume
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/me">
                <a className={`nav__link ${isActive("/me")}`}>About me</a>
              </Link>
            </li>
          </ul>
          <div className="nav__mode">
            <svg className={`icon icon-dark`} onClick={getMode}>
              <use href="/sprite.svg#contrast-outline"></use>
            </svg>
          </div>
          <div className="nav__menu">
            <svg className="icon icon-menu" onClick={toogleMenu}>
              <use href="/sprite.svg#menu"></use>
            </svg>
            <svg className="icon icon-close hide" onClick={closeMenu}>
              <use href="/sprite.svg#Close"></use>
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}
