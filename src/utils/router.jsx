import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/HomePage/HomePage";
import Layout from "../features/Layout/Layout";
import ChoreDetails from "../features/ChoreDetails/ChoreDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chore/:id",
        element: <ChoreDetails />,
      },
      {
        path: "/profile",
        element: <HomePage />,
      },
      {
        path: "/templates",
        element: <HomePage />,
      },
      {
        path: "/groups",
        element: <HomePage />,
      },
    ],
  },
]);
