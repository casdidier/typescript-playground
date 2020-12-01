import * as React from "react";
import "./styles.css";

import { BudgetOverview } from "./BudgetOverview";

const homeBudgets = [
  {
      budgeted: 500,
      spent: 200,
      category: "Food",
  },
  {
      budgeted: 1000,
      spent: 1500,
      category: "Utilities",
  }
]

export default function App() {
  return (
    <div className="App">
      <BudgetOverview budgets={homeBudgets}/>
    </div>
  );
}
