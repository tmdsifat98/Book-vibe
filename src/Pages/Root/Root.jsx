import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import "../../App.css"
import Header from "../../Components/Header/Header";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
