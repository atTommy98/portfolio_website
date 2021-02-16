import styles from "../styles/index.module.css";
import Nav from "../components/Nav/Nav"

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className={styles.section1}></div>
      <div className={styles.section2}></div>
      <div className={styles.section3}></div>
      <footer>
        <h3>tommy_holt@icloud.com</h3>
      </footer>
    </>
  );
}
