import React from "react";
import ReactDOM from "react-dom/client";
import { LayoutComponent } from "./components/Layout";

const FirstComponent = () => {
  return <LayoutComponent />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);
