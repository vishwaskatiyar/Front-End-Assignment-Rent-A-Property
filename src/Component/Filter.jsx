// Filter.jsx
import React, { useState } from "react";

const Filter = ({ filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="mb-8 p-4">
      <button
        onClick={toggleFilters}
        className="text-xl font-bold text-blue-600 focus:outline-none"
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>
      <div
        className={`mt-4 transition-all duration-500 ease-in-out transform ${
          showFilters ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <form className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-2 text-lg font-medium">City:</label>
            <input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-2 text-lg font-medium">Min Price:</label>
            <input
              type="range"
              name="minPrice"
              min="0"
              max="10000"
              step="500"
              value={filters.minPrice}
              onChange={handleInputChange}
              className="w-full"
            />
            <span className="block mt-1 text-center">
              ${filters.minPrice || "Any"}
            </span>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-2 text-lg font-medium">Max Price:</label>
            <input
              type="range"
              name="maxPrice"
              min="0"
              max="10000"
              step="500"
              value={filters.maxPrice}
              onChange={handleInputChange}
              className="w-full"
            />
            <span className="block mt-1 text-center">
              ${filters.maxPrice || "Any"}
            </span>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <label className="block mb-2 text-lg font-medium">Bedrooms:</label>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
