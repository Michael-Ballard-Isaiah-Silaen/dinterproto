import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import SwipePage from "../pages/SwipePage";
import MapPage from "../pages/MapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SwipePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
    ],
  },
]);

export default router;