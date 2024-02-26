import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Home, ApplyPage, Error, ToTopBtn } from "./components";
import "./index.css";

const App = () => {
  const router = createBrowserRouter([
    { path: "/DevJobs-Web-App/", element: <Home /> },
    {
      path: "/DevJobs-Web-App/:id",
      element: <ApplyPage />,
      errorElement: <Error />,
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
  });

  return (
    <>
      <Header />
      <main className="p-6 max-[512px]:px-4 mt-20">
        <RouterProvider router={router} />
      </main>
      <ToTopBtn scrollPosition={scrollPosition} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
