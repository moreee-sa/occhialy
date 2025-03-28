import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/about",
    element: <About></About>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)