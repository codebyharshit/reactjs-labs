// import ExpenseItem from './components/ExpenseItem';

// function App() {
//   const expenses = [
//     { title: 'Car Insurance', 
//     amount: 249, 
//     date: new Date(2023, 2 , 28),
//     }, 
//     { title: 'Bike Insurance', 
//     amount: 895, 
//     date: new Date(2023, 2 , 28),
//     }, 
//     { title: 'Truck Insurance', 
//     amount: 349, 
//     date: new Date(2023, 2 , 28),
//     }, 

//   ]
//   return (
//     <div>
//       <h2>Let's get started</h2>
//       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
//       <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
//       <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
//       <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXP = [
  {
    id: 'e1',
    title: 'IPhone 15',
    amount: 1000,
    date: new Date(2023, 7, 23),
  },
  { id: 'e2', title: 'Xiaomi X15', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Samasung Galaxy',
    amount: 700,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'Samsung s23 Ultra',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXP);

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }; 

  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;