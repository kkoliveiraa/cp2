import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/home.jsx'
import Error from './routes/error404.jsx'
import Produtos from './routes/produtos.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Produtos",
        element:<Produtos/>
      },
      {
        path: "Produtos/EditarProdutos/:id",
        element: <EditarProdutos/>,
       
      },
      {
        path: "/Antiga",
        element: <Navigate to ="/"/>
      }
    ]
  }  
  
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)

