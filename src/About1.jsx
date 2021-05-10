import React from "react";
import Common from "./Common";
import logo from "../src/logo.svg";

const About1 = () =>{
    return(
        <>
            <Common name="Welcome to About page" imgsrc={logo} visit="/contact" btnname="Contact Now" />
        </>
    );
};

export default About1;