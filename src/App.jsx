import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { properties } from "./data";
import Filter from "./Component/Filter";
import PropertyList from "./Component/Property";
import Favorites from "./Component/Favorites";
import Navbar from "./Component/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify"; // Import Bounce transition

const App = () => {
  // Initialize favorites state from localStorage or default to an empty array
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Initialize filters state
  const [filters, setFilters] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Add a property to favorites
  const handleAddToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
      toast.success("Property added to favorites", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce, // Correctly set the Bounce transition
      });
    }
  };

  // Remove a property from favorites
  const handleRemoveFromFavorites = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
    toast.error("Property removed from favorites", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, // Correctly set the Bounce transition
    });
  };

  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter filters={filters} onFilterChange={handleFilterChange} />
                <PropertyList
                  filters={filters}
                  properties={properties}
                  onAddToFavorites={handleAddToFavorites}
                />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
              />
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
