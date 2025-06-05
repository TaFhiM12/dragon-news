import React, { useEffect, useState } from "react";

import axios from "axios";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios("/categories.json")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(categories)
  return (
    <div>
      <h1 className="font-semibold">All Category</h1>
      <div className="grid grid-cols-1  gap-2 mt-5">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <NavLink
              className={({ isActive }) =>
                `btn bg-base-100 border-0 hover:bg-base-200 ${
                  isActive ? "bg-base-300 font-bold" : ""
                }`
              }
              to={`/category/${category.id}`}
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Categories;
