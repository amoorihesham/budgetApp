import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import TopRow from "./pages/home/TopRow";
import AddExpense from "./pages/addExpense/AddExpense";
import ViewExpenses from "./pages/viewExpenses/ViewExpenses";
import EditExpense from "./pages/editExpanse/EditExpense";
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
]);
function App() {
  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
