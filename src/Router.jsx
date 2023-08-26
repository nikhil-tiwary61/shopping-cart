import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "products",
          element: <ProductListing />,
          children: [{ path: "productpage", element: <ProductPage /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
