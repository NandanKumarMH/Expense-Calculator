import React, { useState } from "react";
import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditting, setIsEditing] = useState(false);

  function SaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEdittingHandler() {
    setIsEditing(true);
  }

  function stopEdittingHandler() {
    setIsEditing(false);
  }


  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
