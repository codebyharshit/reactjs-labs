import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
  const nameInputRef = useRef();
  const [enterUserName, setEnterUserName] = useState('')
  const [enterUserAge, setEnterUserAge] = useState('')
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterUserAge, enterUserName);
    if(enterUserAge.trim().length === 0 || enterUserAge.trim().length === 0 ){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age(> 0).'
      });
      return;
    }
    props.onAddUser(enterUserName, enterUserAge);
    setEnterUserName('');
    setEnterUserAge('');
  }

  const userNameHandler = (event) => {
    setEnterUserName(event.target.value);
    console.log(enterUserName);
  }
  
  const userAgeHandler = (event) => {
    setEnterUserAge(event.target.value);
    console.log(enterUserAge);
  } 

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div> 
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label>UserName</label>
            <input id="username" type="text" value={enterUserName} onChange={userNameHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enterUserAge} onChange={userAgeHandler} />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
    </div>
  );
}

export default AddUser;