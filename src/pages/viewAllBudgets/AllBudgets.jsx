import React from "react";
import useAppContext from "../../context/context";
import CurrencyFormat from "react-currency-format";

const AllBudgets = () => {
  const { budgets, deleteBudget } = useAppContext();
  return (
    <div className="bdgsPage py-4">
      <div className="container">
        <div className="row">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Max Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {budgets?.map((budget) => (
                <tr key={budget.id}>
                  <th>{budget.name}</th>
                  <th>
                    <CurrencyFormat
                      value={budget.max}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </th>
                  <th>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => deleteBudget(budget.id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBudgets;
