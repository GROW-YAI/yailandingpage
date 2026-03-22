import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './LandingPage'
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    }
  ])
  return (
    <>
      <BoafoWidgetInitializer />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
