import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DistrictPage = () => {
  const { district } = useParams(); // Get the category from the URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items of the selected category from the API
    axios
      .get(`http://localhost:4000/api/destination/district/${district}`)
      .then((response) => {
        setItems(response.data.data); // Store items of the selected category
      })
      .catch((error) => {
        console.error("Error fetching category items:", error);
      });
  }, [district]);

  if (items.length === 0) {
    return <p>No items found for {district.toUpperCase()} district.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {district.charAt(0).toUpperCase() + district.slice(1)} Destinations
        </h1>

        {/* Cards Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border rounded-lg shadow-md p-4 h-full"
            >
              <img
                src={item.image[0]} // Assuming each item has at least one image
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="flex-1 mt-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
              <Link
                to={`/details/${item._id}`}
                className="text-blue-600 mt-4 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictPage;
