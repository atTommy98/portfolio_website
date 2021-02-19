import styles from "../styles/index.module.css";
import Nav from "../components/Nav/Nav"
import Intro from "../components/Intro/Intro"
import cn from "classnames"

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className={cn(styles.section1)}>

      </div>
      <Intro></Intro>
      <div className={styles.section2}></div>
      <div className={styles.section3}></div>
      <footer>
        <h3>tommy_holt@icloud.com</h3>
      </footer>
    </>
  );
}
