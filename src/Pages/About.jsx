import { FaLeaf, FaSeedling, FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 px-6 bg-green-50 text-gray-800">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to{" "}
          <span className="text-green-600 font-semibold">Organic Haven</span>
          —your trusted source for fresh, organic, and natural food. We are
          dedicated to providing high-quality organic products with a touch of
          village freshness and full transparency.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-80 h-96">
          <FaLeaf className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">100% Organic</h3>
          <p className="text-gray-600 mt-2">
            We source directly from organic farms, ensuring chemical-free and
            healthy products for you and your family.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-80 h-96">
          <FaSeedling className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Farm to Table
          </h3>
          <p className="text-gray-600 mt-2">
            Our products come straight from the farms, preserving the natural
            taste, freshness, and nutritional value.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-80 h-96">
          <FaHandHoldingHeart className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800">
            Trust & Transparency
          </h3>
          <p className="text-gray-600 mt-2">
            We maintain complete transparency in sourcing and processing,
            ensuring that you get the best organic food.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center mt-12">
        <h3 className="text-3xl font-bold text-green-700">Our Mission</h3>
        <p className="text-lg text-gray-700 mt-4">
          We aim to bring back the purity of traditional village farming,
          delivering organic food to every household. By supporting local
          farmers and promoting sustainable agriculture, we are building a
          healthier future.
        </p>
      </div>
    </section>
  );
};

export default About;
