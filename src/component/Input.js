import React from "react";
import styles from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useCountriesCtx } from "../store/Store";
import { useDarkContext } from "../store/UI/Darkcontext";

const Input = () => {
  const inputRef = useRef();
  const { search, setLoading } = useCountriesCtx();
  const { dark } = useDarkContext();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    search(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form
      className={`${styles.input} ${dark ? "inputwrapper" : styles.input}`}
      onSubmit={submitHandler}
    >
      <span className={`${styles.span}${dark ? "darkspan" : styles.span}`}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="string"
        placeholder="Search for Countries"
        ref={inputRef}
        className={`${styles.lightinput} ${
          dark ? "darkinput" : styles.lightinput
        }`}
      ></input>
    </form>
  );
};

export default Input;
