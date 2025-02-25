import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthForm from "../Pages/AuthFrom";

// Define all routes here
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Add routes here
      { path: "/", element: <Home /> },
      { path: "/about", element: <h1>About Page</h1> },
      { path: "/login", element: <AuthForm /> },
      // Add more routes as needed
    ],
  },
]);
export default routes;
