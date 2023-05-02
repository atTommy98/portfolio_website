import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer_container}>
      <h4>
        Contact me:{" "}
        <a href="mailto: tommy_holt@icloud.com">tommy_holt@icloud.com</a>
      </h4>
    </footer>
  );
}
