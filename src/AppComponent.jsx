import React, { createContext } from "react";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();

const App = () =>{

    return(
        <>
            <FirstName.Provider value={"Avi"}>
                <LastName.Provider value={"Moliya"}>
                    <ComponentA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default App; 
export { FirstName, LastName };