import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App"
// import LandingPage from "pages/LandingPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
