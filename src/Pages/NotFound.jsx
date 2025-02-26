import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      {/* Image */}
      <img
        src="/images/pageNotFound/3793096.jpg" // Make sure to put the image in the public folder
        alt="404 Not Found"
        className="w-80 md:w-96"
      />

      {/* Error Message */}
      <p className="text-xl text-gray-700 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Go Back Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 flex items-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        <FaHome size={20} /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
