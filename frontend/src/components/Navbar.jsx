import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate()
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // Toggle dropdown visibility based on click
  const handleDropdownClick = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close dropdown if it's already open
    } else {
      setActiveDropdown(dropdown); // Open the clicked dropdown
    }
  };

  // Close the dropdown after selecting an item
  const handleItemClick = () => {
    setActiveDropdown(null); // Close the dropdown when an item is clicked
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission for search (redirect to search results)
  const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log(searchQuery)
    if (searchQuery) {
      // Handle search logic here, for example, redirecting to a search results page
      navigate (`/search/${searchQuery}`)
    }
  };

  return (
    <nav className="bg-gray-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white hover:text-zinc-950 text-2xl font-bold">
          <Link to="/">Mo Odisha</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {/* Home Link */}
          <Link
            to="/"
            className="text-white hover:text-zinc-950  transition duration-200"
          >
            Home
          </Link>
           {/* Find by District Dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-zinc-950  transition duration-200"
              onClick={() => handleDropdownClick("district")}
            >
              Find by District
            </button>
            {activeDropdown === "district" && (
              <div className="absolute left-0 mt-4 bg-slate-400 shadow-lg rounded-md text-black p-2 w-36 max-h-[280px] overflow-y-auto">
                <Link
                  to="/"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  All District
                </Link>
                <Link
                  to="/district/angul"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Angul
                </Link>
                <Link
                  to="/district/balangir"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Balangir
                </Link>
                <Link
                  to="/district/balasore"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Balasore
                </Link>
                <Link
                  to="/district/bargarh"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Bargarh
                </Link>
                <Link
                  to="/district/bhadrak"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Bhadrak
                </Link>
                <Link
                  to="/district/boudh"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Boudh
                </Link>
                <Link
                  to="/district/cuttack"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Cuttack
                </Link>
                <Link
                  to="/district/deogarh"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Deogarh
                </Link>
                <Link
                  to="/district/dhenkanal"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Dhenkanal
                </Link>
                <Link
                  to="/district/gajapati"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Gajapati
                </Link>
                <Link
                  to="/district/ganjam"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Ganjam
                </Link>
                <Link
                  to="/district/jagatsinghpur"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Jagatsinghpur
                </Link>
                <Link
                  to="/district/jajpur"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Jajpur
                </Link>
                <Link
                  to="/district/jharsuguda"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Jharsuguda
                </Link>
                <Link
                  to="/district/kalahandi"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Kalahandi
                </Link>
                <Link
                  to="/district/kandhamal"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Kandhamal
                </Link>
                <Link
                  to="/district/kendrapara"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Kendrapara
                </Link>
                <Link
                  to="/district/kendujhar"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Kendujhar
                </Link>
                <Link
                  to="/district/khordha"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Khordha
                </Link>
                <Link
                  to="/district/koraput"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Koraput
                </Link>
                <Link
                  to="/district/malkangiri"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Malkangiri
                </Link>
                <Link
                  to="/district/mayurbhanj"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Mayurbhanj
                </Link>
                <Link
                  to="/district/nabarangpur"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Nabarangpur
                </Link>
                <Link
                  to="/district/nayagarh"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Nayagarh
                </Link>
                <Link
                  to="/district/nuapada"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Nuapada
                </Link>
                <Link
                  to="/district/puri"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Puri
                </Link>
                <Link
                  to="/district/rayagada"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Rayagada
                </Link>
                <Link
                  to="/district/sambalpur"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Sambalpur
                </Link>
                <Link
                  to="/district/subarnapur"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Subarnapur
                </Link>
                <Link
                  to="/district/sundargarh"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Sundargarh
                </Link>
              </div>
            )}
          </div>
          {/* Find by Type Dropdown */}
          <div className="relative">
            <button
              className="text-white hover:text-zinc-950  transition duration-200"
              onClick={() => handleDropdownClick("type")}
            >
              Find by Type
            </button>
            {activeDropdown === "type" && (
              <div className="absolute left-0 mt-4 bg-slate-400 shadow-lg rounded-md text-black p-2 w-24 max-h-[280px] overflow-y-auto">
                <Link
                  to="/category/beach"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Beach
                </Link>
                <Link
                  to="/category/temple"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Temple
                </Link>
                <Link
                  to="/category/hill"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Hill
                </Link>
                <Link
                  to="/category/hillstation"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Hillstation
                </Link>
                <Link
                  to="/category/waterfall"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Waterfall
                </Link>
                <Link
                  to="/category/park"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Park
                </Link>
                <Link
                  to="/category/monastery"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Monastery
                </Link>
                <Link
                  to="/category/hotspring"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Hotspring
                </Link>
                <Link
                  to="/category/lake"
                  className="block py-1 hover:bg-gray-100 px-2 rounded-md"
                  onClick={handleItemClick}
                >
                  Lake
                </Link>
              </div>
            )}
          </div>
          {/* Search Bar */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="px-2 py-2 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-400 focus:outline-none"
              >search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
