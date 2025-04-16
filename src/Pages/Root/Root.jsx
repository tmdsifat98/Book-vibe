import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import "../../App.css"
import Navbar from "../../Components/Header/Navbar";
import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto font-work-sans">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
