import React from "react";

const ActionBtn = ({ text, variant }) => {
  return <button className={`btn ${variant}`}>{text}</button>;
};

export default ActionBtn;
