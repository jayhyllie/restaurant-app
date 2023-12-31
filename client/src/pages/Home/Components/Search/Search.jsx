import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Search.scss";
import ProductCard from "../ProductCard/ProductCard";

function Search ({menuItems, isSearching, editIngredients, toggleEditIngredients }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null)

  useEffect(() => {
    if(isSearching) searchInputRef.current.focus();
  }, [isSearching])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleProductClick = (product) => {
    editIngredients(product);
  };

  const filterMenuItems = () => {
    return menuItems.filter((item) => {
      // Check if any prop contains the search term
      return (
        item.id.toString().includes(searchTerm) ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.categories.some((category) =>
          category.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        item.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );      
    });
  };

  return (
    <div className="search">
      <AnimatePresence>
        {isSearching && (
          <motion.div
            className="search__container"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "100%" }}
            exit={{ opacity: 0, x: "-100%" }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="search__input"
              ref={searchInputRef}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="menu__list results">
        {filterMenuItems().map((item) => (
          <ProductCard
            key={item.id}
            props={item}
            onClick={() => handleProductClick(item)}
            toggleEditIngredients={toggleEditIngredients}
          />
        ))}
      </ul>
    </div>
  );
}

export default Search;