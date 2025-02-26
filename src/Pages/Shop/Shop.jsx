import { useState } from "react";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: 5.99,
    image: "/images/products/apple.jpg",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 3.49,
    image: "/images/products/carrots.jpg",
  },
  {
    id: 3,
    name: "Natural Honey",
    category: "Honey",
    price: 9.99,
    image: "/images/products/honey.jpg",
  },
  {
    id: 4,
    name: "Farm Eggs",
    category: "Dairy",
    price: 4.99,
    image: "/images/products/egg.jpg",
  },
  {
    id: 5,
    name: "Organic Bananas",
    category: "Fruits",
    price: 2.99,
    image: "/images/products/banana.jpg",
  },
  {
    id: 6,
    name: "Fresh Milk",
    category: "Dairy",
    price: 7.99,
    image: "/images/products/milk.gif",
  },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null); // null, "asc", "desc"

  // Categories List
  const categories = ["All", "Fruits", "Vegetables", "Honey", "Dairy"];

  // Filter & Sort Products
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <select
          className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <div className="flex gap-2">
          <button
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${
              sortOrder === "asc" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSortOrder("asc")}
          >
            <FaSortAmountUp /> Low to High
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${
              sortOrder === "desc" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSortOrder("desc")}
          >
            <FaSortAmountDown /> High to Low
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[23%] flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600 text-md mt-2">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
