// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SpaServices from "./pages/SpaServices";
import Shop from "./pages/Shop";
import BookingFlow from "./components/bookingFlow/BookingFlow";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "services", element: <SpaServices /> },
        { path: "products", element: <Shop /> },
        { path: "book", element: <BookingFlow /> },
      ],
    },
  ],
  {
    basename: "/elan-spa/",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
