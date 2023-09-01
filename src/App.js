import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
      date: new Date(2023, 3, 12)
    },
    {
      id: 'e3',
      title: 'Travel',
      amount: 10000,
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
        <h1> ExpenseItems </h1>
      {/* <ExpenseItem> </ExpenseItem> */}
        {expenseItems}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
