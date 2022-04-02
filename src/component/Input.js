import React from "react";
import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useCountriesCtx } from "../store/Store";

const Input = () => {
  const inputRef = useRef();
  const { search, setLoading } = useCountriesCtx();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    search(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="string"
        placeholder="Search for Countries"
        ref={inputRef}
      ></input>
    </form>
  );
};

export default Input;
