import React, {useState} from "react";
import './ExpenseForm.css';

const ExepenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={title} type='text' onChange={titleHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={amount} type="number" min="0.01" step="0.01" onChange={amountHandler} /> 
            </div> 
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={date} type='date' min= "2020-01-01" max="2024-12-31" onChange={dateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExepenseForm;