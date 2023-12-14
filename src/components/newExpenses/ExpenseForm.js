import React, { useState } from "react";

import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [ enteredTitle, setEnteredTitle ] = useState(' ');

    const [ enteredAmount, setEnteredAmount ] = useState('');

    const [ enteredDate, setDateAmount ] = useState('');

    const onTitleChange = (event) => {
        console.log('Title Changed', event.target.value)
        setEnteredTitle(event.target.value)
    }

    const onAmountChange = (event) => {
        setEnteredAmount(event.target.value)
    }

    const onDateChange = (event) => {
        setDateAmount(event.target.value)
    }

    const submitHadler = (event) => {
        event.preventDefault();

        const expenseData = {
            Title: enteredTitle,
            Amount: enteredAmount,
            Date: new Date(enteredDate)
        }

        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setDateAmount('');
    } 
    
    return (
         <form onSubmit={ submitHadler }>
        <div className="expense-controls">
            <div className="expense-control">
                <label> Title </label>
                <input type="text" value={enteredTitle} onChange={onTitleChange} />
            </div>
            <div className="expense-control">
                <label> Amount </label>
                <input number="text"  value={enteredAmount}  onChange={onAmountChange} min="0.01" step="0.01"/>
            </div>
            <div className="expense-control">
                <label> Date </label>
                <input type="date" value={enteredDate}  onChange={onDateChange} min="2022-01-01" max="2023-12-31"/>
            </div>
            <div className="expense-control_action">
                <button type="submit"> Add Expense </button>
            </div>
        </div>   
    </form> 
    ) 
}


export default ExpenseForm