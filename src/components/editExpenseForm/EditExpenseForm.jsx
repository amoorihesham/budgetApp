import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppContext from "../../context/context";

const EditExpenseForm = () => {
  const { id } = useParams();
  const desc = useRef();
  const navigate = useNavigate();
  const amount = useRef();
  const [bdgId, setBdgId] = useState();
  const { expenses, deleteExpanse, addExpense } = useAppContext();
  useEffect(() => {
    const data = expenses.filter((expense) => expense.id === id);
    console.log(data);
    desc.current.value = data[0].description;
    amount.current.value = data[0].cost;
    setBdgId(data[0].budgetId);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteExpanse(id);
    addExpense(bdgId, desc.current.value, parseInt(amount.current.value));
    navigate(`/`);
  };
  return (
    <form className=" bg-body-secondary p-4" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="desc">Description</label>
        <input type="text" className="form-control" ref={desc} />
      </div>
      <div className="form-group">
        <label htmlFor="amount">cost</label>
        <input type="number" min={0} className="form-control" ref={amount} />
      </div>
      <button type="submit" className="btn btn-warning mt-3">
        Edit
      </button>
    </form>
  );
};

export default EditExpenseForm;
