import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'  

function ExpenseItem(props) {
    
    // to update the any value we use this kind of structure in react
    const [amount, setamount] = useState(props.amount)

    const clickHandler = () => {
        console.log(amount)
    }


    return ( 
    <div className='expenses'>
        <div className='expense-item'> 
            <ExpenseDate date={props.date}/>
            <div className="expense-item_Title">
                <h3> Category: {props.title} </h3>
            </div> 
            <div className="expense-item__amount"> Rs: {props.amount} </div>
            <br>
            </br>
            <button onClick={clickHandler}> click </button>
        </div>  
    </div>  
    ) 
}

export default ExpenseItem;

