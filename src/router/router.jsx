import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import PlaceBid from "../pages/PlaceBid/PlaceBid";

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
        path: "login",
        element: <LoginPage />
      },
      {
        path:"register",
        element:<RegisterPage/>
      },
      {
        path:"search",
        element: <SearchPage />
      },
      {
        path: "place-bid",
        element: <PlaceBid />
      }
    ],
  },
]);

export default router;
