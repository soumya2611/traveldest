import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SearchResultsPage = () => {
  const { query } = useParams();
  console.log(query); // Extract the query from the URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `http://localhost:4000/api/destination/destination-name/${query}`
        ); // Replace with your actual API endpoint
        setResults(response.data.data);
      } catch (err) {
        setError("Error fetching search results");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Search Results</h1>
      <p className="mt-2">
        You searched for: <span className="text-blue-500">{query}</span>
      </p>

      {loading && <p>Loading results...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && results.length === 0 && (
        <p className="mt-4">No results found for "{query}".</p>
      )}

      {!loading && results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {results.map((item) => (
            <div
              key={item._id}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image[1]}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <Link
                  to={`/details/${item._id}`}
                  className="text-blue-600 mt-4 inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
