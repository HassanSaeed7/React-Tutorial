import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onDataFetch}) => {
    const [toggleNewExpense, setToggleNewExpense] = useState(true)

    const saveDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        onDataFetch(data)
        setToggleNewExpense(true)
    }
    const toggleHandler = () => {
      setToggleNewExpense(false)
    }

  return (
    <div className="new-expense">

        {toggleNewExpense ? <button onClick={toggleHandler}>Add New Expense</button> : <ExpenseForm onSaveData={saveDataHandler} toggle={setToggleNewExpense} />}
        
    </div>
  )
}

export default NewExpense