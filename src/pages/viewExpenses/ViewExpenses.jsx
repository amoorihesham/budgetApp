import React from "react";
import { Link, useParams } from "react-router-dom";
import useAppContext from "../../context/context";
import CurrencyFormat from "react-currency-format";

const ViewExpenses = () => {
  const { id } = useParams();
  const { getBudgetExpenses, deleteExpanse } = useAppContext();

  const epxpenses = getBudgetExpenses(id);

  return (
    <div className="expPage py-4">
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {epxpenses?.map((expense) => (
                <tr key={expense.id}>
                  <th>{expense.description}</th>
                  <th>
                    <CurrencyFormat
                      value={expense.cost}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </th>
                  <th>
                    <Link
                      className="btn btn-sm btn-warning"
                      to={`/editexp/${expense.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => deleteExpanse(expense.id)}
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

export default ViewExpenses;
