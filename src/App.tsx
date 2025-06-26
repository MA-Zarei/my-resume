import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import DynamicPage from './pages/[slug]/page'
import Works from './pages/Works'
import About from './pages/About'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },      // Home page at root URL
      // { path: ':slug', element: <DynamicPage /> },  // Dynamic pages for other routes
      { path: '/works', element: <Works /> },
      { path: '/about', element: <About /> },
      { path: '/*', element: <NotFound /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
