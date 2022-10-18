import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";
import { Root, About } from "./components"
import './input.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "about/",
          element: <About />,
        }
      ]
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)