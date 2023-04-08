import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const childHeroesRoutes = [
  { path: "/marvel", element: <MarvelPage /> },
  { path: "/dc", element: <DCPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/hero", element: <HeroPage /> },
  { path: "/*", element: <Navigate to={"/marvel"} /> },
];

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
