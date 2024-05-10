import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/about/about";
import Login from "./routes/login_validar_rol";
import Login_Empresa from "./routes/login_emp";
import Login_Transportista from "./routes/login_trans";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <Login />
  },
  {
    path: "/login/empresa",
    element: <Login_Empresa />
  },
  {
    path: "/login/transportista",
    element: <Login_Transportista />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
