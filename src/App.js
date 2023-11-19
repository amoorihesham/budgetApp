import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import TopRow from "./pages/home/Home";
import AddExpense from "./pages/addExpense/AddExpense";
import ViewExpenses from "./pages/viewExpenses/ViewExpenses";
import EditExpense from "./pages/editExpanse/EditExpense";
import ViewAllExpanses from "./pages/viewAllExpanses/ViewAllExpanses";
import AllBudgets from "./pages/viewAllBudgets/AllBudgets";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TopRow />,
  },
  {
    path: "/addexp/:id",
    element: <AddExpense />,
  },
  {
    path: "/viewexp/:id",
    element: <ViewExpenses />,
  },
  {
    path: "/editexp/:id",
    element: <EditExpense />,
  },
  {
    path: "/allbdgs",
    element: <AllBudgets />,
  },
  {
    path: "/allexps",
    element: <ViewAllExpanses />,
  },
]);
function App() {
  return (
    <div className="App py-5">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
