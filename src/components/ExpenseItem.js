function ExpenseItem() {
    const ExpenseDate = new Date(2023);
    const ExpenseCategory = 'Food'
    const ExpenseAmount = '1000'
    const ExpenseLocation = 'Delhi'
    return ( 
    <div className='expense-item'> 
        <div> {ExpenseDate.toISOString()} </div>
        <div className="expense-item_Title">
            <h3> Category: {ExpenseCategory} </h3>
        </div> 
        <div className="expense-item__amount"> Rs: {ExpenseAmount} </div>
        <br>
        </br>
        <div className="expense-item__location"> Place: {ExpenseLocation} </div>
    </div>    
    ) 
}

export default ExpenseItem;

