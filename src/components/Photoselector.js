// src/PhotoSelector.js
import React, { useState } from "react";
import { Categories, CategoryPhotos } from "./Categories";

function PhotoSelector() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <h2>Select Photos by Category</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {Categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            style={{ margin: "0 10px" }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {selectedCategory &&
          CategoryPhotos[selectedCategory].map((photo) => (
            <div key={photo.id} style={{ margin: "10px", textAlign: "center" }}>
              <img
                src={photo.imageUrl}
                alt={`Photo ${photo.id}`}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PhotoSelector;
