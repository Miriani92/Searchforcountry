import React from "react";
import styles from "./Header.module.css";
import DarkmodeToggle from "../store/UI/DarkmodeToggle";
import { useDarkContext } from "../store/UI/Darkcontext";

const Header = () => {
  const { dark } = useDarkContext();
  return (
    <main className={`${styles.header} ${dark ? "darkheader" : styles.header}`}>
      <section className={styles.headerwrapper}>
        <h1>Countries of the World</h1>
        <DarkmodeToggle />
      </section>
    </main>
  );
};

export default Header;
