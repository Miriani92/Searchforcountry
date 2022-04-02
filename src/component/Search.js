import React from "react";
import Input from "./Input";
import Filter from "./Filter";
import styles from "./Search.module.css";
import { useCountriesCtx } from "../store/Store";

const Search = () => {
  const { regions, filterByRegion } = useCountriesCtx();
  const allRegions = regions();

  return (
    <div className={styles.search}>
      <Input />
      <Filter regions={allRegions} filterByRegion={filterByRegion} />
    </div>
  );
};

export default Search;
