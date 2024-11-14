// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"; // Adjust paths as needed
import DrinkDetails from "./components/DrinkDetails";
import AllDrinks from "./components/AllDrinks";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "drinks",
        element: <AllDrinks />,
      },
      {
        path: "drinks/:id",
        element: <DrinkDetails />,
      },
      // Add additional routes as needed
    ],
  },
]);

// Render the RouterProvider with defined routes
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
