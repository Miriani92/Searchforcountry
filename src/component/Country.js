import React from "react";
import styles from "./Country.module.css";

const Country = (props) => {
  const language = Object.values(props.language);

  return (
    <div className={styles.country}>
      <section>
        <div className={styles.imgdiv}>
          <img src={props.flag} className={styles.img} />
        </div>
        <h3> Country:{props.name}</h3>
        <span>
          Language:
          {language.map((lang, index) => {
            return <span key={index}>{`${lang}, `}</span>;
          })}
        </span>
        <p>Population:{props.population}</p>
        <p>Capital:{props.capital}</p>
        <p>Region:{props.region}</p>
      </section>
    </div>
  );
};

export default Country;
