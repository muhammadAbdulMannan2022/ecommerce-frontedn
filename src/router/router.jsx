import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

// Define all routes here
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Add routes here
      { path: "/", element: <h1>Home Page</h1> },
      { path: "/about", element: <h1>About Page</h1> },
      // Add more routes as needed
    ],
  },
]);
export default routes;
