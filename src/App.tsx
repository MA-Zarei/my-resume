import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import DynamicPage from './pages/[slug]/page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },      // Home page at root URL
      { path: ':slug', element: <DynamicPage /> }  // Dynamic pages for other routes
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
