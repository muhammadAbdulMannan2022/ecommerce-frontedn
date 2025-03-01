import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <FaSpinner className="animate-spin text-green-600 text-6xl mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">
        Loading, please wait...
      </h2>
      <p className="text-gray-500">We are fetching the latest data for you.</p>
    </div>
  );
};

export default Loading;
