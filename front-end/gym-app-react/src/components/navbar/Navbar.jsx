import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Between } from "../../UIKit/Layouts/Between/Between";
import { BtnSmall } from "../../UIKit/Elements/BtnSmall/BtnSmall";
import "./Navbar.css";
import { authContext } from "../../auth/authContext";

export const Navbar = () => {
  const { isLoggedIn, logUserOut, userId } = useContext(authContext);

  return (
    <nav className="Nav">
      <Between>
        {isLoggedIn && <NavLink to="/profile">my profile</NavLink>}
        <NavLink to="/">my homepage</NavLink>
        {isLoggedIn && <NavLink to="/search">search workouts</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {isLoggedIn && (
          <BtnSmall onClick={() => logUserOut(userId)}>Log Out</BtnSmall>
        )}
      </Between>
    </nav>
  );
};
