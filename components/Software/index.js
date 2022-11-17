import css from "./Software.module.css";
import { projects } from "constants/data";

export default function Projects() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Software Engineer</h1>
      <div className={css.project_container}>
        {projects.map((project) => {
          return (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
            >
              <div className={css.card}>
                <img src={project.image}></img>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
