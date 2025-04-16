import React from "react";
import BannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 py-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary bg-[#23BE0A] border-none my-4">
            View The List
          </button>
        </div>
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
