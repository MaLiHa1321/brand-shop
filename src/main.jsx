import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './components/Layouts/Mainlayout.jsx';
import Home from './components/Layouts/Home.jsx';
import Brand from './components/Layouts/Brand.jsx';
import BrandDetails from './components/Layouts/BrandDetails.jsx';
import Addproduct from './admin/Addproduct.jsx';
import Login from './users/Login.jsx';
import Register from './users/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/brand/:id',
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch('/data.json')
      
      },
      {
        path: '/addproduct',
        element: <Addproduct></Addproduct>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
