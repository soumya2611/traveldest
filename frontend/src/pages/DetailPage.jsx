import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl)
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from the backend
    axios
      .get(`${backendUrl}/api/destination/${id}`)
      .then((response) => {
        setItem(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="text-white bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 mt-4 ml-4"
        >
          Back to Home
        </button>

        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-gray-500">{item.district}</p>
        </div>

        {/* Horizontal Scrollable Images */}
        <div className="overflow-x-auto flex space-x-4 p-4 border-b">
          {item.image.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="h-64 rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            <strong className="text-gray-800">Description:</strong>{" "}
            {item.description}
          </p>
          <p className="text-gray-600 mb-4">
            <strong className="text-gray-800">Category:</strong> {item.category}
          </p>
          <p className="text-gray-600 mb-4">
            <strong className="text-gray-800">Parking:</strong>{" "}
            {item.parking ? "Available" : "Not Available"}
          </p>

          {/* Google Maps Link */}
          <div className="mt-6">
            <strong className="text-gray-800 block mb-2">Location:</strong>
            <a
              href={item.location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
