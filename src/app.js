// @ts-nocheck
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const RestaurantMenu = lazy(() => {
  import("./components/RestaurantMenu");
});

const About = lazy(() => import("./components/AboutUs"));
const AppLayout = () => {
  //authentication
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    //make an API call and send Username and password to verify
    const data = {
      username: "Deeksha",
      password: "admin",
    };
    setUserInfo(data);
  }, []);
  console.log(userInfo);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userInfo.username }}>
        <Header />
      </UserContext.Provider>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
