import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold">Organic Delights</h2>
          <p className="mt-4 text-gray-300">
            Your trusted source for fresh, organic, and locally-sourced food,
            bringing you the true flavors of nature.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/shop" className="hover:text-green-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-green-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-green-400 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 border-t border-gray-600 pt-4 font-bold">
        <p className="text-wrap">
          &copy; {new Date().getFullYear()} Organic Delights. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
