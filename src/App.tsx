import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './Pages/Home';
import RootLayout from './Pages/Root';
import ProductPage from './Pages/Products';
import { ShoppingCartProvider } from './store/CartContext';
import Signin from './Pages/UserDetail';
import Cart from './Pages/Cart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
        ],
      },
      {
        path: 'signin',
        children: [
          {
            index: true,
            element: <Signin />
          },
        ],
      },
      {
        path: 'cart',
        children: [
          {
            index: true,
            element: <Cart />
          }
        ]
      }
    ],
  },
]);

function App() {

  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>

  );
}

export default App;