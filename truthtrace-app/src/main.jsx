import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/about",
    element: <About/>,
  },{
    path: "/contact",
    element: <App/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
