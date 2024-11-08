import Home from "./components/Home";
import App from "./App";
import CupcakePage from "./components/CupcakePage";
import CupcakeCard from "./components/CupcakeCard";
import CupcakeNewForm from "./components/CupcakeNewForm";
import ErrorPage from "./ErrorPage";

const routes = [{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    }, 
    {
      path: "/cupcakelist",
      element: <CupcakePage />,
      children: [
        {
          path: "/cupcakelist/:id",
          element: <CupcakeCard />,
        }
      ]
    },
    {
      path: "/cupcakenewform",
      element: <CupcakeNewForm />,
    }
  ]
}];

export default routes;