import css from "./Intro.module.css";
import cn from "classnames";

export default function Intro() {
  return (
    <div className={cn(css.intro_background)}>
      <div className={cn(css.topbar)}>
        <a className={cn(css.text)}>LOGO</a>
        <a className={cn(css.text)}>CONTACT</a>
      </div>
      <div className={css.intro_container}>
        <div className={css.text_container}>
          <h1 className={cn(css.text, css.header)}>Hello there! I'm Tommy Holt.</h1>
          <h3 className={cn(css.text, css.tagline)}>Full-Stack Developer</h3>
          <div>
            <h3 className={cn(css.text, css.details)}>React, Node.js</h3>
            <h3 className={cn(css.text, css.details)}>
              Keen interest in AI and full-stack roles
            </h3>
            <h3 className={cn(css.text, css.details)}>
              Check out my projects below!
            </h3>
          </div>
        </div>
        <div className={cn(css.profile_picture_container)}>
          <img className={cn(css.profile_picture)} src="/images/me.jpg"></img>
        </div>
      </div>
    </div>
  );
}
