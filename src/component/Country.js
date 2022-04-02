import React from "react";
import styles from "./Country.module.css";

const Country = (props) => {
  const language = Object.values(props.language);

  return (
    <div className={styles.country}>
      <section>
        <div className={styles.imgdiv}>
          <img src={props.flag} />
        </div>
        <h3> Country:{props.name}</h3>
        {language.map((lang) => {
          return <span>Language:{lang}</span>;
        })}
        <p>Population:{props.population}</p>
        <p>Capital:{props.capital}</p>
        <p>Region:{props.region}</p>
      </section>
    </div>
  );
};

export default Country;
