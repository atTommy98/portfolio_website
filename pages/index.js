import styles from "../styles/index.module.css";
import Nav from "components/Nav";
import Intro from "components/Intro";
import Portfolio from "components/Portfolio";
import Footer from "components/Footer";
import cn from "classnames";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <>
      <Nav />
      <div id="section1" className={cn(styles.section1)}>
        <Intro />
      </div>
      <div id="section2" className={styles.section2}>
        <Portfolio />
      </div>
      <div id="section3">
        <Footer scrollRef={scrollRef} />
      </div>
    </>
  );
}
