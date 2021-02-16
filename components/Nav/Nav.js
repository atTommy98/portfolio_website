import Link from "next/link";
import Image from "next/image";
import css from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={css.nav}>
      <div className={css.logoImageContainer}>
        <Link href="https://github.com/atTommy98">
          <Image
            className={css.image}
            src="/githubLogo.png"
            width={30}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className={css.logoImageContainer}>
        <Link href="https://github.com/atTommy98">
          <Image
            className={css.image}
            src="/linkedInLogo.png"
            width={30}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className={css.logoImageContainer}>
        <Link href="https://github.com/atTommy98">
          <Image
            className={css.image}
            src="/twitterLogo.png"
            width={30}
            height={30}
          ></Image>
        </Link>
      </div>
    </nav>
  );
}
