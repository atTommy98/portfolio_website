import Link from "next/link";
import Image from "next/image";
import css from "./Nav.module.css";

export default function Nav() {

  const links = ["Home", "Software", "Music", "Contact"]

  return (
    <nav className={css.nav}>
      <div className={css.linkContainer}>
        {links.map(link => <a className={css.link}>{link}</a>)}
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
          <a href="https://github.com/atTommy98" target="_blank">
            <Image
              className={css.image}
              src="/linkedInLogo.png"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className={css.logoImageContainer}>
          <a href="https://github.com/atTommy98" target="_blank">
            <Image
              className={css.image}
              src="/twitterLogo.png"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
