import "../App.css";
import PropTypes from "prop-types";
import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <Outlet />
      {/* Footer goes here */}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
