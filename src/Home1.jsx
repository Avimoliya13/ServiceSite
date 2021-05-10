import React from "react";
import Common from "./Common";
import IT from "../src/Images/IT.jpg";

const Home1 = () =>{
    return(
        <>
            <Common name="Grow your business with" imgsrc={IT} visit="/service" btnname="Get Started" />
        </>
    );
};

export default Home1;