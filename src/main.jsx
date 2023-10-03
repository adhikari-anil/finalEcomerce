import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import Homepage from './module/HomeBody/Homepage.jsx';
import SignUp from './module/auth/SignUp/SignUp.jsx';
import About from './module/About/About.jsx';
import Contact  from './module/Contact/Contact.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Homepage />
      },
      {
        path: '/SignUp',
        element: <SignUp />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes} />    
  </React.StrictMode>,
)
