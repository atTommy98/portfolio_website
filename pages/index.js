import styles from "../styles/index.module.css";
import Nav from "../components/Nav/Nav"
import Intro from "../components/Intro/Intro"
import Projects from "../components/Projects/Projects"
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer"
import cn from "classnames"

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className={cn(styles.section1)}>
        <Intro></Intro>
      </div>
      <div className={styles.section2}>
        <Projects></Projects>
      </div>
      <div className={styles.section3}>
        <Testimonials></Testimonials>
      </div>
      <div >
        <Footer></Footer>
      </div>
    </>
  );
}
