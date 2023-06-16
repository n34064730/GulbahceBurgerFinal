import { useState } from "react";
import "./NameBox.css";

const NameBox = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [validName, setValidName] = useState(true);
  const inputHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const alphabeticRegex = /^[A-Za-z]+$/;
    if (alphabeticRegex.test(enteredInput) && enteredInput.trim().length > 0) {
      setIsSubmit(true);
    } else {
      setValidName(false);
    }
  };

  if (isSubmit) {
    return (
      <form className={"my-form"}>
        <label>Welcome {enteredInput}</label>
      </form>
    );
  } else {
    return (
      <form className={"my-form"} onSubmit={submitHandler}>
        <label>Please enter your name for a personalized experience: </label>
        <input type="text" onChange={inputHandler}></input>
        <button style={{ backgroundColor: validName ? "" : "red" }}>
          Submit
        </button>
      </form>
    );
  }
};
export default NameBox;
