import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [isValid, setIsValid] = useState(true);
  const [isGoalFocus, setIsGoalFocus] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

<<<<<<< HEAD
  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

=======
>>>>>>> 7fde7f6e9ed81a6798943ceee7391b786a86be80
  const focusGoalHandler = () => {
    setIsGoalFocus(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    if (enteredValue.trim().length === 0 || phoneNumber.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue, phoneNumber); 
=======
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
>>>>>>> 7fde7f6e9ed81a6798943ceee7391b786a86be80
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label>Course Goal</label>
<<<<<<< HEAD
        <input type="text" onChange={goalInputChangeHandler} onBlur={focusGoalHandler} />
        {!isValid && !isGoalFocus && <p className="error_msg">Enter Something</p>}
=======
        <input
          type="text"
          onChange={goalInputChangeHandler}
          onBlur={focusGoalHandler}
        />
        {!isValid && !isGoalFocus && (
          <p className="error_msg">Enter Something</p>
        )}
>>>>>>> 7fde7f6e9ed81a6798943ceee7391b786a86be80
      </div>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label>Phone Number</label>
        <input type="tel" onChange={phoneNumberChangeHandler} />
        {!isValid && !isGoalFocus && <p className="error_msg">Enter Phone Number</p>}
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
