import React from "react";
import styles from "./Filter.module.css";
import { useState } from "react";
import { useCountriesCtx } from "../store/Store";

const Filter = (props) => {
  const [selectValue, setSelectValue] = useState("Filter by Region");
  const { filterByRegion } = useCountriesCtx();
  const regions = props.regions.filter((reg) => reg !== undefined);

  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value);
    filterByRegion(e.target.value);
  };

  return (
    <div>
      <select
        className={styles.select}
        value={selectValue}
        onChange={selectChangeHandler}
      >
        <option className={styles.firstoption} value={`Filter by Region`}>
          Filter by Region
        </option>
        {regions.map((reg, index) => {
          return (
            <option key={index} value={reg} onSelect={selectChangeHandler}>
              {reg}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
