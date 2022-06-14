import React from "react";
import styles from "./Filter.module.css";
import { useState } from "react";
import { useCountriesCtx } from "../store/Store";
import { useDarkContext } from "../store/UI/Darkcontext";

const Filter = (props) => {
  const [selectValue, setSelectValue] = useState("Filter by Region");
  const { filterByRegion } = useCountriesCtx();
  const { dark } = useDarkContext();
  const regions = props.regions.filter((reg) => reg !== undefined);

  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value);
    filterByRegion(e.target.value);
  };
  let darkSelect;
  if (dark) {
    darkSelect = {
      backgroundColor: "#018786",
      color: "white",
      height: "30px",
      padding: "2px",
    };
  } else {
    darkSelect = { height: "30px" };
  }

  return (
    <div>
      <select
        style={darkSelect}
        value={selectValue}
        onChange={selectChangeHandler}
        className={styles.select}
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
