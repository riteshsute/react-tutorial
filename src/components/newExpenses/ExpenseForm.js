import React from "react";

import './ExpenseForm.css';


const ExpenseForm = () => {

    const onTitleChange = (event) => {
        console.log('Title Changed', event.target.value)
    }
    return (
         <form>
        <div className="expense-controls">
            <div className="expense-control">
                <label> Title </label>
                <input type="text" onChange={onTitleChange} />
            </div>
            <div className="expense-control">
                <label> Amount </label>
                <input number="text" min="0.01" step="0.01"/>
            </div>
            <div className="expense-control">
                <label> Date </label>
                <input type="date" min="2022-01-01" max="2023-12-31"/>
            </div>
            <div className="expense-control_action">
                <button type="submit"> Add Expense </button>
            </div>
        </div>  
    </form>
    )
}


export default ExpenseForm