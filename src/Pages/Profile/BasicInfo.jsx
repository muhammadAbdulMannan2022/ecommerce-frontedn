import { FaUserEdit } from "react-icons/fa";

const BasicInfo = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={user?.profilePicture || "/default-avatar.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full border border-gray-300"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white md:px-4 md:py-2 rounded hover:bg-blue-700 px-2 py-1">
          <FaUserEdit className="text-2xl hidden md:block" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
