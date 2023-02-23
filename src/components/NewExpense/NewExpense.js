import React from 'react';
import './NewExpense.css';
import ExepenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

 return (
    <div className = "new-expense">
    <ExepenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;