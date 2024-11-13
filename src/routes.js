import Home from "./components/Home";
import App from "./App";
import CupcakeList from "./components/CupcakeList";
import CupcakeDetails from "./components/CupcakeDetails";
import Reviews from "./components/Reviews";
import ErrorPage from "./ErrorPage";
import Cart from './components/Cart';

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
      element: <CupcakeList />,
    },  
    {
      //id needs to match when you use useParams on CupcakeDetails page, 
      //so you can reference the specific cupcake id to be rendered on CupcakeDetails
      path: "/cupcakelist/:id",
      element: <CupcakeDetails />, 
    },
    {
      path: "/reviews",
      element: <Reviews />,
    },
    {
      path: "/mycart",
      element: <Cart />,
    }
  ]
}];

export default routes;