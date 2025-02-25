import "../App.css";
import PropTypes from "prop-types";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Pages/Footer";

export default function MainLayout() {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) =>
      e ? setIsScrolling(true) : setIsScrolling(false)
    );
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar isScrolling={isScrolling} setIsScrolling={setIsScrolling} />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
}
MainLayout.propTypes = {
  isScrolling: PropTypes.bool.isRequired,
  setIsScrolling: PropTypes.func.isRequired,
};
