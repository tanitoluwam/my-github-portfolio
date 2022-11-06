import React from "react";
import errorImage from "../assets/images/github-error.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="text-center">
      <img src={errorImage} alt="" className="mx-auto mt-4"/>
      <div>
        <h2 className="text-9xl text-red-700 mt-4">404</h2>
        <p className="text-xl text-secondary mt-2 mb-10">This is not the webpage you are looking for</p>
      </div>
      <Link to ="/" className="bg-secondary text-primary hover:text-white  py-3 px-5 rounded-lg mt-5 ">Back to Homepage</Link>
    </div>
  );
};
