import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const PropertyList = ({ filters, properties, onAddToFavorites }) => {
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const handleMouseEnter = (property) => {
    setHoveredProperty(property);
  };

  const handleMouseLeave = () => {
    setHoveredProperty(null);
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (!filters.city ||
        property.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= parseInt(filters.maxPrice)) &&
      (!filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Available Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 transform transition-transform duration-500 ease-out hover:scale-105"
            onMouseEnter={() => handleMouseEnter(property)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="w-full h-64 overflow-hidden rounded-t-lg"
              style={{
                backgroundImage: `url(${property.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease-out",
                transform:
                  hoveredProperty && hoveredProperty.id === property.id
                    ? "scale(1.10)"
                    : "scale(1)",
              }}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
                hoveredProperty && hoveredProperty.id === property.id
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="text-white text-center">
                <h3 className="text-2xl font-semibold mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-300 mb-4">{property.city}</p>
                <div className="flex items-center justify-center mb-4">
                  {Array.from({ length: 5 }, (_, index) =>
                    index < property.rating ? (
                      <FaStar key={index} className="text-yellow-400 text-xl" />
                    ) : (
                      <FaRegStar
                        key={index}
                        className="text-gray-300 text-xl"
                      />
                    )
                  )}
                </div>
                <p className="text-lg font-bold mb-2">
                  ${property.price} per month
                </p>
                <p className="text-gray-400 mb-4">
                  {property.bedrooms} bedrooms
                </p>
                <button
                  onClick={() => onAddToFavorites(property)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PropertyList.propTypes = {
  filters: PropTypes.shape({
    city: PropTypes.string,
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
    bedrooms: PropTypes.number,
  }),
  properties: PropTypes.arrayOf(
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
  onAddToFavorites: PropTypes.func.isRequired,
};

export default PropertyList;
