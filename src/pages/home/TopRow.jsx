import React from "react";
import AddBudget from "../../components/addBudget/AddBudget";
import ShowingExpenses from "../../components/showingExpenses/ShowingExpenses";
import useAppContext from "../../context/context";

const TopRow = () => {
  const { budgets, expenses } = useAppContext();

  const calcTotal = () => {
    let total;
    if (budgets.length !== 1 && budgets.length !== 0) {
      total = budgets.reduce((a, b) => Number(a.max) + Number(b.max));
    } else if (budgets.length === 1) {
      total = budgets[0].max;
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

  return (
    <>
      <div className="row py-4 border-bottom">
        <div className="col-md-5">
          <div className="row g-4">
            <div className="col-md-12">
              <AddBudget />
            </div>
            <div className="col-md-12">
              <div className="alert alert-success px-3  d-flex align-items-center ">
                <h5 className="me-2">Your Total Budgets:</h5>
                <span className="fw-bold">{calcTotal()}$</span>
              </div>
              <div className="alert alert-primary px-3  d-flex align-items-center ">
                <h5 className="me-2">Your Total Balance:</h5>
                <span className="fw-bold">{calcBalance()}$</span>
              </div>
              <div className="alert alert-danger px-3  d-flex align-items-center ">
                <h5 className="me-2">Your Total Expenses:</h5>
                <span className="fw-bold">{calcExpanses()}$</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <ShowingExpenses />
        </div>
      </div>
    </>
  );
};

export default TopRow;
