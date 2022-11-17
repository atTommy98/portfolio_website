import css from "./Intro.module.css";
import cn from "classnames";

export default function Intro() {
  return (
    <div className={css.intro_container}>
      <div className={css.text_container}>
        <h1 className={cn(css.header)}>What's up? <span className={css.name}>Tommy Holt</span> here.</h1>
        <h1 className={cn(css.tagline)}>Nice to see you</h1>
      </div>
    </div>
  );
}
