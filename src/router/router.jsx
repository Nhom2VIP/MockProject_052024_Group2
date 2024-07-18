import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import AddProduct from "../pages/AddProduct/addProduct";
import PaymentSaller from "../pages/payment/paymentSaller";

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
        path:"add-product",
        element:<AddProduct/>
      },
      {
        path:"payment-saller",
        element:<PaymentSaller/>
      }

    ],
  },
]);

export default router;
