import React from "react";
import { HeaderComponent } from "./Header.js";
import { BodyComponent } from "./Body.js";
import { FooterComponent } from "./Footer.js";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Error from "./Error";
import AboutUsComponent from "./AboutUs.js";
import ReactDOM from "react-dom/client";
import ContactComponent from "./Contact.js";
import RestraurentMenu from "./RestraurantMenu.js";
import { Provider } from "react-redux";
import store from "../store/store.js";
import CartComponent from "./Cart.js";
// import { BodyComponent } from "./BodyA.js";


const LayoutComponent = () => {
  

  return (
    <>
     <Provider store={store}>
      <HeaderComponent />
      <Outlet/>
      <FooterComponent />
     </Provider>
     
    </>
  );
  
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<LayoutComponent/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<BodyComponent/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element:<AboutUsComponent/>,
        errorElement:<Error/>
      },
      {
        path:"/contact",
        element:<ContactComponent/>,
        errorElement:<Error/>
      },
      {
        path:"/cart",
        element:<CartComponent/>,
        errorElement:<Error/>
      },
      {
        path:"/restraurant/:id",
        element:<RestraurentMenu/>

      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
