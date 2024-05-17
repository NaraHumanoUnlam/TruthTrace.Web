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
import src from './assets/images/logo-horizontal.png';
import Error404 from "./routes/errors/Error404";
import FAQ from "./components/FAQ/faq";
import Help from "./components/help/help";
import Terms from "./components/terms/term";
import Principles from "./components/principles/principles";
import Privacy from "./components/privacy/privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },{
    path: "/TruthTrace.Web",
    element: <App />,
    errorElement: <Error404 />,
  },
  /**TruthTrace.Web */
  {
    path: "/about",
    element: <About />,
    errorElement: <Error404 />,
  },
  {
    path: "/contact",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/TruthTrace.Web/login",
    element: <Validar src={logo}/>,
    errorElement: <Error404 />,
  },
  {
    path: "/TruthTrace.Web/login/empresa",
    element: <Login clase='empresa' />,
    errorElement: <Error404 />,
  },
  {
    path: "/TruthTrace.Web/login/transportista",
    element: <Login clase='usuario' />,
    errorElement: <Error404 />,
  },{
    path: "/TruthTrace.Web/register",
    element: <Register />,
    errorElement: <Error404 />,
  },{
    path: "/TruthTrace.Web/faq",
    element: <FAQ logo={src}/>,
    errorElement: <Error404 />,
  },
  {
    path: "/TruthTrace.Web/help",
    element: <Help src={src}/>,
    errorElement: <Error404 />,
  },
  {
    path: "/TruthTrace.Web/privacidad",
    element: <Privacy src={src}/>,
    errorElement: <Error404 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
