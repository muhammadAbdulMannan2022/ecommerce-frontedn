import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <FaUser /> {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-6">
          {!isLogin && (
            <div className="relative">
              <label className="block text-gray-600">Full Name</label>
              <div className="flex items-center border rounded-lg mt-2 px-3">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  className="w-full px-3 py-2 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          )}

          <div className="mt-4 relative">
            <label className="block text-gray-600">Email</label>
            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="block text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg mt-2 px-3 relative">
              <FaLock className="text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <FaUser /> {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
