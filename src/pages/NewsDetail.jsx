import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/RightAside";
import { Link, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorComponent from "../Components/ErrorComponent";

const NewsDetail = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios("/news.json").then(res => {
        const found = res.data.find(ct => ct.id === id);
        if (found) {
          setCategoryData(found);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);
  
  if (notFound) return <ErrorComponent />;
  if(!categoryData){
    return <LoadingSpinner/>
  }
  return (
    <div className="w-11/12 mx-auto ">
      <header>
        <Navbar />
      </header>
      <main className=" flex flex-1 mt-5 gap-6">
        <section className="w-9/12">
          <h1 className="text-lg mb-4 font-semibold">Dragon News</h1>
          <div className="shadow-2xl">
            <div className="p-10">
              <img
                className="w-full rounded-2xl"
                src={categoryData?.image_url}
                alt=""
              />
              <h1 className="text-xl font-semibold mt-10 mb-4">
                {categoryData.title}
              </h1>
              <p>{categoryData.details}</p>
              <Link to={`/category/${categoryData.category_id}`}>
                <button className="btn btn-secondary my-10 w-[50%]">
                    <FaArrowLeftLong />
                    All news in this category </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-3/12">
          <RightAside />
        </section>
      </main>
    </div>
  );
};

export default NewsDetail;
