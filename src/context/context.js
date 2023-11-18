import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addBudget = (name, max) => {
    setBudgets((prevState) => {
      if (prevState.find((budget) => budget.name === name)) {
        return prevState;
      }
      return [...prevState, { id: uuidv4(), name, max }];
    });
  };
  const addExpense = (budgetId, description, cost) => {
    setExpenses((prevState) => {
      return [...prevState, { id: uuidv4(), budgetId, description, cost }];
    });
  };
  const getBudgetExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  };
  const deleteBudget = (budgetId) => {
    setBudgets((budgets) => budgets.filter((budget) => budget.id !== budgetId));
    setExpenses((expanses) => expanses.filter((expanse) => expanse.budgetId !== budgetId));
  };
  const deleteExpanse = (expanseId) => {
    setExpenses((expanses) =>
      expanses.filter((expanse) => expanse.id !== expanseId)
    );
  };
  const editExpense = (expId, description, amount) => {
    let expData = expenses.filter((expenes) => expenes.id !== expId);
    expData = { ...expData, description, amount };
    setExpenses((prevState) => {
      return [...prevState, {}];
    });
  };
  return (
    <AppContext.Provider
      value={{
        budgets,
        expenses,
        addBudget,
        addExpense,
        getBudgetExpenses,
        deleteBudget,
        editExpense,
        deleteExpanse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;

const useLocalStorage = (key, defalutValue) => {
  const [value, setValue] = useState(() => {
    const checkValue = localStorage.getItem(key);
    if (checkValue != null) {
      return JSON.parse(checkValue);
    }
    if (typeof defalutValue == "function") {
      return defalutValue();
    } else {
      return defalutValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, defalutValue]);
  return [value, setValue];
};
