import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppContext from "../../context/context";

const AddExpenseForm = () => {
  const desc = useRef();
  const bdgCate = useRef();
  const amount = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const { addExpense } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(id, desc.current.value, parseInt(amount.current.value));
    navigate("/");
  };
  return (
    <form className="w-75 bg-body-secondary p-4" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="desc" className="mb-2">
          Expense Description:
        </label>
        <input
          type="text"
          id="desc"
          placeholder="short description"
          className="form-control"
          ref={desc}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount" className="mb-2">
          Expense Amount:
        </label>
        <input
          type="number"
          min={0}
          step={1}
          className="form-control"
          id="amount"
          ref={amount}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-25 d-block m-auto">
        Add
      </button>
    </form>
  );
};

export default AddExpenseForm;
