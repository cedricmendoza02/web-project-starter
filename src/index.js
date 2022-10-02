import React from "react";
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello Cedric</h1>,
    },
    {
      path: "/about",
      element: <h1>About</h1>,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)