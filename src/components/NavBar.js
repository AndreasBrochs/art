import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";
import { useAuth0 } from "@auth0/auth0-react";

import "./NavBar.css";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
      <Fragment>
        <LogInBtn />
        <LogOutBtn />
        <ul>
          <li>
            <NavLink to="/">Landing Page</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/profile">Your Profile</NavLink>
            </li>
          )}
        </ul>
      </Fragment>
    </div>
  );
};

export default NavBar;
