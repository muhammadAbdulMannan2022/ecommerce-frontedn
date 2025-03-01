import { useContext, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const BasicInfo = ({ user }) => {
  const [orgnalUser, setOrgnalUser] = useState(null);
  const { user: orgnalUser1, loading } = useContext(AuthContext);
  useEffect(() => {
    setOrgnalUser(orgnalUser1);
    console.log(orgnalUser);
  }, [loading]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={orgnalUser?.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full border border-gray-300"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">{orgnalUser?.displayName}</h2>
          <p className="text-gray-500">{orgnalUser?.email}</p>
        </div>
        <Link
          to="/profile/update"
          className="flex items-center gap-2 bg-blue-600 text-white md:px-4 md:py-2 rounded hover:bg-blue-700 px-2 py-1"
        >
          <FaUserEdit className="text-2xl hidden md:block" /> Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default BasicInfo;
