import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const CategoryPage = () => {
  const { id } = useParams();
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios("/news.json").then((res) => {
      if (id == 0) {
        setCategoriesData(res.data);
      } else if (id == 1) {
        const filterData = res.data.filter(
          (ct) => ct.others.is_today_pick === true
        );
        setCategoriesData(filterData);
      } else {
        const idData = res.data.filter((ct) => ct.category_id == id);
        setCategoriesData(idData);
      }
    });
  }, [id]);

  return (
    <div className="grid grid-cols-1 space-y-4 px-3">
      {Array.isArray(categoriesData) &&
        categoriesData.map((category) => (
          <div key={category.id} className="card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={category.image_url}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              {category.others.is_today_pick && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Today's Pick
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center mb-2">
                <img
                  src={category.author.img}
                  alt={category.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">{category.author.name}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(category.author.published_date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 line-clamp-2">{category.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{category.details}</p>
              <Link 
                    to={`/news/${category.id}`} 
                    className="bg-secondary hover:opacity-10  text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Read More
            </Link>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm">{category.rating.number}/5</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span className="text-sm">{category.total_view}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryPage;