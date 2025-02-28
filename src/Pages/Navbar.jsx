import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = ({ isScrolling, setIsScrolling }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { loading, user, logOutUser } = useContext(AuthContext);
  const location = useLocation();

  const toggleNavbar = () => {
    if (isScrolling && isOpen) {
      setIsOpen(false);
      setIsScrolling(false);
    }

    setIsOpen(!isOpen);
    // console.log(isOpen);
    // console.log(isScrolling);
  };
  const handleLogout = () => {
    logOutUser();
    console.log("logged out successfully");
  };

  useEffect(() => {
    if (isScrolling && isOpen) {
      setIsOpen(false);
      setIsScrolling(false);
    }
  }, [isOpen, isScrolling]);
  return (
    <nav
      className={`z-20 bg-white relative shadow-md py-4 px-6 flex justify-between items-center h-[85px] overflow-hidden border border-b ${
        isOpen && "fixed top-0 left-0 w-full"
      }`}
    >
      <div className="text-2xl font-bold text-green-600 logoFont">
        <Link to="/">Organic Haven</Link>
      </div>
      <div
        className={`fixed md:relative top-[85px] md:top-0 right-0 h-[calc(100%-85px)] md:h-auto w-2/3 md:w-auto bg-gray-50 md:bg-transparent flex flex-col md:flex-row items-center justify-start gap-6 md:gap-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 py-6 md:py-0">
          {[
            { path: "/", label: "Home" },
            { path: "/shop", label: "Shop" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <li
              key={path}
              className={`hover:cursor-pointer hover:bg-green-100 px-10 py-2 text-center md:px-4 md:py-1 rounded-md ${
                location?.pathname === path && "bg-green-100"
              }`}
            >
              <Link
                to={path}
                className={`text-gray-700 hover:text-green-600 ${
                  location.pathname === path ? "font-bold text-green-600" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-6 md:py-0">
          <Link
            to="/cart"
            className="flex items-center justify-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <MdOutlineShoppingCart /> <span>Cart</span>
          </Link>
          {!loading && !user ? (
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Login
            </Link>
          ) : (
            <div
              onClick={() => handleLogout()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Log out
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden z-10">
        <button className="text-gray-700 text-2xl" onClick={toggleNavbar}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  isScrolling: PropTypes.bool.isRequired,
  setIsScrolling: PropTypes.func.isRequired,
};
