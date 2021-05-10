import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <NavLink exact activeClassName="class_active" to="/">About us!</NavLink>
            <NavLink exact activeClassName="class_active" to="/contact">Contact us!</NavLink>
            <NavLink exact activeClassName="class_active" to="/user/Avi/Moliya">User</NavLink>
            <NavLink exact activeClassName="class_active" to="/search">Search</NavLink>
            <br />
            <br />
            <br />
            <Link to="/">About us</Link>
            <Link to="/contact">Contact us</Link>
            <br />
            <br />
            <br />
            <a href="/">About</a>
            <a href="/contact">Contact</a>
        </>
    );
};

export default Navbar;