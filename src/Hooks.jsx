import React, { useState } from "react";



const Hooks = () =>{
const state=useState();
//console.log(state);
const [count,setCount] = useState(0);

// const IncNum = () =>{
//     setCount(count+1);
// console.log("clicked "+ count++);
// }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={ () =>
    setCount(count+1)}>Click Me!!</button>
        </>
    );
};

export default Hooks;