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
import Addbrand from './admin/Addbrand.jsx';
import Phone from './brand/Phone.jsx';
import UpdateDetalis from './brand/UpdateDetalis.jsx';
import ProductDetails from './brand/ProductDetails.jsx';
import AddToCart from './admin/AddToCart.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './components/Layouts/privateroutes/PrivateRoutes.jsx';
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
        element: <PrivateRoutes>
          <Addproduct></Addproduct>
        </PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addbrand',
        element: <Addbrand></Addbrand>
      },
      {
        path: '/phones',
        element: <Phone></Phone>,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: '/updateDetails/:id',
        element: <PrivateRoutes>
          <UpdateDetalis></UpdateDetalis>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      },
      {
        path: '/proDetails/:id',
        element: <PrivateRoutes>

          <ProductDetails></ProductDetails>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)

      },
      {
        path: '/addtocart',
        element: <PrivateRoutes>
          <AddToCart></AddToCart>
        </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/cart')

      },
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
