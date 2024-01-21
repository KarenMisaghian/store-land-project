import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './Pages/Home';
import RootLayout from './Pages/Root';
import Signin from './Pages/UserDetail';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'signin',
        children: [
          {
            index: true,
            element: <Signin />
          },
        ],
      }
    ],
  },
]);

function App() {

  return (
      <RouterProvider router={router} />

  );
}

export default App;