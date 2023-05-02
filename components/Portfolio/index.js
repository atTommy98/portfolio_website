import css from "./Software.module.css";
import { projects } from "data/data";

export default function Portfolio() {
  return (
    <div className={css.container}>
      <div className={css.header_container}>
        <h1 className={css.header}>CHECK OUT MY PROJECTS</h1>
      </div>
      <div className={css.project_container}>
        {projects.map((project) => {
          return (
            <a
              className={css.card}
              href={project.link}
              key={project.image}
              target="_blank"
            >
              <img src={project.image}></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}
