import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onDataFetch}) => {

    const saveDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        onDataFetch(data)
    }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  )
}

export default NewExpense