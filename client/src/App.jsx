import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Usernames from "./components/Usernames";
import RegisterComonent from "./components/RegisterComonent";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";
import Reset from "./components/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Usernames />,
  },
  {
    path: "/register",
    element: <RegisterComonent />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Password",
    element: <Password />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
