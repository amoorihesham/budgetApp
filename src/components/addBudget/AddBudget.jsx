import React, { useRef } from "react";
import useAppContext from "../../context/context";

const AddBudget = () => {
  const name = useRef();
  const max = useRef();
  const { addBudget } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget(name.current.value, parseInt(max.current.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="bdgName" className="mb-2">
          Budget Name:
        </label>
        <input
          type="text"
          placeholder="Name of budget"
          className="form-control"
          ref={name}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="bdgAmount" className="mb-2">
          Budget Amount:
        </label>
        <input
          type="number"
          step={1}
          min={1}
          className="form-control"
          ref={max}
          required
        />
      </div>
      <button className="btn btn-success w-100">Add</button>
    </form>
  );
};

export default AddBudget;
