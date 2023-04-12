import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './component/ErrorPage'
import MarksChart from './component/MarksChart/MarksChart'
import Home from './component/Home/Home'

const route = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'apply',
        element: <h3>ok</h3>
      },
      {
        path: 'chart',
        element: <MarksChart></MarksChart>
      },
      {
        path: 'blog',
        element: <h2>Blog</h2>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider 
    router={route}
    ></RouterProvider>
)
