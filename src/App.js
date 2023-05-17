import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import DriversPage, { loader as fetchDriver } from "./pages/Drivers";
import SearchPage from "./pages/Search";
import DriverDetailPage from "./pages/DriverDetail";
import ConstructorPage from "./pages/Constructors";
import ConstructorDetailPage from "./pages/TeamDetail";
import CircuitsPage from "./pages/Circuits";
/* import CircuitDetailPage from "./pages/CircuitDetail"; */
import StandingsPage from "./pages/Standings";
import DriverImagePage from "./pages/DriverImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/standings",
        element: <StandingsPage />,
      },
      {
        path: "/drivers",
        children: [
          {
            path: "",
            element: <DriversPage />,
            loader: fetchDriver,
            children: [
              {
                path: "search",
                element: <SearchPage />,
              },
            ],
          },
          {
            path: ":id",
            element: <DriverDetailPage />,
            children: [{ path: ":imgId", element: <DriverImagePage /> }],
          },
        ],
      },
      {
        path: "/constructors",
        children: [
          {
            path: "/constructors",
            element: <ConstructorPage />,
          },
          {
            path: ":id",
            element: <ConstructorDetailPage />,
          },
        ],
      },
      {
        path: "/circuits",
        children: [
          {
            path: "/circuits",
            element: <CircuitsPage />,
          },
          /* {
            path: ":id",
             element: <CircuitDetailPage />, 
          }, */
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
