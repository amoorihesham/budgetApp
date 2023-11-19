import { Link } from "react-router-dom";
import useAppContext from "../../context/context";
import CurrencyFormat from "react-currency-format";
import "./style.css";

const BudgetCard = ({ budget }) => {
  const { expenses, deleteBudget } = useAppContext();

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
    <div className="box p-4 bg-body-tertiary">
      <div className="info d-flex justify-content-between align-items-center">
        <h4>{budget.name}</h4>
        <span>
          <span className="text-primary fw-medium fs-6">
            <CurrencyFormat
              value={totalExpenses(budget.id)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </span>
          <span className="fw-bold fs-4">
            /
            <CurrencyFormat
              value={budget.max}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </span>
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
              (totalExpenses(budget.id) / parseInt(budget.max)) * 100 + "%",
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
  );
};

export default BudgetCard;
