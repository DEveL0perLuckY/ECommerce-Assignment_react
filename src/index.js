import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/Homepage";
import PaymentPage from "./Pages/PaymentPage";
import ProductListingPage from "./Pages/ProductListingPage";
import CheckoutPage from "./Pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/payment", element: <PaymentPage /> },
      { path: "/productListing", element: <ProductListingPage /> },
      { path: "/checkout/:productId", element: <CheckoutPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
