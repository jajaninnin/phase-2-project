import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter(routes)

const root = ReactDOM.render(<App />, document.getElementById("root"));
root.render(<RouterProvider router={router} />);
