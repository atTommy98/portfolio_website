import Image from "next/image";
import { useRef } from "react";
import css from "./Nav.module.css";

export default function Nav({ scrollRef }) {
  const links = [
    { name: "Home", section: "section1" },
    { name: "Software", section: "section2" },
    { name: "Contact", section: "section3" },
  ];

  return (
    <nav className={css.nav}>
      <div className={css.linkContainer}>
        {links.map((link) => (
          <p className={css.link}>{link.name}</p>
        ))}
      </div>
      <div className={css.socialsContainer}>
        <div className={css.logoImageContainer}>
          <a href="https://github.com/atTommy98" target="_blank">
            <Image
              className={css.image}
              src="/githubLogo.png"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className={css.logoImageContainer}>
          <a href="https://www.linkedin.com/in/tommy-holt98/" target="_blank">
            <Image
              className={css.image}
              src="/linkedInLogo.png"
              width={30}
              height={30}
            />
          </a>
        </div>
        {/* <div className={css.logoImageContainer}>
          <a href="https://github.com/atTommy98" target="_blank">
            <Image
              className={css.image}
              src="/twitterLogo.png"
              width={30}
              height={30}
            />
          </a>
        </div> */}
      </div>
    </nav>
  );
}
