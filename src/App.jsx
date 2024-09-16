import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './layouts/app-layouts';
// import RequireAuth from "./components/require-auth";

import RedirectLink from './Pages/Redirect-link';
import Auth from './Pages/Auth';
import Dashboard from './Pages/dashboard';
import LandingPage from './Pages/landingpage';
import Link from './Pages/link';
  
// Layouts

// Route configuration
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/link/:id",
        element: <Link />
      },
      {
        path: "/:id",
        element: <RedirectLink />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;