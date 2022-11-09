import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-300">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">Learn Programming</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <h2>Home</h2>
            </li>
            <li>
              <Link to="/courses/:id">
                <h2>Courses</h2>
              </Link>
            </li>
            <li>
              <h2>FAQ</h2>
            </li>
            <li>
              <Link to="/blog">
                <h2>Blog</h2>
              </Link>
            </li>
            <li>
              <h2>Item 1</h2>
            </li>
            <li>
              <h2>Log in</h2>
            </li>
            <li>
              <h2>Sign up</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
