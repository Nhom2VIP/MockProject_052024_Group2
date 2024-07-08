import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

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
      }
    ],
  },
]);

export default router;
