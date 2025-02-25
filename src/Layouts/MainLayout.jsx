import "../App.css";
import PropTypes from "prop-types";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Outlet />
      {/* Footer goes here */}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
