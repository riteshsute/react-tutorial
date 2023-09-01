function ExpenseItem(props) {
    const ExpenseDate = new Date(2023);
    const ExpenseCategory = 'Food'
    const ExpenseAmount = '1000'
    return ( 
    <div className='expense-item'> 
        {/* <div> {props.Date.toISOString()} </div> */}
        <div className="expense-item_Title">
            <h3> Category: {props.title} </h3>
        </div> 
        <div className="expense-item__amount"> Rs: {props.amount} </div>
        <br>
        </br>
        {/* <div className="expense-item__location"> Place: {props.date} </div> */}
    </div>    
    ) 
}

export default ExpenseItem;

