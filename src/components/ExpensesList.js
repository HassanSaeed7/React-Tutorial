import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <h2 className="expenses-list__fallback">No Expenses Found.</h2>;

  if (props.expenses.length === 0) {
    return expensesContent
  }
  return <ul className="expenses-list">
      {props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))}
  </ul>
};

export default ExpensesList;
