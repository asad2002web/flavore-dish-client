import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './component/ErrorPage'
import MarksChart from './component/MarksChart/MarksChart'
import Home from './component/Home/Home'
import FeaturesDetails from './component/FeaturesDetails/FeaturesDetails'
import AppliedJobs from './component/AppliedJobs/AppliedJobs'
import { productsAndCartData } from './component/utilities/selectJobs'
import Blog from './component/Blog/Blog'
import FeaturesCard from './component/FeaturesCard/FeaturesCard'

const route = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch("jobDetails.json")
      },
      {
        path: 'apply',
        element: <AppliedJobs></AppliedJobs>,
        loader:productsAndCartData
      },
      {
        path: 'chart',
        element: <MarksChart></MarksChart>,
      },
      {
        path: "/details",
        element: <FeaturesDetails></FeaturesDetails>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider 
    router={route}
    ></RouterProvider>
)
