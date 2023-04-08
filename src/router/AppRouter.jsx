import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { DCPage, MarvelPage } from "../heroes";

import { HeroesApp } from "../HeroesApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DCPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
