import { useState } from 'react'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.css'
import TableList from './components/TableList';
import Filter from './components/Filter';



function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Arroz', amount: 10.00, category: 'Groceries' },
    { id: 2, description: 'Alicate', amount: 9.00, category: 'Utilities' },
    { id: 3, description: 'The movie Click', amount: 19.00, category: 'Entertainment' },
  ])

  const visibleExpenses = selectedCategory ?
    expenses.filter(expense => expense.category === selectedCategory) :
    expenses

  return (
    <div className="container px-5 my-5" >
      <Form onSubmit={(expense) => setExpenses([...expenses, { id: expenses.length + 1, ...expense }])} />
      <Filter onSelectCategory={(category) => setSelectedCategory(category)} />
      <TableList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(exp => exp.id !== id))} />
    </div>
  )
}

export default App
