// Favorites.jsx
import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Your Favorites
      </h2>
      {favorites.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">
          You have no favorite properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((property) => (
            <div
              key={property.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 transform transition-transform duration-500 ease-out hover:scale-105"
            >
              <div
                className="w-full h-64 overflow-hidden rounded-t-lg"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.city}</p>
                <p className="text-lg font-bold mb-2">
                  ${property.price} per month
                </p>
                <p className="text-gray-400 mb-4">
                  {property.bedrooms} bedrooms
                </p>
                <button
                  onClick={() => onRemoveFromFavorites(property.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  <FaTrash className="inline mr-2" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      bedrooms: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
};

export default Favorites;
