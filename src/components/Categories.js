import React from "react";

const Categories = [
  { id: 1, name: "Tops" },
  { id: 2, name: "Pants" },
  { id: 3, name: "Shoes" },
];

const CategoryPhotos = {
  1: [
    { id: 1, imageUrl: "https://example.com/top1.jpg" },
    { id: 2, imageUrl: "https://example.com/top2.jpg" },
    // Add more images as needed
  ],
  2: [
    { id: 1, imageUrl: "https://example.com/pants1.jpg" },
    { id: 2, imageUrl: "https://example.com/pants2.jpg" },
    // Add more images as needed
  ],
  3: [
    { id: 1, imageUrl: "https://example.com/shoes1.jpg" },
    { id: 2, imageUrl: "https://example.com/shoes2.jpg" },
    // Add more images as needed
  ],
};

export { Categories, CategoryPhotos };
