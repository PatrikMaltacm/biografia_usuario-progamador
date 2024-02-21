import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './Form.jsx'
import ErrorPage from './ErrorPage.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/biografia_usuario-progamador",
    element: <App/>,
    errorElement: <ErrorPage/>
  },

  {
    path: "/biografia_usuario-progamador/form",
    element: <Form/>,
    errorElement: <ErrorPage/>
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
