import React from "react";
import { useState, useCallback, useEffect, useContext } from "react";

const URL = "https://restcountries.com/v3.1/all";

const CountryContext = React.createContext();

const CountryContextProvider = (props) => {
  const [filterdRegions, setFilterdRegions] = useState([]);
  const [searchForCountry, setSearchOfThecountry] = useState("");
  const [filterdCountry, setFilterdCountry] = useState([]);
  const [countries, setCounties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (response.ok) {
        const allCountries = await data.map((country) => {
          return {
            language: country.languages,
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            flag: country.flags.svg,
            region: country.subregion,
          };
        });
        setCounties(allCountries);
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
  const search = (name) => {
    setSearchOfThecountry(name);
    const filterdCountry = countries.filter((c) => c.name === name);
    setFilterdCountry(() => filterdCountry);
  };

  const regions = () => {
    const allRegions = countries.map((country) => country.region);
    const filteredRegionsNames = [...new Set(allRegions)];
    return filteredRegionsNames;
  };

  const filterByRegion = (reg) => {
    setFilterdCountry([]);
    const filterdRegions = countries.filter(
      (country) => country.region === reg
    );
    setFilterdRegions(filterdRegions);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        error,
        search,
        filterdCountry,
        regions,
        filterByRegion,
        filterdRegions,
        setLoading,
        setFilterdCountry,
        searchForCountry,
        setFilterdCountry,
        setFilterdRegions,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
export const useCountriesCtx = () => {
  return useContext(CountryContext);
};
export { CountryContext, CountryContextProvider };
