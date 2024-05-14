import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/about/about";
import Validar from "./routes/validar_rol";
import Login from "./components/login/login";
import Register from "./components/register/register";
import logo from './assets/images/logo.svg';
import ErrorPage from "./routes/errors/404";

const router = createBrowserRouter([
  {
    path: "/TruthTrace.Web",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <App />,
  },
  {
    path: "/login",
    element: <Validar src={logo}/>
  },
  {
    path: "/login/empresa",
    element: <Login clase='empresa' />
  },
  {
    path: "/login/transportista",
    element: <Login clase='usuario' />
  },{
    path: "/register",
    element: <Register />
  }, ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
