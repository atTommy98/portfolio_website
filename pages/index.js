import styles from "../styles/index.module.css";
import Nav from "components/Nav"
import Intro from "components/Intro"
import Software from "components/Software"
import Music from "components/Music"
import Footer from "components/Footer"
import cn from "classnames"

export default function Home() {
  return (
    <>
      <Nav />
      <div className={cn(styles.section1)}>
        <Intro />
      </div>
      <div className={styles.section2}>
        <Software />
      </div>
      <div className={styles.section3}>
        <Music />
      </div>
      <div >
        <Footer></Footer>
      </div>
    </>
  );
}
