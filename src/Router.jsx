import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductListing from "./components/ProductListing";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products",
      element: <ProductListing />,
    },
  ]);

  return <RouterProvider router={router} />;
}
