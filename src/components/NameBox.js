import { useState } from "react";
import classes from "./NameBox.module.css";

const NameBox = () => {
  const [isSubmit, setIsSubmit] = useState(localStorage.getItem("login"));
  const [enteredInput, setEnteredInput] = useState(
    localStorage.getItem("name")
  );
  const [validName, setValidName] = useState(true);
  const inputHandler = (event) => {
    setEnteredInput(event.target.value);
    localStorage.setItem("name", event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const alphabeticRegex = /^[A-Za-z]+$/;
    if (alphabeticRegex.test(enteredInput) && enteredInput.trim().length > 0) {
      setIsSubmit(true);
      localStorage.setItem("login", true);
    } else {
      setValidName(false);
    }
  };

  if (isSubmit) {
    return (
      <form className={classes["my-form"]}>
        <label>Welcome {enteredInput}</label>
      </form>
    );
  } else {
    return (
      <form className={classes["my-form"]} onSubmit={submitHandler}>
        <label className={classes.lbl}>
          Please enter your name for a personalized experience:{" "}
        </label>
        <input type="text" onChange={inputHandler}></input>
        <button style={{ backgroundColor: validName ? "" : "red" }}>
          Submit
        </button>
      </form>
    );
  }
};
export default NameBox;
