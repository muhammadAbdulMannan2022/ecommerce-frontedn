import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Organic Apples",
    price: "$5.99/kg",
    image: "/images/products/apple.jpg",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: "$3.49/kg",
    image: "/images/products/carrots.jpg",
  },
  {
    id: 3,
    name: "Natural Honey",
    price: "$9.99/jar",
    image: "/images/products/honey.jpg",
  },
  {
    id: 4,
    name: "Farm Eggs",
    price: "$4.99/dozen",
    image: "/images/products/egg.jpg",
  },
  {
    id: 5,
    name: "Fresh Tomatoes",
    price: "$2.99/kg",
    image: "/images/products/tomatoe.jpg",
  },
  {
    id: 6,
    name: "Organic Bananas",
    price: "$3.99/kg",
    image: "/images/products/banana.jpg",
  },
  {
    id: 7,
    name: "Natural Peanut Butter",
    price: "$6.99/jar",
    image: "/images/products/butter.jpg",
  },
];

const ProductSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProducts = products.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Organic Products
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-lg rounded-lg flex flex-col h-[400px] md:w-[250px] w-[400px]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600 text-md mt-2">{product.price}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
        {products.length > visibleCount && (
          <button
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleSeeMore}
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
