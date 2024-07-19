import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import AddProduct from '../pages/AddProduct/addProduct';
import PaymentSaller from '../pages/payment/paymentSaller';
import SearchPage from '../pages/SearchPage/SearchPage';
import PlaceBid from '../pages/PlaceBid/PlaceBid';
import CartItem from '../pages/CartItem/CartItem';
import UserInformation from '../pages/UserInformation/UserInformation';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'payment-saller',
        element: <PaymentSaller />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'place-bid',
        element: <PlaceBid />,
      },
      {
        path: 'cart-item',
        element: <CartItem />,
      },
      {
        path: 'user',
        element: <UserInformation />,
      },
    ],
  },
]);

export default router;
