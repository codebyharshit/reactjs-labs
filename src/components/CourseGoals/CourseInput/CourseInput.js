import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState('');

  const goalInputChangeHandler = event => {
    event.target.value.trim().length > 0 ? setIsValid(true) : setIsValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ""}`}>
        <label>Course Goal</label>
        <input style={{ borderColor : !isValid ? 'red' : 'black' , background: !isValid ? 'salmon' : "" }} type="text" onChange={goalInputChangeHandler} />
        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ borderColor : !isValid ? 'red' : 'black' , background: !isValid ? 'salmon' : "" }} type="text" onChange={goalInputChangeHandler} /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
