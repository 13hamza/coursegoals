import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from"./CourseInput.modules.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Step 2
  const [isValid, setIsValid] = useState(true);
  const [isGoalFocus, setIsGoalFocus] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value); // Step 4
  };

  const focusGoalHandler = () => {
    setIsGoalFocus(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || phoneNumber.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue, phoneNumber); // Step 5
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={'${styles["form-control"]}${!isValid &&"styles.invalid"} '}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} onBlur={focusGoalHandler} />
        {!isValid && !isGoalFocus && <p className="error_msg">Enter Something</p>}
      </div> 
           <div className={styles["form-control"]}>
        <label>Phone Number</label>
        <input type="tel" onChange={phoneNumberChangeHandler} />
        {!isValid && !isGoalFocus && <p className="error_msg">Enter Phone Number</p>}
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
