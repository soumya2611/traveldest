import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const backendAPI = "http://localhost:4000/api/destination/all-detstination";

  // Fetch data from the backend API
  useEffect(() => {
    axios
      .get(backendAPI)
      .then((response) => {
        setData(response.data.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center p-4">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white border border-gray-200 rounded-lg shadow-md max-w-sm w-full"
        >
          <div className="overflow-hidden rounded-t-lg">
            {/* Display the first image from the item.image array */}
            <img
              src={item.image[2]} // Displaying only the second image mera marzi ba!a mo ichha
              alt={item.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <Link to={`/details/${item._id}`} className="block">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">
              <strong>Location:</strong>{" "}
              <a
                href={item.location} // External link to the map
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
