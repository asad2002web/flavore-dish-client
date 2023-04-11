import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './component/ErrorPage'

const route = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider 
    router={route}
    ></RouterProvider>
)
