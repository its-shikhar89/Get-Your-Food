import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import OrderOnline from './components/OrderOnline.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from './components/Menu.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import Reservation from './components/Reservation.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Menu", element: <Menu /> },
      { path: "/OrderOnline", element: <OrderOnline /> },
      { path: "/Reservation", element: <Reservation /> },
      { path: "/Login", element: <Login /> },
      { path: "/Cart", element: <Cart /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


