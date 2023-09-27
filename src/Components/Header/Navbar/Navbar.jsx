/** @format */

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto flex justify-between items-center py-7 px-5">
        <div>
            <img src="/src/img/Logo.png" alt="" className="w-36"/>
        </div>
        <ul className="lg:flex gap-10 font-bold">
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/donation'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
              }>
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
