import React from "react";
import styles from "./Countries.module.css";
import Country from "./Country";

import { useCountriesCtx } from "../store/Store";
const Countries = () => {
  const {
    countries,
    filterdCountry,
    filterdRegions,
    searchForCountry,
    setFilterdRegions,
    error,
  } = useCountriesCtx();

  let someOfTheCountries = countries.slice(0, 15);

  if (filterdCountry.length > 0) {
    someOfTheCountries = filterdCountry;
    setFilterdRegions("");
  }

  if (filterdRegions.length !== 0) {
    someOfTheCountries = filterdRegions;
  }

  if (
    searchForCountry.length > 0 &&
    filterdCountry.length === 0 &&
    filterdRegions.length === 0
  ) {
    return <p>there is no match</p>;
  }

  return (
    <div>
      <div className={styles.countriswrapper}>
        {!error &&
          someOfTheCountries.map((country, index) => {
            const { name, population, language, flag } = country;

            return (
              <Country
                key={index}
                name={name}
                language={language}
                flag={flag}
                population={population}
                capital={country.capital ? country.capital[0] : null}
                region={country.region}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
