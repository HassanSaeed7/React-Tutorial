import React from 'react'
import Card from './Card'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('first')
  }

    
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price"><h2>${props.amount}</h2></div>
        </div>
        <button onclick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem