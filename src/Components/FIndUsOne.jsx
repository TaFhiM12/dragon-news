import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FIndUsOne = () => {
  return (
    <div className="mt-6">
      <h1 className="font-semibold mb-4">Find Us On</h1>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn justify-start bg-base-100  join-item">
            <FaFacebookSquare />
            Facebook</button>
          <button className="btn justify-start bg-base-100 join-item">
            <FaTwitterSquare />
            Twitter</button>
          <button className="btn justify-start bg-base-100 join-item">
            <FaInstagram />
            Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FIndUsOne;
