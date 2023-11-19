import React from "react";
import AddBudget from "../../components/addBudget/AddBudget";
import useAppContext from "../../context/context";
import BudgetCard from "../../components/budgetCard/BudgetCard";
import ActionBtn from "../../components/actionsBtns/ActionBtn";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const Home = () => {
  const { budgets, expenses, deleteRecords } = useAppContext();

  const calcTotal = () => {
    let total;
    if (budgets.length !== 1 && budgets.length !== 0) {
      total = budgets.reduce((a, b) => a + b.max, 0);
    } else if (budgets.length === 1) {
      total = parseInt(budgets[0].max);
    } else {
      total = 0;
    }
    return parseInt(total);
  };
  const calcExpanses = () => {
    let total = 0;
    if (expenses.length !== 1) {
      let hell = expenses.reduce((a, b) => a + b.cost, 0);
      total += hell;
    } else if (expenses.length === 1) {
      total = parseInt(expenses[0].cost);
    } else {
      total = 0;
    }
    return parseInt(total);
  };

  const calcBalance = () => {
    let total = 0;
    let income = calcTotal();
    let spend = calcExpanses();
    total = income - spend;
    if (total <= 0) {
      total = 0;
    }
    return total;
  };

  const deleteAllRecords = (e) => {
    e.preventDefault();
    deleteRecords();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-4">
          <AddBudget />
          <div className="actions-btns mt-5 d-flex gap-3 justify-content-center">
            <Link to={"/allbdgs"}>
              <ActionBtn text={"View All Budgets"} variant={"btn-primary"} />
            </Link>
            <Link to={"/allexps"}>
              <ActionBtn text={"View All Expanses"} variant={"btn-primary"} />
            </Link>
            <Link onClick={deleteAllRecords}>
              <ActionBtn text={"Delete Recordes"} variant={"btn-danger"} />
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="alert alert-success px-3  d-flex align-items-center ">
            <h5 className="me-2">Your Total Budgets:</h5>
            <span className="fw-bold">
              <CurrencyFormat
                value={calcTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
          <div className="alert alert-primary px-3  d-flex align-items-center ">
            <h5 className="me-2">Your Total Balance:</h5>
            <span className="fw-bold">
              <CurrencyFormat
                value={calcBalance()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
          <div className="alert alert-danger px-3  d-flex align-items-center ">
            <h5 className="me-2">Your Total Expenses:</h5>
            <span className="fw-bold">
              <CurrencyFormat
                value={calcExpanses()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="row border-top pt-3 g-3">
        <h2 className="mb-2">Expenses List</h2>

        {budgets.map((budget) => (
          <div className="col-md-4" key={budget.id}>
            <BudgetCard budget={budget} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
