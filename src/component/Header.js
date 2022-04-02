import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <main className={styles.header}>
      <section className={styles.headerwrapper}>
        <div>Countries of the World</div>
        <span>
          <FontAwesomeIcon icon={faMoon} />
          Dark Mode
        </span>
      </section>
    </main>
  );
};

export default Header;
