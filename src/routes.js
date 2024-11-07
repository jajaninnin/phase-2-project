import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CupCakeList from "./components/CupcakeList";
import CupCakeNewForm from "./components/CupCakeNewForm";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/components/NavBar",
    element: <NavBar />,
   
  },
  {
    path: "/cupcakeList",
    element: <CupCakeList />,
 
  },
  {
    path: "/components/CupCakeNewForm",
    element: <CupCakeNewForm />,
    
  }
];

export default routes;