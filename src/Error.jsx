import React from "react";
import { NavLink } from "react-router-dom";

const Error = () =>{
    return (
        <>
            <h1>404 page not found.</h1>
            <NavLink to="/">Go Back</NavLink>
        </>
    );
};

export default Error;