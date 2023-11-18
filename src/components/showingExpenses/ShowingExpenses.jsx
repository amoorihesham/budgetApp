import { Link } from "react-router-dom";
import useAppContext from "../../context/context";
import "./style.css";
import { useState } from "react";

const ShowingExpenses = () => {
  const { budgets, expenses, addExpense, deleteBudget } = useAppContext();
  const [progress, setProgress] = useState(null);

  const totalExpenses = (budgetId) => {
    let totalExp = expenses.filter((expense) => expense.budgetId === budgetId);

    let totalSpend = 0;

    if (totalExp.length !== 1) {
      let hell = totalExp.reduce((a, b) => a + b.cost, 0);

      totalSpend += hell;
    } else if (totalExp.length === 1) {
      totalSpend = totalExp[0]?.cost;
    } else {
      totalSpend = 0;
    }

    return totalSpend;
  };

  return (
    <div className=" bg-body-tertiary p-3">
      <div className="row g-3">
        {budgets?.map((budget) => (
          <div className="col-md-6" key={budget.id}>
            <div className="box bg-white py-4 px-3 text-left">
              <div className="info d-flex justify-content-between align-items-center">
                <h4>{budget.name}</h4>
                <span>
                  <span className="text-primary fw-medium fs-6">
                    {totalExpenses(budget.id)}$
                  </span>
                  <span className="fw-bold fs-4">/{budget.max}$</span>
                </span>
              </div>
              <div
                className="progress mt-3"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{
                    width:
                      (totalExpenses(budget.id) / parseInt(budget.max)) * 100 +
                      "%",
                  }}
                ></div>
              </div>
              <div className="actions mt-3 d-flex">
                <Link
                  className="btn btn-sm btn-primary me-3"
                  to={`/addexp/${budget.id}`}
                >
                  Add Expense
                </Link>
                <Link
                  className="btn btn-sm btn-primary me-3"
                  to={`/viewexp/${budget.id}`}
                >
                  View Expenses
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteBudget(budget.id)}
                >
                  Delete Budget
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowingExpenses;
