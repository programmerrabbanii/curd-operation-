import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import GetUsers from './Components/GetUsers/GetUsers.jsx'
import Root from './Root/Root.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:([
      {
        path:"/",
        element:<Home></Home> 
      },
      {
        path:"/getusers",
        element:<GetUsers></GetUsers>,
        loader:()=>fetch('http://localhost:5000/users')
      }
    ])
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
