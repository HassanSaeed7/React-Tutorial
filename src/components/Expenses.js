import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const changeHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChange={changeHandler} />

      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
