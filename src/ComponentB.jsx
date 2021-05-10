import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { FirstName, LastName } from "./AppComponent";

const ComponentB = () =>{
    const fname = useContext(FirstName);              //It is a concept of Hooks.
    const lname = useContext(LastName);               //It is a concept of Hooks.

    return(
        <>
            <h1>Hey!!!! {fname} {lname}</h1>
            <ComponentC />
        </>
    );
} 

export default ComponentB; 