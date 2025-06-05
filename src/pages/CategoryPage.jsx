import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
const CategoryPage = () => {
  const { id } = useParams();
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImage = 'https://i.ibb.co/5g5XTDD9/reading.jpg';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/news.json"); 
        
        let filteredData;
        if (id === "0") { 
          filteredData = response.data;
        } else if (id === "1") {
          filteredData = response.data.filter(
            (ct) => ct.others?.is_today_pick === true 
          );
        } else {
          filteredData = response.data.filter((ct) => ct.category_id === parseInt(id));
        }
        
        setCategoriesData(filteredData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading data: {error}
      </div>
    );
  }

  if (categoriesData.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        No articles found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 px-3 pb-6"> {/* Changed space-y to gap for better spacing */}
      {categoriesData.map((category) => (
        <div 
          key={category.id} 
          className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 bg-gray-100">
            <img
              src={category.image_url || defaultImage}
              alt={category.title || "News image"}
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="lazy"
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