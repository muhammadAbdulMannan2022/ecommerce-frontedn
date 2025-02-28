import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Make sure path is correct
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const { emailPasswordSignup, logInUserEmailPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const loction = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState(""); // For signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear error on toggle
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(loction.state.from);

    try {
      if (isLogin) {
        // Login flow
        await logInUserEmailPassword(email, password);
        console.log("Login successful");

        navigate(`${loction?.state?.from || "/"}`);
      } else {
        // Signup flow
        await emailPasswordSignup(email, password, name);
        console.log("Signup successful");
        navigate(`${loction?.state?.from || "/"}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  // console.log(emailPasswordSignup);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <FaUser /> {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <form className="mt-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <label className="block text-gray-600">Full Name</label>
              <div className="flex items-center border rounded-lg mt-2 px-3">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 outline-none"
                  placeholder="Enter your full name"
                  required={!isLogin}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="block text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg mt-2 px-3 relative">
              <FaLock className="text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter your password"
                required
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
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
