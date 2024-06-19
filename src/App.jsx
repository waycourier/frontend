import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BingMaps from './components/BingMaps'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import PackageMap from './components/PackageMap'
import Signup from './components/Signup'


function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {

        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
