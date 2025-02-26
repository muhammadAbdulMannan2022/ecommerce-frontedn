import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthForm from "../Pages/AuthFrom";
import Cart from "../Pages/Cart/Cart";
import NotFound from "../Pages/NotFound";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About";

// Define all routes here
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Add routes here
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/shop", element: <Shop /> },
      { path: "*", element: <NotFound /> },
      // Add more routes as needed
    ],
  },
]);
export default routes;
