import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseForm from './components/newExpenses/ExpenseForm';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      amount: 2000,
      date: new Date(2023, 2, 23)
    },
    {
      id: 'e2',
      title: 'Movie',
      amount: 5000,
      date: new Date(2023, 2, 12)
    },
    {
      id: 'e3',
      title: 'Travel',
      amount: 8000,
      date: new Date(2023, 2, 25)
    }
  ]

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseForm />
      {/* <ExpenseItem> </ExpenseItem> */}
        {expenseItems}
        
      </header>
    </div>
  );
}

export default App;
