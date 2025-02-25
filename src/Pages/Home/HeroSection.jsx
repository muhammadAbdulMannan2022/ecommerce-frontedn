import { FaLeaf } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[calc(100vh-85px)] flex items-center justify-center bg-cover bg-center text-white px-6 md:px-12 "
      style={{
        backgroundImage: "url('/images/bgHero.jpg')",
      }}
    >
      <div className="w-full h-full bg-black absolute opacity-30"></div>
      <div className="max-w-2xl text-center bg-black bg-opacity-50 p-8 rounded-lg z-10">
        <div className="flex justify-center mb-4">
          <FaLeaf className="text-green-400 text-5xl" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Fresh & Organic Food, Straight from the Farm
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Experience the true taste of nature with our locally-sourced organic
          products.
        </p>
        <div className="mt-6">
          <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
